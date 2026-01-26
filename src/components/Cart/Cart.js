import { Link } from "react-router-dom";
function Cart() {
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

        <h2 className="text-center">
          <a href="{{ route('products.home') }}">Let's shopping now</a>
        </h2>

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
              {/* <tr data-cart-id="{{ $item['id'] }}">
                <td className="cart_product">
                  <a href=""><img src="{{ asset('storage/products/85x84/' . $item['image']) }}"
                  alt="Product Image..."></a>
                </td>
                <td className="cart_description">
                  <h4><a href="">{{ $item['name'] }}</a></h4>
                </td>
                <td className="cart_price">
                  <p>${{ $item['price'] }}</p>
                </td>
                <td className="cart_quantity">
                  <div className="cart_quantity_button">
                    <a className="cart_quantity_up"> + </a>
                    <input
                      className="cart_quantity_input"
                      type="text"
                      name="quantity"
                      value="{{ $item['quantity'] }}"
                      autocomplete="off"
                      size="2"
                    />
                    <a className="cart_quantity_down"> - </a>
                  </div>
                </td>
                <td className="cart_total">
                  // <p className="cart_total_price">${{ $item['price'] * $item['quantity'] }}</p>
                </td>
                <td className="cart_delete">
                  <a className="cart_quantity_delete">
                    <i className="fa fa-times"></i>
                  </a>
                </td>
              </tr> */}
            </tbody>
          </table>

          <section id="do_action">
            <div className="container">
              <div className="heading">
                <h3>What would you like to do next?</h3>
                <p>
                  Choose if you have a discount code or reward points you want
                  to use or would like to estimate your delivery cost.
                </p>
              </div>
              <div className="row">
                <div className="col-sm-6">
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
                    <a className="btn btn-default update" href="">
                      Get Quotes
                    </a>
                    <a className="btn btn-default check_out" href="">
                      Continue
                    </a>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="total_area">
                    <ul>
                      <li>
                        Cart Sub Total <span>$59</span>
                      </li>
                      <li>
                        Eco Tax <span>$2</span>
                      </li>
                      <li>
                        Shipping Cost <span>Free</span>
                      </li>
                      <li>
                        {/* Total <span id="total">{{ $total }}</span> */}
                      </li>
                    </ul>
                    <a className="btn btn-default update" href="">
                      Update
                    </a>
                    <a
                      className="btn btn-default check_out"
                      href="{{ url('/checkout') }}"
                    >
                      Check Out
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
}

export default Cart;
