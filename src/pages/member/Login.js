import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { login as loginApi } from "../../api/auth";
import { useAuth } from "../../context/AuthContext";
import { toast } from "react-toastify";
function Login() {
  const navigate = useNavigate();
  const user = localStorage.getItem("token");

  const { login } = useAuth();
  useEffect(() => {
    if (user) navigate("/");
  });

  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const handleInput = (e) => {
    const nameInput = e.target.name;
    const valueInput = e.target.value;
    setInputs((state) => ({ ...state, [nameInput]: valueInput }));
  };

  const handleForm = async (e) => {
    e.preventDefault();

    let errorsSubmit = {};

    if (!inputs.email) {
      errorsSubmit.email = "Please enter your email";
    } else if (!inputs.email.match(/^\S+@\S+\.\S+$/)) {
      errorsSubmit.email = "Invalid email";
    }

    if (!inputs.password) {
      errorsSubmit.password = "Please enter your password";
    } else if (inputs.password.length < 8) {
      errorsSubmit.password = "Password must be at least 8 characters";
    }

    if (Object.keys(errorsSubmit).length > 0) {
      setErrors(errorsSubmit);
      return;
    }

    try {
      const formData = new FormData();
      formData.append("email", inputs.email);
      formData.append("password", inputs.password);

      const response = await loginApi(formData);

      if (response.data?.errors) {
        setErrors(response.data.errors);
        toast.error("Login failed");
        return;
      }

      login(response.user, response.token);
      toast.success("Login successfully");
      navigate("/", { replace: true });
    } catch (error) {
      setErrors(error.response.data.errors);
      toast.error("Login failed");
    }
  };

  return (
    <div className="container">
      <div className="login-form">
        <div className="breadcrumbs">
          <ol className="breadcrumb">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li className="active">Login</li>
          </ol>
        </div>
        <form onSubmit={handleForm}>
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              className="form-control form-control-line"
              onChange={handleInput}
            />
            {errors.email && (
              <div className="invalid-feedback">{errors.email}</div>
            )}
          </div>
          <div>
            <div className="row justify-content-center">
              <div className="col-sm-9">
                <label htmlFor="password">Password</label>
              </div>
              <div className="col-sm-3">
                <a href="#" className="pull-right">
                  Forgot password ?
                </a>
              </div>
            </div>
            <input
              type="password"
              name="password"
              placeholder="Password"
              onChange={handleInput}
              className="form-control form-control-line"
            />
            {errors.password && (
              <div className="invalid-feedback">{errors.password}</div>
            )}
          </div>
          <div className="form-group">
            <span>
              <b>You don't have account ? </b>
            </span>
            <Link to="/register">Register</Link>
          </div>
          <span>
            <input type="checkbox" className="checkbox" />
            Keep me signed in
          </span>
          <div className="form-group">
            <button type="submit" className="btn btn-default">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
