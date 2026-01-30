import { useState, useEffect } from "react";
import { home } from "./api/products";
import { Link, useSearchParams } from "react-router-dom";
import { useCart } from "./context/CartContext";
import { useWishList } from "./context/WishListContext";
import { toast } from "react-toastify";
function Home() {
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [recommendProducts, setRecommendProducts] = useState([]);
  const [pagination, setPagination] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();

  const currentPage = Number(searchParams.get("page")) || 1;

  const fetchProducts = async (page = 1) => {
    try {
      const response = await home({}, page);

      setFeaturedProducts(response.featuredProducts?.data || []);
      setPagination(response.featuredProducts || null);
      setRecommendProducts(response.recommendProducts || []);
    } catch (error) {
      console.error("Fetch index products error:", error);
    }
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    fetchProducts(currentPage);
  }, [currentPage]);

  const renderImage = (product) =>
    product.images?.[0]?.image
      ? `http://ecommerce-shop.test/storage/products/full/${product.images[0].image}`
      : "";

  const { addToCart } = useCart();
  const { addToWishList } = useWishList();

  return (
    <div className="col-sm-9 padding-right">
      {featuredProducts.length === 0 && (
        <h3 className="text-center">No found products</h3>
      )}

      {/* Featured Products */}
      {featuredProducts.length > 0 && (
        <div className="features_items">
          <h2 className="title text-center">Features Items</h2>

          {featuredProducts.map((product) => (
            <div className="col-sm-4" key={product.id}>
              <div className="product-image-wrapper">
                <div className="single-products">
                  <div className="productinfo text-center">
                    <img src={renderImage(product)} alt={product.name} />
                    <Link to={`/product/detail/${product.id}`}>
                      <h2>${product.price}</h2>
                      <p>{product.name}</p>
                    </Link>
                    <button
                      onClick={() => addToCart(product)}
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
                        onClick={() => addToCart(product)}
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
                      <button onClick={() => addToWishList(product)}>
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
      )}

      {/* Pagination */}
      {featuredProducts.length > 0 && (
        <ul className="pagination">
          {pagination?.links?.map((link, index) => (
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
                  dangerouslySetInnerHTML={{ __html: link.label }}
                />
              ) : (
                <span dangerouslySetInnerHTML={{ __html: link.label }} />
              )}
            </li>
          ))}
        </ul>
      )}

      {/* Recommend Products */}
      {recommendProducts.length > 0 && (
        <div className="recommended_items">
          <h2 className="title text-center">Recommended Items</h2>

          <div
            id="recommended-item-carousel"
            className="carousel slide"
            data-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="item active">
                {recommendProducts.map((product) => (
                  <div className="col-sm-4" key={product.id}>
                    <div className="product-image-wrapper">
                      <div className="single-products">
                        <div className="productinfo text-center">
                          <img src={renderImage(product)} alt={product.name} />
                          <h2>${product.price}</h2>
                          <p>{product.name}</p>
                          <Link to={""} className="btn btn-default add-to-cart">
                            <i className="fa fa-shopping-cart" /> Add to cart
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <a
              className="left recommended-item-control"
              href="#recommended-item-carousel"
              data-slide="prev"
            >
              <i className="fa fa-angle-left" />
            </a>
            <a
              className="right recommended-item-control"
              href="#recommended-item-carousel"
              data-slide="next"
            >
              <i className="fa fa-angle-right" />
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;
