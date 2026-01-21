import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import RenderError from "../components/errors/RenderError";
import { login as loginApi } from "../api/auth";
import { useAuth } from "../context/AuthContext";
function Login() {
  const navigate = useNavigate();
  const { login, user } = useAuth();

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user]);

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
    let flag = true;
    if (inputs.email == "") {
      errorsSubmit.email = "Please enter your email";
      flag = false;
    } else if (!inputs.email.match(/@([\w.-]+)/)) {
      errorsSubmit.email = "Invalid email";
      flag = false;
    }

    if (inputs.password == "") {
      errorsSubmit.password = "Please enter your password";
      flag = false;
    }

    if (!flag) {
      setErrors(errorsSubmit);
      return;
    }

    const formData = new FormData();
    formData.append("email", inputs.email);
    formData.append("password", inputs.password);

    try {
      const res = await loginApi(formData);

      login(res.user, res.token);

      navigate("/");
    } catch (error) {
      console.log(error?.response?.data);
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
        {<RenderError errors={errors} />}
        <form onSubmit={handleForm} method="POST">
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="johnathan@example.com"
              className="form-control form-control-line"
              onChange={handleInput}
            />
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
              placeholder="********"
              onChange={handleInput}
              className="form-control form-control-line"
            />
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
