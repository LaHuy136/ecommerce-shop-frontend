import { useState } from "react";
import RenderError from "../components/errors/RenderError";
import { register } from "../api/auth";
import { Link, useNavigate } from "react-router-dom";
import CountrySelect from "../components/selects/CountrySelect";
function Register() {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
    password_confirmation: "",
    name: "",
    phone: "",
    country: "",
  });
  const [file, setFile] = useState("");
  const [fileErr, setFileErr] = useState("");

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

    if (inputs.email === "") {
      errorsSubmit.email = "Please enter your email";
      flag = false;
    } else if (!inputs.email.match(/@([\w.-]+)/)) {
      errorsSubmit.email = "Invalid email";
      flag = false;
    }

    if (inputs.password === "") {
      errorsSubmit.password = "Please enter your password";
      flag = false;
    } else if (inputs.password.length < 8) {
      errorsSubmit.password = "Length of password minimum is 8 characters";
      flag = false;
    } else if (inputs.password !== inputs.password_confirmation) {
      errorsSubmit.password = "Password does not match";
      flag = false;
    }

    if (!file) {
      setFileErr("Please choose avatar");
      flag = false;
    }

    if (inputs.country === "") {
      errorsSubmit.country = "Please select country";
      flag = false;
    }

    if (!flag) {
      setErrors(errorsSubmit);
      return;
    }

    const formData = new FormData();
    formData.append("name", inputs.name);
    formData.append("email", inputs.email);
    formData.append("password", inputs.password);
    formData.append("password_confirmation", inputs.password_confirmation);
    formData.append("phone", inputs.phone);
    formData.append("country_id", inputs.country);
    formData.append("avatar", file);

    try {
      const res = await register(formData);
      navigate("/login");
    } catch (error) {
      console.log(error?.response?.data);
    }
  };

  function handleFile(e) {
    const file = e.target.files[0];
    if (!file) return;

    const arrType = ["png", "jpg", "jpeg"];
    let type = file.type.split("/")[1];

    if (!arrType.includes(type)) {
      setFileErr("Please choose image (png, jpg, jpeg)");
      setFile("");
      return;
    }

    if (file.size > 1024 * 1024) {
      setFileErr("Please choose size image < 1MB");
      setFile("");
      return;
    }

    setFileErr("");
    setFile(file);
  }
  return (
    <div className="container">
      <div className="signup-form">
        <div className="breadcrumbs">
          <ol className="breadcrumb">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li className="active">Register</li>
          </ol>
        </div>
        {<RenderError errors={errors} />}
        <form onSubmit={handleForm} method="POST">
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              name="name"
              placeholder="Johnathan Doe"
              className="form-control form-control-line"
              onChange={handleInput}
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              placeholder="johnathan@example.com"
              className="form-control form-control-line"
              onChange={handleInput}
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              placeholder="********"
              className="form-control form-control-line"
              onChange={handleInput}
            />
          </div>

          <div className="form-group">
            <label htmlFor="password_confirmation">Password Confirmation</label>
            <input
              type="password"
              name="password_confirmation"
              placeholder="********"
              className="form-control form-control-line"
              onChange={handleInput}
            />
          </div>

          <div className="form-group">
            <label htmlFor="phone">Phone</label>
            <input
              type="number"
              name="phone"
              placeholder="0900123456"
              className="form-control form-control-line"
              onChange={handleInput}
            />
          </div>

          <div className="form-group">
            <label htmlFor="avatar">Avatar</label>
            <input
              onChange={handleFile}
              type="file"
              name="avatar"
              className="form-control form-control-line"
            />
            <span>{fileErr}</span>
          </div>

          <div className="form-group">
            <label htmlFor="country">Country</label>
            <select
              onChange={handleInput}
              name="country"
              className="form-control form-control-line"
            >
              <option value="">-- Select country --</option>
              <CountrySelect />
            </select>
          </div>

          <div className="form-group">
            <button type="submit" className="btn btn-default">
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
export default Register;
