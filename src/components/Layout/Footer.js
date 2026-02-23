import iframe1 from "../../assets/images/home/iframe1.png";
import iframe2 from "../../assets/images/home/iframe2.png";
import iframe3 from "../../assets/images/home/iframe3.png";
import iframe4 from "../../assets/images/home/iframe4.png";
import map from "../../assets/images/home/map.png";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <footer id="footer">
      <div className="footer-top">
        <div className="container">
          <div className="row">
            <div className="col-sm-2">
              <div className="companyinfo">
                <h2>
                  <span>e</span>-shopper
                </h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit,sed
                  do eiusmod tempor
                </p>
              </div>
            </div>
            <div className="col-sm-7">
              <div className="col-sm-3">
                <div className="video-gallery text-center">
                  <Link>
                    <div className="iframe-img">
                      <img src={iframe1} alt="" />
                    </div>
                    <div className="overlay-icon">
                      <i className="fa fa-play-circle-o"></i>
                    </div>
                  </Link>
                  <p>Circle of Hands</p>
                  <h2>24 DEC 2014</h2>
                </div>
              </div>

              <div className="col-sm-3">
                <div className="video-gallery text-center">
                  <Link>
                    <div className="iframe-img">
                      <img src={iframe2} alt="" />
                    </div>
                    <div className="overlay-icon">
                      <i className="fa fa-play-circle-o"></i>
                    </div>
                  </Link>
                  <p>Circle of Hands</p>
                  <h2>24 DEC 2014</h2>
                </div>
              </div>

              <div className="col-sm-3">
                <div className="video-gallery text-center">
                  <Link>
                    <div className="iframe-img">
                      <img src={iframe3} alt="" />
                    </div>
                    <div className="overlay-icon">
                      <i className="fa fa-play-circle-o"></i>
                    </div>
                  </Link>
                  <p>Circle of Hands</p>
                  <h2>24 DEC 2014</h2>
                </div>
              </div>

              <div className="col-sm-3">
                <div className="video-gallery text-center">
                  <Link>
                    <div className="iframe-img">
                      <img src={iframe4} alt="" />
                    </div>
                    <div className="overlay-icon">
                      <i className="fa fa-play-circle-o"></i>
                    </div>
                  </Link>
                  <p>Circle of Hands</p>
                  <h2>24 DEC 2014</h2>
                </div>
              </div>
            </div>
            <div className="col-sm-3">
              <div className="address">
                <img src={map} alt="" />
                <p>505 S Atlantic Ave Virginia Beach, VA(Virginia)</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-widget">
        <div className="container">
          <div className="row">
            <div className="col-sm-2">
              <div className="single-widget">
                <h2>Service</h2>
                <ul className="nav nav-pills nav-stacked">
                  <li>
                    <Link>Online Help</Link>
                  </li>
                  <li>
                    <Link>Contact Us</Link>
                  </li>
                  <li>
                    <Link>Order Status</Link>
                  </li>
                  <li>
                    <Link>Change Location</Link>
                  </li>
                  <li>
                    <Link>FAQ’s</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-sm-2">
              <div className="single-widget">
                <h2>Quock Shop</h2>
                <ul className="nav nav-pills nav-stacked">
                  <li>
                    <Link>T-Shirt</Link>
                  </li>
                  <li>
                    <Link>Mens</Link>
                  </li>
                  <li>
                    <Link>Womens</Link>
                  </li>
                  <li>
                    <Link>Gift Cards</Link>
                  </li>
                  <li>
                    <Link>Shoes</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-sm-2">
              <div className="single-widget">
                <h2>Policies</h2>
                <ul className="nav nav-pills nav-stacked">
                  <li>
                    <Link>Terms of Use</Link>
                  </li>
                  <li>
                    <Link>Privecy Policy</Link>
                  </li>
                  <li>
                    <Link>Refund Policy</Link>
                  </li>
                  <li>
                    <Link>Billing System</Link>
                  </li>
                  <li>
                    <Link>Ticket System</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-sm-2">
              <div className="single-widget">
                <h2>About Shopper</h2>
                <ul className="nav nav-pills nav-stacked">
                  <li>
                    <Link>Company Information</Link>
                  </li>
                  <li>
                    <Link>Careers</Link>
                  </li>
                  <li>
                    <Link>Store Location</Link>
                  </li>
                  <li>
                    <Link>Affillate Program</Link>
                  </li>
                  <li>
                    <Link>Copyright</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-sm-3 col-sm-offset-1">
              <div className="single-widget">
                <h2>About Shopper</h2>
                <form action="#" className="searchform">
                  <input type="text" placeholder="Your email address" />
                  <button type="submit" className="btn btn-default">
                    <i className="fa fa-arrow-circle-o-right"></i>
                  </button>
                  <p>
                    Get the most recent updates from <br />
                    our site and be updated your self...
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <div className="row">
            <p className="pull-left">
              Copyright © 2013 E-SHOPPER Inc. All rights reserved.
            </p>
            <p className="pull-right">
              Designed by{" "}
              <span>
                <Link target="_blank" to="http://www.themeum.com">
                  Themeum
                </Link>
              </span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
