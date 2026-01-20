import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="topbar" data-navbarbg="skin6">
      <nav className="navbar top-navbar navbar-expand-md navbar-light">
        <div className="navbar-header" data-logobg="skin5">
          <a
            className="nav-toggler waves-effect waves-light d-block d-md-none"
            href="javascript:void(0)"
          >
            <i className="ti-menu ti-close"></i>
          </a>

          <div className="navbar-brand">
            <a href="{{ route('admin.dashboard') }}" className="logo">
              <b className="logo-icon">
                <i className="wi wi-sunset"></i>

                <img
                  src="{{ asset('admin/assets/images/logo-icon.png') }}"
                  alt="homepage"
                  className="dark-logo"
                />

                <img
                  src="{{ asset('admin/assets/images/logo-light-icon.png') }}"
                  alt="homepage"
                  className="light-logo"
                />
              </b>

              <span className="logo-text">
                <img
                  src="{{ asset('admin/assets/images/logo-text.png') }}"
                  alt="homepage"
                  className="dark-logo"
                />

                <img
                  src="{{ asset('admin/assets/images/logo-light-text.png') }}"
                  className="light-logo"
                  alt="homepage"
                />
              </span>
            </a>
          </div>

          <a
            className="topbartoggler d-block d-md-none waves-effect waves-light"
            href="javascript:void(0)"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="ti-more"></i>
          </a>
        </div>

        <div
          className="navbar-collapse collapse"
          id="navbarSupportedContent"
          data-navbarbg="skin6"
        >
          <ul className="navbar-nav float-left mr-auto">
            <li className="nav-item search-box">
              <form className="app-search position-absolute">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search &amp; enter"
                />
                <a className="srh-btn">
                  <i className="ti-close"></i>
                </a>
              </form>
            </li>
          </ul>

          <ul className="navbar-nav float-right">
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle text-muted waves-effect waves-dark pro-pic"
                href=""
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <img
                  src="{{ asset('admin/assets/images/users/1.jpg') }}"
                  alt="user"
                  className="rounded-circle"
                  width="31"
                />
              </a>
              <div className="dropdown-menu dropdown-menu-right user-dd animated">
                <Link className="dropdown-item" to="">
                  <i className="ti-user m-r-5 m-l-5"></i>
                  My Profile
                </Link>
                <Link
                  className="dropdown-item"
                  to=""
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById("logout-form").submit();
                  }}
                >
                  <i className="ti-shift-left-alt m-r-5 m-l-5"></i>Logout
                </Link>

                <form
                  id="logout-form"
                  action="{{ route('logout') }}"
                  method="POST"
                  className="d-none"
                >
                  @csrf
                </form>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
