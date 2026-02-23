import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  fetchCartProducts,
  increase,
  decrease,
  remove,
  clearCart,
} from "../../store/cartSlice";

function Cart() {
  // const { products, total, increase, decrease, remove } = useCart();
  const dispatch = useDispatch();
  const { products, total } = useSelector((state) => state.cart);

  useEffect(() => {
    dispatch(fetchCartProducts);
  }, [dispatch]);

  return (
    <section id="cart_items">
      <div className="container">
        <div className="breadcrumbs">
          <ol className="breadcrumb">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li className="active">Shopping Cart</li>
          </ol>
        </div>
        {/* No products in cart */}
        {products.length === 0 && (
          <h3 className="text-center" style={{ marginBottom: "50px" }}>
            <Link to="/">Let's shopping now</Link>
          </h3>
        )}
        {/* Having Products */}
        {products.length > 0 && (
          <div className="table-responsive cart_info">
            <table className="table table-condensed">
              <thead>
                <tr className="cart_menu">
                  <td className="image">Image</td>
                  <td className="name">Name</td>
                  <td className="price">Price</td>
                  <td className="quantity">Quantity</td>
                  <td className="total">Total</td>
                  <td></td>
                </tr>
              </thead>
              <tbody>
                {products.map((product) => {
                  return (
                    <tr key={product.id}>
                      <td className="cart_product">
                        <img
                          src={`http://ecommerce-shop-backend.test/storage/products/85x84/${product.images[0].image}`}
                          alt={product.name}
                        />
                      </td>
                      <td className="cart_description">
                        <h4>{product.name}</h4>
                      </td>
                      <td className="cart_price">
                        <p>${product.price}</p>
                      </td>
                      <td className="cart_quantity">
                        <div className="cart-quantity">
                          <button
                            type="button"
                            className="qty-btn"
                            onClick={() => dispatch(decrease(product.id))}
                          >
                            −
                          </button>

                          <span
                            className="qty-value"
                            style={{ fontSize: "16px" }}
                          >
                            {" "}
                            {product.quantity}{" "}
                          </span>

                          <button
                            type="button"
                            className="qty-btn"
                            onClick={() => dispatch(increase(product.id))}
                          >
                            +
                          </button>
                        </div>
                      </td>
                      <td className="cart_total">
                        <p className="cart_total_price">
                          ${product.price * product.quantity}
                        </p>
                      </td>
                      <td className="cart_delete">
                        <button
                          className="cart_quantity_delete btn btn-default"
                          onClick={() => dispatch(remove(product.id))}
                        >
                          <i className="fa fa-times"> Remove</i>
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>

            <div className="row">
              <button
                className="btn btn-danger pull-right"
                style={{ margin: "20px" }}
                onClick={() => dispatch(clearCart())}
              >
                Clear cart
              </button>
            </div>

            <section id="do_action" style={{ margin: "10px" }}>
              <div className="">
                <div className="heading">
                  <h3>What would you like to do next?</h3>
                  <p>
                    Choose if you have a discount code or reward points you want
                    to use or would like to estimate your delivery cost.
                  </p>
                </div>
                <div className="row">
                  {/* <div className="col-sm-6">
                    <div className="chose_area">
                      <ul className="user_option">
                        <li>
                          <input type="checkbox" />
                          <label>Use Coupon Code</label>
                        </li>
                        <li>
                          <input type="checkbox" />
                          <label>Use Gift Voucher</label>
                        </li>
                        <li>
                          <input type="checkbox" />
                          <label>Estimate Shipping & Taxes</label>
                        </li>
                      </ul>
                      <ul className="user_info">
                        <li className="single_field">
                          <label>Country:</label>
                          <select>
                            <option>United States</option>
                            <option>Bangladesh</option>
                            <option>UK</option>
                            <option>India</option>
                            <option>Pakistan</option>
                            <option>Ucrane</option>
                            <option>Canada</option>
                            <option>Dubai</option>
                          </select>
                        </li>
                        <li className="single_field">
                          <label>Region / State:</label>
                          <select>
                            <option>Select</option>
                            <option>Dhaka</option>
                            <option>London</option>
                            <option>Dillih</option>
                            <option>Lahore</option>
                            <option>Alaska</option>
                            <option>Canada</option>
                            <option>Dubai</option>
                          </select>
                        </li>
                        <li className="single_field zip-field">
                          <label>Zip Code:</label>
                          <input type="text" />
                        </li>
                      </ul>
                      <Link className="btn btn-default update" to={""}>
                        Get Quotes
                      </Link>
                      <Link className="btn btn-default check_out" to={""}>
                        Continue
                      </Link>
                    </div>
                  </div> */}
                  <div className="col-sm-12">
                    <div className="total_area">
                      <ul>
                        {/* <li>
                          Cart Sub Total <span>$59</span>
                        </li>
                        <li>
                          Eco Tax <span>$2</span>
                        </li> */}
                        <li>
                          Shipping Cost <span>Free</span>
                        </li>
                        <li>
                          Total <span>${total}</span>
                        </li>
                      </ul>
                      <Link className="btn btn-default update" to={""}>
                        Update
                      </Link>
                      <Link
                        className="btn btn-default check_out"
                        to="/checkout"
                      >
                        Check Out
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        )}
      </div>
    </section>
  );
}

export default Cart;
