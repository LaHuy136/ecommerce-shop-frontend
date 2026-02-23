import { useEffect, useState } from "react";
import { editProduct, updateProduct } from "../../api/products";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import useForm from "../../hooks/useForm";
import ProductForm from "../../components/ProductForm";
function Edit() {
  const [product, setProduct] = useState({});
  const { id } = useParams();
  const initialValues = {
    name: "",
    price: "",
    condition: "",
    sale_percent: "",
    company: "",
    description: "",
    category_id: "",
    brand_id: "",
    images: [],
    old_images: [],
    delete_images: [],
  };

  const {
    inputs,
    setInputs,
    errors,
    setErrors,
    fileErr,
    handleInput,
    handleFilesProduct,
  } = useForm(initialValues);

  const showProduct = async (id) => {
    try {
      const response = await editProduct(id);
      setProduct(response.product);
    } catch (error) {
      if (error.response) {
        const { status, data } = error.response;

        if (status === 404) {
          toast.error("Product not found");
        } else {
          toast.error(data?.message);
        }
      } else {
        toast.error("Network error, please check your connection");
      }
    }
  };
  useEffect(() => {
    showProduct(id);
  }, [id]);

  useEffect(() => {
    if (!product) return;

    setInputs({
      name: product.name || "",
      price: product.price || "",
      condition: product.condition || "",
      sale_percent: product.sale_percent || "",
      company: product.company || "",
      description: product.description || "",
      category_id: product.category_id || "",
      brand_id: product.brand_id || "",
      images: [],
      old_images: product.images || [],
      delete_images: [],
    });
  }, [product, setInputs]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    let errorSubmits = {};

    if (!inputs.name) {
      errorSubmits.name = "Please enter product's name";
    }

    if (!inputs.price) {
      errorSubmits.price = "Please enter product's price";
    }

    if (!inputs.condition) {
      errorSubmits.condition = "Please enter product's condition";
    }

    if (!inputs.company) {
      errorSubmits.company = "Please enter product's company";
    }

    if (!inputs.category_id) {
      errorSubmits.category_id = "Please choose product's category";
    }

    if (!inputs.brand_id) {
      errorSubmits.brand_id = "Please choose product's brand";
    }

    if (Object.keys(errorSubmits).length > 0) {
      setErrors(errorSubmits);
      return;
    }

    try {
      const formData = new FormData();
      formData.append("name", inputs.name);
      formData.append("price", inputs.price);
      formData.append("condition", inputs.condition);
      formData.append("company", inputs.company);
      formData.append("category_id", inputs.category_id);
      formData.append("brand_id", inputs.brand_id);

      if (inputs.condition === "sale") {
        formData.append("sale_percent", inputs.sale_percent);
      }

      inputs.images.forEach((file) => {
        formData.append("images[]", file);
      });

      inputs.delete_images.forEach((id) => {
        formData.append("delete_images[]", id);
      });

      if (inputs.description) {
        formData.append("description", inputs.description);
      }

      const response = await updateProduct(product.id, formData);
      if (response.data?.errors) {
        setErrors(response.data.errors);
        console.log(response.data.errors);
        toast.error("Create product failed");
        return;
      }

      toast.success(response.message || "Product updated successfully");
      showProduct(product.id);
    } catch (error) {
      if (error.response) {
        const { status, data } = error.response;

        if (status === 422) {
          setErrors(data.errors);
        } else {
          toast.error("Create product failed, please try again");
        }
      } else {
        toast.error("Network error, please check your connection");
      }
    }
  };

  return (
    <div className="col-sm-9">
      <div className="blog-post-area">
        <h2 className="title text-center">Edit Product</h2>

        <div className="signup-form">
          <ProductForm
            inputs={inputs}
            errors={errors}
            handleInput={handleInput}
            handleFilesProduct={handleFilesProduct}
            fileErr={fileErr}
            onSubmit={handleSubmit}
            isCreate={false}
            setInputs={setInputs}
          />
        </div>
      </div>
    </div>
  );
}

export default Edit;
