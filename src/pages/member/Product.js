import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { useEffect, useState } from "react";
import { deleteProduct, product } from "../../api/products";
import { toast } from "react-toastify";

function Product() {
  const { user, loading } = useAuth();
  const navigate = useNavigate();
  useEffect(() => {
    if (!user && !loading) navigate("/login");
  }, [user, loading]);

  const [products, setProducts] = useState({});
  const [pagination, setPagination] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();

  const currentPage = Number(searchParams.get("page") || 1);

  const fetchProducts = async (page = 1) => {
    try {
      const response = await product({}, page);
      setProducts(response.products.data);
      setPagination(response.products || []);
    } catch (error) {
      console.error("Fetch user products error:", error);
    }
  };

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    fetchProducts(currentPage);
  }, [currentPage]);

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this product?"))
      return;
    try {
      const response = await deleteProduct(id);

      toast.success(response.message);
      setProducts((prev) => prev.filter((p) => p.id !== id));
    } catch (error) {
      toast.error("Delete product failed: ", error);
    }
  };
  return (
    <div className="col-sm-9">
      <div className="table-responsive cart_info">
        {/* Not Product */}
        {products.length === 0 && (
          <h3 className="text-center">No found products</h3>
        )}

        {/* Products */}
        {products && products.length > 0 && (
          <>
            <h2 className="title text-center">My products</h2>

            <table className="table table-condensed">
              <thead>
                <tr className="cart_menu">
                  <td className="id">ID</td>
                  <td className="image">Image</td>
                  <td className="description">Name</td>
                  <td className="price">Price</td>
                  <td className="total">Action</td>
                  <td></td>
                </tr>
              </thead>

              <tbody>
                {products.map((product) => (
                  <tr key={product.id}>
                    <td>{product.id}</td>

                    <td className="cart_product">
                      <Link to={`/account/product/${product.id}/edit`}>
                        <img
                          src={
                            "http://ecommerce-shop.test/storage/products/85x84/" +
                            product.images[0].image
                          }
                          alt="Image Product"
                        />
                      </Link>
                    </td>

                    <td className="cart_description">
                      <h4>{product.name}</h4>
                    </td>

                    <td className="cart_price">
                      <p>$ {product.price}</p>
                    </td>

                    <td>
                      <Link
                        className="btn btn-default"
                        to={`/account/product/${product.id}/edit`}
                      >
                        <i className="fa" style={{ fontSize: 18 }}>
                          &#xf044;
                        </i>
                      </Link>
                    </td>

                    <td>
                      <button
                        className="btn btn-default"
                        onClick={() => handleDelete(product.id)}
                      >
                        <i className="fa" style={{ fontSize: 18 }}>
                          &#xf00d;
                        </i>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* Pagination */}
            {pagination?.links && (
              <div className="pagination-area">
                <ul className="pagination">
                  {pagination.links.map((link, index) => (
                    <li key={index} className={link.active ? "active" : ""}>
                      {link.page ? (
                        <button
                          type="button"
                          disabled={link.active}
                          onClick={() =>
                            setSearchParams((prev) => ({
                              ...Object.fromEntries(prev),
                              page: link.page,
                            }))
                          }
                          dangerouslySetInnerHTML={{
                            __html: link.label,
                          }}
                        />
                      ) : (
                        <span
                          dangerouslySetInnerHTML={{
                            __html: link.label,
                          }}
                        />
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </>
        )}
      </div>

      {/* ADD PRODUCT */}
      <div className="form-group">
        <Link
          className="btn btn-default"
          style={{ float: "right", margin: "20px 0px" }}
          to="/account/product/add"
        >
          Add new product
        </Link>
      </div>
    </div>
  );
}
export default Product;
