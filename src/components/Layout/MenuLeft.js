import { Link } from "react-router-dom";
import shippingBanner from "../../assets/images/home/shipping.jpg";
import { useEffect, useState } from "react";
import { home } from "../../api/products";
function MenuLeft() {
  const [categories, setCategories] = useState([]);
  const [brands, setBrands] = useState([]);

  useEffect(() => {
    home({}, null).then((response) => {
      setCategories(response.categories || []);
      setBrands(response.brands || []);
    });
  }, []);
  return (
    <div className="col-sm-3">
      <div className="left-sidebar">
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
            <b className="pull-left">$ 0</b> <b className="pull-right">$ 600</b>
          </div>
        </div> */}

        <div className="shipping text-center" style={{ marginBottom: "20px" }}>
          <img src={shippingBanner} alt="" />
        </div>
      </div>
    </div>
  );
}

export default MenuLeft;
