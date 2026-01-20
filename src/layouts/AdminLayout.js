import Header from "../components/layouts/admin/Header";
import Footer from "../components/layouts/admin/Footer";
import MenuLeft from "../components/layouts/admin/MenuLeft";
const AdminLayout = ({ children }) => {
  return (
    <>
      <div className="preloader">
        <div className="lds-ripple">
          <div className="lds-pos"></div>
          <div className="lds-pos"></div>
        </div>
      </div>
      <div
        id="main-wrapper"
        data-navbarbg="skin6"
        data-theme="light"
        data-layout="vertical"
        data-sidebartype="full"
        data-boxed-layout="full"
      >
        <Header />
        <MenuLeft />
        <div className="page-wrapper">
          {children}
          <Footer />
        </div>
      </div>
    </>
  );
};

export default AdminLayout;
