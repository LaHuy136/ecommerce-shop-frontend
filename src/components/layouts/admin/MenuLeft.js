function MenuLeft() {
  return (
    <aside className="left-sidebar" data-sidebarbg="skin5">
      <div className="scroll-sidebar">
        <nav className="sidebar-nav">
          <ul id="sidebarnav">
            <li className="sidebar-item">
              <a
                className="sidebar-link waves-effect waves-dark sidebar-link"
                href="{{ route('admin.dashboard') }}"
                aria-expanded="false"
              >
                <i className="mdi mdi-av-timer"></i>
                <span className="hide-menu">Dashboard</span>
              </a>
            </li>

            <li className="sidebar-item">
              <a
                className="sidebar-link waves-effect waves-dark sidebar-link"
                href="{{ route('admin.profiles') }}"
                aria-expanded="false"
              >
                <i className="mdi mdi-account-network"></i>
                <span className="hide-menu">Profile</span>
              </a>
            </li>

            <li className="sidebar-item">
              <a
                className="sidebar-link waves-effect waves-dark sidebar-link"
                href="{{ route('admin.countries') }}"
                aria-expanded="false"
              >
                <i className="mdi mdi-border-none"></i>
                <span className="hide-menu">Country</span>
              </a>
            </li>

            <li className="sidebar-item">
              <a
                className="sidebar-link waves-effect waves-dark sidebar-link"
                href="{{ route('admin.blogs') }}"
                aria-expanded="false"
              >
                <i className="mdi mdi-newspaper"></i>
                <span className="hide-menu">Blog</span>
              </a>
            </li>

            <li className="sidebar-item">
              <a
                className="sidebar-link waves-effect waves-dark sidebar-link"
                href="{{ route('admin.users') }}"
                aria-expanded="false"
              >
                <i className="mdi mdi-account"></i>
                <span className="hide-menu">User</span>
              </a>
            </li>

            <li className="sidebar-item">
              <a
                className="sidebar-link waves-effect waves-dark sidebar-link"
                href="{{ route('admin.products') }}"
                aria-expanded="false"
              >
                <i className="mdi mdi-cart"></i>
                <span className="hide-menu">Product</span>
              </a>
            </li>

            <li className="sidebar-item">
              <a
                className="sidebar-link waves-effect waves-dark sidebar-link"
                href="/admin/history"
                aria-expanded="false"
              >
                <i className="mdi mdi-history"></i>
                <span className="hide-menu">Order History</span>
              </a>
            </li>

            <li className="sidebar-item">
              <a
                className="sidebar-link waves-effect waves-dark sidebar-link"
                href="/admin/form-basic"
                aria-expanded="false"
              >
                <i className="mdi mdi-arrange-bring-forward"></i>
                <span className="hide-menu">Form Basic</span>
              </a>
            </li>

            <li className="sidebar-item">
              <a
                className="sidebar-link waves-effect waves-dark sidebar-link"
                href="/admin/table-basic"
                aria-expanded="false"
              >
                <i className="mdi mdi-border-none"></i>
                <span className="hide-menu">Table</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </aside>
  );
}

export default MenuLeft;
