import Header from "../components/layouts/member/Header";
import Footer from "../components/layouts/member/Footer";
// import "../assets/member/css/animate.css";
// import "../assets/member/css/drawer.min.css";
// import "../assets/member/css/main.css";
// import "../assets/member/css/prettyPhoto.css";
// import "../assets/member/css/rate.css";
// import "../assets/member/css/responsive.css";
// import "../assets/member/css/smart.css";
// import "../assets/member/css/style.css";

// import "../assets/member/js/jquery.js";
// import "../assets/member/js/jquery.prettyPhoto.js";
// import "../assets/member/js/jquery.scrollUp.min.js";
// import "../assets/member/js/bootstrap.min.js";
// import "../assets/member/js/html5shiv.js";
// import "../assets/member/js/main.js";
const MemberLayout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default MemberLayout;
