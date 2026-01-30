import { useCart } from "../../context/CartContext";
import { useWishList } from "../../context/WishListContext";
import { Link } from "react-router-dom";
function Wishlist() {
  const { addToCart } = useCart();
  const { products, remove } = useWishList();
  return (
    <div className="col-sm-9 padding-right">
      <div className="features_items">
        <h2 className="title text-center">WishList Items</h2>
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
                    <button
                      onClick={() => {
                        remove(product.id);
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
      {/* <ul className="pagination">
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
      </ul> */}
    </div>
  );
}

export default Wishlist;
