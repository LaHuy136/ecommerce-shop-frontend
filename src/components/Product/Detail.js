import { useParams } from "react-router-dom";
import { show } from "../../api/products";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import shareImg from "../../assets/images/product-details/share.png";
import gallery1 from "../../assets/images/home/gallery1.jpg";
import gallery2 from "../../assets/images/home/gallery2.jpg";
import gallery3 from "../../assets/images/home/gallery3.jpg";
import gallery4 from "../../assets/images/home/gallery4.jpg";
import PopFullImage from "./ZoomImg";
import CarouselImg from "./Carouselmg";
import "react-multi-carousel/lib/styles.css";

function ProductDetail() {
  //   const [showPopImage, setShowPopImage] = useState(false);
  const [product, setProduct] = useState({ images: [] });

  const { id } = useParams();
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

  return (
    <>
      <div className="product-details">
        <div className="col-sm-5">
          {/* Main Image */}
          <div className="view-product">
            {/* <PopFullImage
              show={showPopImage}
              onHide={() => setShowPopImage(false)}
            >
              <img
                src={
                  product.images?.[0]
                    ? `http://ecommerce-shop.test/storage/products/full/${product.images[0].img}`
                    : "https://picsum.photos/200"
                }
                alt="Image Product"
              />
            </PopFullImage> */}

            <img
              src={`http://ecommerce-shop.test/storage/products/full/${product.images?.[0]?.image}`}
              alt="Image Product"
            />
          </div>

          {/* Carousel Image */}
          <div className="product-carousel">
            <CarouselImg>
              {product.images.map((img, index) => (
                <div key={img.id || index}>
                  <img
                    src={`http://ecommerce-shop.test/storage/products/85x84/${img.image}`}
                    alt="Image Product"
                  />
                </div>
              ))}
            </CarouselImg>
          </div>
        </div>

        <div className="col-sm-7">
          <div className="product-information product-image-wrapper">
            <h2>{product.name}</h2>

            <div className="row items-center">
              {/* src="{{ asset('frontend/images/product-details/rating.png') }}" alt="Rating Image..." />  */}

              <span>
                <span className="price">US ${product.price}</span>

                <button type="button" className="btn btn-default add-to-cart">
                  <i className="fa fa-shopping-cart"></i>
                  Add to cart
                </button>
              </span>
            </div>

            <p>
              <b>Status:</b>
              {product.status}
            </p>

            <p>
              <b>Condition:</b>
              {product.condition}

              {product.condition === "sale" && (
                <span className="sale-percent">{product.sale_percent}%</span>
              )}
            </p>

            <p>
              <b>Brand:</b>
              {/* {product.brand.name} */}
            </p>

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
