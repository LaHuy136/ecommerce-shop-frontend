// import { useEffect, useState } from "react";
// import { Link, useParams } from "react-router-dom";
// import { show } from "../../api/products";
// import rating from "../../assets/images/product-details/rating.png";
// function Show() {
//   const [product, setProduct] = useState([]);
//   const { id } = useParams();
//   useEffect(() => {
//     window.scrollTo({
//       top: 0,
//       behavior: "smooth",
//     });
//     show(id).then((res) => {
//       //   setProduct(res.product.product);
//       console.log(res.product);
//     });
//   }, []);
//   return (
//     <div class="col-sm-12">
//       <div class="product-details">
//         <div class="col-sm-5">
//           <div class="view-product">
//             {/* <img
//               src={
//                 "http://ecommerce-shop.test/storage/products/full/" +
//                 product.images[0].image
//               }
//               id="mainImage"
//               alt=""
//             /> */}
//             {/* <Link
//               to={
//                 "http://ecommerce-shop.test/storage/products/full/" +
//                 product.images[0].image
//               }
//               rel="prettyPhoto"
//               id="zoomImage"
//             >
//               <h3>ZOOM</h3>
//             </Link> */}
//           </div>
//           <div id="similar-product" class="carousel slide" data-ride="carousel">
//             <div class="carousel-inner">
//               <div class="item active">
//                 {/* {product.images.map((img) => {
//                   <img
//                     src={
//                       "http://ecommerce-shop.test/storage/products/85x84/" + img
//                     }
//                     data-full={
//                       "http://ecommerce-shop.test/storage/products/full/" + img
//                     }
//                     class="thumb-img"
//                     alt=""
//                   />;
//                 })} */}
//               </div>
//             </div>

//             <a
//               class="left item-control"
//               href="#similar-product"
//               data-slide="prev"
//             >
//               <i class="fa fa-angle-left"></i>
//             </a>
//             <a
//               class="right item-control"
//               href="#similar-product"
//               data-slide="next"
//             >
//               <i class="fa fa-angle-right"></i>
//             </a>
//           </div>
//         </div>

//         <div class="col-sm-7">
//           <div
//             class="product-information product-image-wrapper"
//             data-id={product.id}
//           >
//             {/*  Product Name  */}
//             <h2>{product.name}</h2>

//             {/* Rating & Price  */}
//             <div class="row items-center">
//               <img src={rating} alt="Rating" />

//               <span>
//                 <span class="price">{/* US ${{ $product->price }} */}</span>

//                 {/* {{-- Add to Cart --}} */}
//                 <button type="button" class="btn btn-default add-to-cart">
//                   <i class="fa fa-shopping-cart"></i>
//                   Add to cart
//                 </button>
//               </span>
//             </div>

//             {/* Status  */}
//             <p>
//               <b>Status:</b>
//               {product.status}
//             </p>

//             {/* Condition */}
//             <p>
//               <b>Condition:</b>
//               {product.condition}

//               {product.condition === "sale" && (
//                 <span class="sale-percent">{product.sale_percent}%</span>
//               )}
//             </p>

//             {/*  Brand */}
//             <p>
//               <b>Brand:</b>
//               {product.brands.name}
//             </p>

//             {/* {{-- Share --}} */}
//             <a href="#">
//               <img
//                 src="{{ asset('frontend/images/product-details/share.png') }}"
//                 class="share img-responsive"
//                 alt="Share"
//               />
//             </a>
//           </div>
//         </div>
//       </div>

