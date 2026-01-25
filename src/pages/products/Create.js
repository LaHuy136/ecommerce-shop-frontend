import ProductForm from "../../components/ProductForm";
import { useNavigate } from "react-router-dom";
import useProductForm from "../../hooks/useForm";
import { createProduct } from "../../api/products";
import { toast } from "react-toastify";

function Create() {
  const navigate = useNavigate();
  const initialValues = {
    name: "",
    price: "",
    condition: "new",
    sale_percent: "",
    company: "",
    description: "",
    category_id: "",
    brand_id: "",
    images: [],
  };

  const { inputs, errors, setErrors, fileErr, handleInput, handleFile } =
    useProductForm(initialValues);

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
      errorSubmits.brand_id = "Please enter product's brand";
    }

    if (!inputs.images || inputs.images.length === 0) {
      errorSubmits.images = "Please choose at least one image";
    }
    console.log("errorSubmits", errorSubmits);

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

      if (inputs.description) {
        formData.append("description", inputs.description);
      }

      const response = await createProduct(formData);
      if (response.data?.error) {
        setErrors(response.data.error);
        toast.error("Create product failed");
        return;
      }

      toast.success(response.message);
      navigate("/account/product/list", { replace: true });
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
        <h2 className="title text-center">Create Product</h2>

        <div className="signup-form">
          <ProductForm
            inputs={inputs}
            errors={errors}
            handleInput={handleInput}
            handleFile={handleFile}
            fileErr={fileErr}
            onSubmit={handleSubmit}
            isCreate={true}
          />
        </div>
      </div>
    </div>
  );
}

export default Create;
