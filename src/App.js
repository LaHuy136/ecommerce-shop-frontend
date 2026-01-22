// components
import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App(props) {
  return (
    <>
      {props.children}
      <ToastContainer position="top-right" autoClose={3000} />
    </>
  );
}

export default App;
