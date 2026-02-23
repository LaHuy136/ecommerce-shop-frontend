import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { remove } from "../../store/wishlistSlice";
import { addToCart } from "../../store/cartSlice";
function Wishlist() {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.wishlist);

  const renderImage = (product) =>
    product.images?.[0]?.image
      ? `http://ecommerce-shop-backend.test/storage/products/full/${product.images[0].image}`
      : "";

  return (
    <div className="col-sm-9 padding-right">
      {products.length === 0 && (
        <div>
          <h3 className="text-center" style={{ marginBottom: "50px" }}>
            Your wish list is empty
          </h3>
          <Link to="/" className="pull-right">
            <button className="btn btn-default">Back to home</button>
          </Link>
        </div>
      )}
      {products.length > 0 && (
        <div className="features_items">
          <h2 className="title text-center">WishList Items</h2>
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
                      <button
                        onClick={() => {
                          dispatch(remove(product.id));
                        }}
                        className="btn btn-default"
                      >
                        <i className="fa fa-times"></i> Remove from wishlist
                      </button>
                    </li>
                    <li>{""}</li>
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Wishlist;