//       <div class="category-tab shop-details-tab">
//         <div class="col-sm-12">
//           <ul class="nav nav-tabs">
//             <li>
//               <a href="#details" data-toggle="tab">
//                 Details
//               </a>
//             </li>
//             <li>
//               <a href="#companyprofile" data-toggle="tab">
//                 Company Profile
//               </a>
//             </li>
//             <li>
//               <a href="#tag" data-toggle="tab">
//                 Tag
//               </a>
//             </li>
//             <li class="active">
//               <a href="#reviews" data-toggle="tab">
//                 Reviews (5)
//               </a>
//             </li>
//           </ul>
//         </div>
//         <div class="tab-content">
//           <div class="tab-pane fade" id="details">
//             <div class="col-sm-3">
//               <div class="product-image-wrapper">
//                 <div class="single-products">
//                   <div class="productinfo text-center">
//                     <img
//                       src="{{ asset('frontend/images/home/gallery1.jpg') }}"
//                       alt=""
//                     />
//                     <h2>$56</h2>
//                     <p>Easy Polo Black Edition</p>
//                     <button type="button" class="btn btn-default add-to-cart">
//                       <i class="fa fa-shopping-cart"></i>Add to cart
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div class="col-sm-3">
//               <div class="product-image-wrapper">
//                 <div class="single-products">
//                   <div class="productinfo text-center">
//                     <img
//                       src="{{ asset('frontend/images/home/gallery2.jpg') }}"
//                       alt=""
//                     />
//                     <h2>$56</h2>
//                     <p>Easy Polo Black Edition</p>
//                     <button type="button" class="btn btn-default add-to-cart">
//                       <i class="fa fa-shopping-cart"></i>Add to cart
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div class="col-sm-3">
//               <div class="product-image-wrapper">
//                 <div class="single-products">
//                   <div class="productinfo text-center">
//                     <img
//                       src="{{ asset('frontend/images/home/gallery3.jpg') }}"
//                       alt=""
//                     />
//                     <h2>$56</h2>
//                     <p>Easy Polo Black Edition</p>
//                     <button type="button" class="btn btn-default add-to-cart">
//                       <i class="fa fa-shopping-cart"></i>Add to cart
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div class="col-sm-3">
//               <div class="product-image-wrapper">
//                 <div class="single-products">
//                   <div class="productinfo text-center">
//                     <img
//                       src="{{ asset('frontend/images/home/gallery4.jpg') }}"
//                       alt=""
//                     />
//                     <h2>$56</h2>
//                     <p>Easy Polo Black Edition</p>
//                     <button type="button" class="btn btn-default add-to-cart">
//                       <i class="fa fa-shopping-cart"></i>Add to cart
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div class="tab-pane fade" id="companyprofile">
//             <div class="col-sm-3">
//               <div class="product-image-wrapper">
//                 <div class="single-products">
//                   <div class="productinfo text-center">
//                     <img
//                       src="{{ asset('frontend/images/home/gallery1.jpg') }}"
//                       alt=""
//                     />
//                     <h2>$56</h2>
//                     <p>Easy Polo Black Edition</p>
//                     <button type="button" class="btn btn-default add-to-cart">
//                       <i class="fa fa-shopping-cart"></i>Add to cart
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div class="col-sm-3">
//               <div class="product-image-wrapper">
//                 <div class="single-products">
//                   <div class="productinfo text-center">
//                     <img
//                       src="{{ asset('frontend/images/home/gallery3.jpg') }}"
//                       alt=""
//                     />
//                     <h2>$56</h2>
//                     <p>Easy Polo Black Edition</p>
//                     <button type="button" class="btn btn-default add-to-cart">
//                       <i class="fa fa-shopping-cart"></i>Add to cart
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div class="col-sm-3">
//               <div class="product-image-wrapper">
//                 <div class="single-products">
//                   <div class="productinfo text-center">
//                     <img
//                       src="{{ asset('frontend/images/home/gallery2.jpg') }}"
//                       alt=""
//                     />
//                     <h2>$56</h2>
//                     <p>Easy Polo Black Edition</p>
//                     <button type="button" class="btn btn-default add-to-cart">
//                       <i class="fa fa-shopping-cart"></i>Add to cart
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div class="col-sm-3">
//               <div class="product-image-wrapper">
//                 <div class="single-products">
//                   <div class="productinfo text-center">
//                     <img
//                       src="{{ asset('frontend/images/home/gallery4.jpg') }}"
//                       alt=""
//                     />
//                     <h2>$56</h2>
//                     <p>Easy Polo Black Edition</p>
//                     <button type="button" class="btn btn-default add-to-cart">
//                       <i class="fa fa-shopping-cart"></i>Add to cart
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div class="tab-pane fade" id="tag">
//             <div class="col-sm-3">
//               <div class="product-image-wrapper">
//                 <div class="single-products">
//                   <div class="productinfo text-center">
//                     <img
//                       src="{{ asset('frontend/images/home/gallery1.jpg') }}"
//                       alt=""
//                     />
//                     <h2>$56</h2>
//                     <p>Easy Polo Black Edition</p>
//                     <button type="button" class="btn btn-default add-to-cart">
//                       <i class="fa fa-shopping-cart"></i>Add to cart
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div class="col-sm-3">
//               <div class="product-image-wrapper">
//                 <div class="single-products">
//                   <div class="productinfo text-center">
//                     <img
//                       src="{{ asset('frontend/images/home/gallery2.jpg') }}"
//                       alt=""
//                     />
//                     <h2>$56</h2>
//                     <p>Easy Polo Black Edition</p>
//                     <button type="button" class="btn btn-default add-to-cart">
//                       <i class="fa fa-shopping-cart"></i>Add to cart
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div class="col-sm-3">
//               <div class="product-image-wrapper">
//                 <div class="single-products">
//                   <div class="productinfo text-center">
//                     <img
//                       src="{{ asset('frontend/images/home/gallery3.jpg') }}"
//                       alt=""
//                     />
//                     <h2>$56</h2>
//                     <p>Easy Polo Black Edition</p>
//                     <button type="button" class="btn btn-default add-to-cart">
//                       <i class="fa fa-shopping-cart"></i>Add to cart
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div class="col-sm-3">
//               <div class="product-image-wrapper">
//                 <div class="single-products">
//                   <div class="productinfo text-center">
//                     <img
//                       src="{{ asset('frontend/images/home/gallery4.jpg') }}"
//                       alt=""
//                     />
//                     <h2>$56</h2>
//                     <p>Easy Polo Black Edition</p>
//                     <button type="button" class="btn btn-default add-to-cart">
//                       <i class="fa fa-shopping-cart"></i>Add to cart
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div class="tab-pane fade active in" id="reviews">
//             <div class="col-sm-12">
//               <ul>
//                 <li>
//                   <a href="">
//                     <i class="fa fa-user"></i>EUGEN
//                   </a>
//                 </li>
//                 <li>
//                   <a href="">
//                     <i class="fa fa-clock-o"></i>12:41 PM
//                   </a>
//                 </li>
//                 <li>
//                   <a href="">
//                     <i class="fa fa-calendar-o"></i>31 DEC 2014
//                   </a>
//                 </li>
//               </ul>
//               <p>
//                 Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
//                 eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut
//                 enim ad minim veniam, quis nostrud exercitation ullamco laboris
//                 nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in
//                 reprehenderit in voluptate velit esse cillum dolore eu fugiat
//                 nulla pariatur.
//               </p>
//               <p>
//                 <b>Write Your Review</b>
//               </p>

