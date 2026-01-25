import { useState, useEffect } from "react";
import { home } from "../api/products";
import { Link, useSearchParams } from "react-router-dom";
function Home() {
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [recommendProducts, setRecommendProducts] = useState([]);
  const [pagination, setPagination] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();

  const currentPage = Number(searchParams.get("page")) || 1;

  const fetchProducts = async (page = 1) => {
    try {
      const response = await home({}, page);

      setFeaturedProducts(response.featuredProducts.data);
      setPagination(response.featuredProducts || []);

      setRecommendProducts(response.recommendProducts || []);
    } catch (error) {
      console.error("Fetch index products error:", error);
    }
  };

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    fetchProducts(currentPage);
  }, [currentPage]);

  return (
    <div className="col-sm-9 padding-right">
      <div className="features_items">
        <h2 className="title text-center">Features Items</h2>
        {featuredProducts.map((product) => (
          <div className="col-sm-4" key={product.id}>
            <div className="product-image-wrapper">
              <div className="single-products">
                <div className="productinfo text-center">
                  <img
                    src={
                      "http://ecommerce-shop.test/storage/products/full/" +
                      product.images[0].image
                    }
                    alt="Product Image..."
                  />
                  <h2>${product.price}</h2>
                  <p>{product.name}</p>
                  <a href="#" className="btn btn-default add-to-cart">
                    <i className="fa fa-shopping-cart"></i>Add to cart
                  </a>
                </div>
                <div className="product-overlay">
                  <div className="overlay-content">
                    <Link to={`/products/${product.id}`}>
                      <h2>${product.price}</h2>
                    </Link>
                    <Link to={`/products/${product.id}`}>
                      <p>{product.name}</p>
                    </Link>
                    <a href="#" className="btn btn-default add-to-cart">
                      <i className="fa fa-shopping-cart"></i>Add to cart
                    </a>
                  </div>
                </div>
              </div>
              <div className="choose">
                <ul className="nav nav-pills nav-justified">
                  <li>
                    <a href="#">
                      <i className="fa fa-plus-square"></i>Add to wishlist
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-plus-square"></i>Add to compare
                    </a>
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

      {/* Recommend Products */}
      <div className="recommended_items">
        <h2 className="title text-center">recommended items</h2>
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
                        <img
                          src={
                            "http://ecommerce-shop.test/storage/products/full/" +
                            product.images[0].image
                          }
                          alt="Product Image..."
                        />
                        <h2>${product.price}</h2>
                        <p>{product.name}</p>
                        <a href="#" className="btn btn-default add-to-cart">
                          <i className="fa fa-shopping-cart"></i>Add to cart
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="item">
              {recommendProducts.map((product) => (
                <div className="col-sm-4" key={product.id}>
                  <div className="product-image-wrapper">
                    <div className="single-products">
                      <div className="productinfo text-center">
                        <img
                          src={
                            "http://ecommerce-shop.test/storage/products/full/" +
                            product.images[0].image
                          }
                          alt="Product Image..."
                        />
                        <h2>${product.price}</h2>
                        <p>{product.name}</p>
                        <a href="#" className="btn btn-default add-to-cart">
                          <i className="fa fa-shopping-cart"></i>Add to cart
                        </a>
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
            <i className="fa fa-angle-left"></i>
          </a>
          <a
            className="right recommended-item-control"
            href="#recommended-item-carousel"
            data-slide="next"
          >
            <i className="fa fa-angle-right"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;
