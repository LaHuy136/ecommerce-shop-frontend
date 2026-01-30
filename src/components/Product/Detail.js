import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { show } from "../../api/products";
import shareImg from "../../assets/images/product-details/share.png";
import ratingImg from "../../assets/images/product-details/rating.png";
import gallery1 from "../../assets/images/home/gallery1.jpg";
import gallery2 from "../../assets/images/home/gallery2.jpg";
import gallery3 from "../../assets/images/home/gallery3.jpg";
import gallery4 from "../../assets/images/home/gallery4.jpg";
import ZoomImg from "./ZoomImg";
import CarouselImg from "./Carouselmg";
import "react-multi-carousel/lib/styles.css";
import { useCart } from "../../context/CartContext";

function ProductDetail() {
  const [product, setProduct] = useState({ images: [] });
  const [selectedImage, setSelectedImage] = useState(null);
  const [showZoom, setShowZoom] = useState(false);
  const imgRender = "http://ecommerce-shop.test/storage/products";
  const { addToCart } = useCart();

  const { id } = useParams();

  const ucFirst = (str) => {
    if (typeof str !== "string" || str.length === 0) return "";
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  const showProduct = async (productId) => {
    try {
      const response = await show(productId);
      setProduct(response.product);
    } catch (error) {
      if (error.response) {
        const { status, data } = error.response;

        if (status === 404) {
          console.log("Product not found");
        } else {
          console.log(data?.message || "Failed to fetch product");
        }
      } else {
        toast.error("Network error, please check your connection");
        console.error("Network error:", error);
      }
    }
  };

  useEffect(() => {
    showProduct(id);
  }, [id]);

  useEffect(() => {
    if (product.images && product.images.length > 0) {
      setSelectedImage(product.images[0].image);
    }
  }, [product]);

  return (
    <>
      <div className="product-details">
        <div className="col-sm-5">
          {/* Main Image */}
          <div className="view-product">
            {showZoom && (
              <ZoomImg
                image={selectedImage}
                onClose={() => setShowZoom(false)}
              />
            )}

            <img
              src={`${imgRender}/full/${selectedImage}`}
              alt="Image Product"
            />
          </div>

          {/* Carousel Image */}
          <div className="product-carousel">
            <CarouselImg>
              {product.images.map((img) => (
                <div
                  key={img.id}
                  onClick={() => setShowZoom(true)}
                  onMouseEnter={() => setSelectedImage(img.image)}
                >
                  <img
                    src={`${imgRender}/85x84/${img.image}`}
                    alt={product.name}
                    style={{
                      cursor: "zoom-in",
                      border:
                        selectedImage === img.image
                          ? "2px solid #fe980f"
                          : "1px solid #ddd",
                    }}
                  />
                </div>
              ))}
            </CarouselImg>
          </div>
        </div>

        <div className="col-sm-7">
          <div className="product-information product-image-wrapper">
            <h2>{product.name}</h2>

            <div>
              <span>
                <span className="price">${product.price}</span>

                <button
                  type="button"
                  onClick={() => addToCart(product)}
                  className="btn btn-default add-to-cart"
                >
                  <i className="fa fa-shopping-cart"></i>
                  Add to cart
                </button>
              </span>
            </div>

            <p>
              <b>Status: </b>
              {ucFirst(product.status)}
            </p>

            <p>
              <b>Condition: </b>
              {ucFirst(product.condition)}

              {product.condition === "sale" && (
                <span className="sale-percent">{product.sale_percent} %</span>
              )}
            </p>

            <p>
              <b>Brand: </b>
              {product.brand?.name}
            </p>

            <img src={ratingImg} alt="Rating Image..." />

            <img
              src={shareImg}
              className="share img-responsive"
              alt="Share Image..."
            />
          </div>
        </div>
      </div>

      {/* Category Tab */}
      <div className="category-tab shop-details-tab">
        <div className="col-sm-12">
          <ul className="nav nav-tabs">
            <li>
              <a href="#details" data-toggle="tab">
                Details
              </a>
            </li>
            <li>
              <a href="#companyprofile" data-toggle="tab">
                Company Profile
              </a>
            </li>
            <li>
              <a href="#tag" data-toggle="tab">
                Tag
              </a>
            </li>
            <li className="active">
              <a href="#reviews" data-toggle="tab">
                Reviews (5)
              </a>
            </li>
          </ul>
        </div>
        <div className="tab-content">
          <div className="tab-pane fade" id="details">
            <div className="col-sm-3">
              <div className="product-image-wrapper">
                <div className="single-products">
                  <div className="productinfo text-center">
                    <img src={gallery1} alt="" />
                    <h2>$56</h2>
                    <p>Easy Polo Black Edition</p>
                    <button
                      type="button"
                      className="btn btn-default add-to-cart"
                    >
                      <i className="fa fa-shopping-cart"></i>Add to cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-3">
              <div className="product-image-wrapper">
                <div className="single-products">
                  <div className="productinfo text-center">
                    <img src={gallery2} alt="" />
                    <h2>$56</h2>
                    <p>Easy Polo Black Edition</p>
                    <button
                      type="button"
                      className="btn btn-default add-to-cart"
                    >
                      <i className="fa fa-shopping-cart"></i>Add to cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-3">
              <div className="product-image-wrapper">
                <div className="single-products">
                  <div className="productinfo text-center">
                    <img src={gallery3} alt="" />
                    <h2>$56</h2>
                    <p>Easy Polo Black Edition</p>
                    <button
                      type="button"
                      className="btn btn-default add-to-cart"
                    >
                      <i className="fa fa-shopping-cart"></i>Add to cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-3">
              <div className="product-image-wrapper">
                <div className="single-products">
                  <div className="productinfo text-center">
                    <img src={gallery4} alt="" />
                    <h2>$56</h2>
                    <p>Easy Polo Black Edition</p>
                    <button
                      type="button"
                      className="btn btn-default add-to-cart"
                    >
                      <i className="fa fa-shopping-cart"></i>Add to cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="tab-pane fade" id="companyprofile">
            <div className="col-sm-3">
              <div className="product-image-wrapper">
                <div className="single-products">
                  <div className="productinfo text-center">
                    <img src={gallery1} alt="" />
                    <h2>$56</h2>
                    <p>Easy Polo Black Edition</p>
                    <button
                      type="button"
                      className="btn btn-default add-to-cart"
                    >
                      <i className="fa fa-shopping-cart"></i>Add to cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-3">
              <div className="product-image-wrapper">
                <div className="single-products">
                  <div className="productinfo text-center">
                    <img src={gallery3} alt="" />
                    <h2>$56</h2>
                    <p>Easy Polo Black Edition</p>
                    <button
                      type="button"
                      className="btn btn-default add-to-cart"
                    >
                      <i className="fa fa-shopping-cart"></i>Add to cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-3">
              <div className="product-image-wrapper">
                <div className="single-products">
                  <div className="productinfo text-center">
                    <img src={gallery2} alt="" />
                    <h2>$56</h2>
                    <p>Easy Polo Black Edition</p>
                    <button
                      type="button"
                      className="btn btn-default add-to-cart"
                    >
                      <i className="fa fa-shopping-cart"></i>Add to cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-3">
              <div className="product-image-wrapper">
                <div className="single-products">
                  <div className="productinfo text-center">
                    <img src={gallery4} alt="" />
                    <h2>$56</h2>
                    <p>Easy Polo Black Edition</p>
                    <button
                      type="button"
                      className="btn btn-default add-to-cart"
                    >
                      <i className="fa fa-shopping-cart"></i>Add to cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="tab-pane fade" id="tag">
            <div className="col-sm-3">
              <div className="product-image-wrapper">
                <div className="single-products">
                  <div className="productinfo text-center">
                    <img src={gallery1} alt="" />
                    <h2>$56</h2>
                    <p>Easy Polo Black Edition</p>
                    <button
                      type="button"
                      className="btn btn-default add-to-cart"
                    >
                      <i className="fa fa-shopping-cart"></i>Add to cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-3">
              <div className="product-image-wrapper">
                <div className="single-products">
                  <div className="productinfo text-center">
                    <img src={gallery2} alt="" />
                    <h2>$56</h2>
                    <p>Easy Polo Black Edition</p>
                    <button
                      type="button"
                      className="btn btn-default add-to-cart"
                    >
                      <i className="fa fa-shopping-cart"></i>Add to cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-3">
              <div className="product-image-wrapper">
                <div className="single-products">
                  <div className="productinfo text-center">
                    <img src={gallery3} alt="" />
                    <h2>$56</h2>
                    <p>Easy Polo Black Edition</p>
                    <button
                      type="button"
                      className="btn btn-default add-to-cart"
                    >
                      <i className="fa fa-shopping-cart"></i>Add to cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-3">
              <div className="product-image-wrapper">
                <div className="single-products">
                  <div className="productinfo text-center">
                    <img src={gallery4} alt="" />
                    <h2>$56</h2>
                    <p>Easy Polo Black Edition</p>
                    <button
                      type="button"
                      className="btn btn-default add-to-cart"
                    >
                      <i className="fa fa-shopping-cart"></i>Add to cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="tab-pane fade active in" id="reviews">
            <div className="col-sm-12">
              <ul>
                <li>
                  <a href="">
                    <i className="fa fa-user"></i>EUGEN
                  </a>
                </li>
                <li>
                  <a href="">
                    <i className="fa fa-clock-o"></i>12:41 PM
                  </a>
                </li>
                <li>
                  <a href="">
                    <i className="fa fa-calendar-o"></i>31 DEC 2014
                  </a>
                </li>
              </ul>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur.
              </p>
              <p>
                <b>Write Your Review</b>
              </p>

              <form action="#">
                <span>
                  <input type="text" placeholder="Your Name" />
                  <input type="email" placeholder="Email Address" />
                </span>
                <textarea name=""></textarea>
                <b>Rating: </b>{" "}
                <img
                  src="{{ asset('frontend/images/product-details/rating.png') }}"
                  alt=""
                />
                <button type="button" className="btn btn-default pull-right">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductDetail;