//               <form action="#">
//                 <span>
//                   <input type="text" placeholder="Your Name" />
//                   <input type="email" placeholder="Email Address" />
//                 </span>
//                 <textarea name=""></textarea>
//                 <b>Rating: </b>{" "}
//                 <img
//                   src="{{ asset('frontend/images/product-details/rating.png') }}"
//                   alt=""
//                 />
//                 <button type="button" class="btn btn-default pull-right">
//                   Submit
//                 </button>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* <div class="recommended_items">
//         <h2 class="title text-center">recommended items</h2>

//         <div
//           id="recommended-item-carousel"
//           class="carousel slide"
//           data-ride="carousel"
//         >
//           <div class="carousel-inner">
//             <div class="item active">
//               <div class="col-sm-4">
//                 <div class="product-image-wrapper">
//                   <div class="single-products">
//                     <div class="productinfo text-center">
//                       <img
//                         src="{{ asset('storage/products/full/' . $product->images->first()->image) }}"
//                         alt=""
//                       />

//                       <h2>$ {$product.price}</h2>

//                       <p>{$product.name}</p>

//                       <button type="button" class="btn btn-default add-to-cart">
//                         <i class="fa fa-shopping-cart"></i>Add to cart
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <a
//               class="left recommended-item-control"
//               href="#recommended-item-carousel"
//               data-slide="prev"
//             >
//               <i class="fa fa-angle-left"></i>
//             </a>
//             <a
//               class="right recommended-item-control"
//               href="#recommended-item-carousel"
//               data-slide="next"
//             >
//               <i class="fa fa-angle-right"></i>
//             </a>
//           </div>
//         </div>
//       </div> */}
//     </div>
//   );
// }

// export default Show;
