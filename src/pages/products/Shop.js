import { useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import shippingBanner from "../../assets/images/home/shipping.jpg";
import { shop } from "../../api/products";
function Shop() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [brands, setBrands] = useState([]);
  const [pagination, setPagination] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();

  const currentPage = Number(searchParams.get("page")) || 1;

  const fetchProducts = async (page = 1) => {
    try {
      const response = await shop({}, page);

      setProducts(response.products.data);
      setPagination(response.products || []);

      setCategories(response.categories || []);
      setBrands(response.brands || []);
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

  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-3">
          <div className="left-sidebar">
            {/* Categories */}
            <h2>Category</h2>
            <div className="panel-group category-products" id="accordian">
              {categories.map((category) => (
                <div className="panel panel-default" key={category.id}>
                  <div className="panel-heading">
                    <h4 className="panel-title">
                      <Link to={``}>{category.name}</Link>
                    </h4>
                  </div>
                </div>
              ))}
            </div>

            {/* Brands */}
            <div className="brands_products">
              <h2>Brands</h2>
              <div className="brands-name">
                <ul className="nav nav-pills nav-stacked">
                  {brands.map(
                    (brand) =>
                      brand.products_count > 0 && (
                        <li key={brand.id}>
                          <Link to={``}>
                            <span className="pull-right">
                              ({brand.products_count})
                            </span>
                            {brand.name}
                          </Link>
                        </li>
                      ),
                  )}
                </ul>
              </div>
            </div>

            {/* Price Range */}
            {/* <div className="price-range">
              <h2>Price Range</h2>
              <div className="well text-center">
                <input
                  type="text"
                  className="span2"
                  value=""
                  data-slider-min="0"
                  data-slider-max="600"
                  data-slider-step="5"
                  data-slider-value="[250,450]"
                  id="sl2"
                />
                <br />
                <b className="pull-left">$ 0</b>{" "}
                <b className="pull-right">$ 600</b>
              </div>
            </div> */}

            <div className="shipping text-center">
              <img src={shippingBanner} alt="" />
            </div>
          </div>
        </div>

        {/* Feature Products */}
        <div className="col-sm-9 padding-right">
          <div className="features_items">
            <h2 className="title text-center">Features Items</h2>
            {products.map((product) => (
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
                        <h2>${product.price}</h2>
                        <p>{product.name}</p>
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
        </div>
      </div>
    </div>
  );
}

export default Shop;
