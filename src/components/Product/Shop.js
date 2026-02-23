import { useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { shop } from "../../api/products";
import { useDispatch } from "react-redux";
import { addToCart } from "../../store/cartSlice";
import { addToWishList } from "../../store/wishlistSlice";
function Shop() {
  const [products, setProducts] = useState([]);
  const [pagination, setPagination] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();

  const currentPage = Number(searchParams.get("page")) || 1;

  const fetchProducts = async (page = 1) => {
    try {
      const response = await shop({}, page);

      setProducts(response.products.data);
      setPagination(response.products || []);
    } catch (error) {
      console.error("Fetch shop products error:", error);
    }
  };

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    fetchProducts(currentPage);
  }, [currentPage]);

  const dispatch = useDispatch();
  const renderImage = (product) =>
    product.images?.[0]?.image
      ? `http://ecommerce-shop-backend.test/storage/products/full/${product.images[0].image}`
      : "";

  return (
    <div className="col-sm-9 padding-right">
      <div className="features_items">
        <h2 className="title text-center">Features Items</h2>
        {products.map((product) => (
          <div className="col-sm-4" key={product.id}>
            <div className="product-image-wrapper">
              <div className="single-products">
                <div className="productinfo text-center">
                  <img src={renderImage(product)} alt={product.name} />
                  <h2>${product.price}</h2>
                  <p>{product.name}</p>
                  <button
                    onClick={() => dispatch(addToCart(product))}
                    className="btn btn-default add-to-cart"
                  >
                    <i className="fa fa-shopping-cart" /> Add to cart
                  </button>
                </div>
                <div className="product-overlay">
                  <div className="overlay-content">
                    <Link to={`/product/detail/${product.id}`}>
                      <h2>${product.price}</h2>
                      <p>{product.name}</p>
                    </Link>
                    <button
                      onClick={() => dispatch(addToCart(product))}
                      className="btn btn-default add-to-cart"
                    >
                      <i className="fa fa-shopping-cart" /> Add to cart
                    </button>
                  </div>
                </div>
              </div>
              <div className="choose">
                <ul className="nav nav-pills nav-justified">
                  <li>
                    <button onClick={() => dispatch(addToWishList(product))}>
                      <i className="fa fa-plus-square" /> Add to wishlist
                    </button>
                  </li>
                  <li>
                    <button onClick={() => {}}>
                      <i className="fa fa-plus-square" /> Add to compare
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
      <ul className="pagination">
        {pagination?.links.map((link, index) => (
          <li key={index} className={link.active ? "active" : ""}>
            {link.page ? (
              <button
                type="button"
                disabled={link.active}
                onClick={() => {
                  setSearchParams((prev) => ({
                    ...Object.fromEntries(prev),
                    page: link.page,
                  }));
                }}
                dangerouslySetInnerHTML={{ __html: link.label }}
              />
            ) : (
              <span dangerouslySetInnerHTML={{ __html: link.label }} />
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Shop;
