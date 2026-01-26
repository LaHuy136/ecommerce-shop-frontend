import { register } from "../../api/auth";
import { Link, useNavigate } from "react-router-dom";
import AccountForm from "../AccountForm";
import useAccountForm from "../../hooks/useForm";
import { toast } from "react-toastify";

function Register() {
  const navigate = useNavigate();
  const initialValues = {
    email: "",
    name: "",
    password: "",
    password_confirmation: "",
    phone: "",
    country_id: "",
  };

  const { inputs, errors, setErrors, file, fileErr, handleInput, handleFile } =
    useAccountForm(initialValues);

  const handleSubmit = async (e) => {
    e.preventDefault();
    let errorsSubmit = {};

    if (!inputs.name) {
      errorsSubmit.name = "Please enter your full name";
    }

    if (!inputs.email) {
      errorsSubmit.email = "Please enter your email";
    } else if (!inputs.email.match(/@([\w.-]+)/)) {
      errorsSubmit.email = "Invalid email";
    }

    if (!inputs.password) {
      errorsSubmit.password = "Please enter your password";
    } else if (inputs.password.length < 8) {
      errorsSubmit.password = "Length of password minimum is 8 characters";
    } else if (inputs.password !== inputs.password_confirmation) {
      errorsSubmit.password = "Password does not match";
    }

    if (Object.keys(errorsSubmit).length > 0) {
      setErrors(errorsSubmit);
      return;
    }

    try {
      const formData = new FormData();
      formData.append("name", inputs.name);
      formData.append("email", inputs.email);
      formData.append("password", inputs.password);
      formData.append("password_confirmation", inputs.password_confirmation);

      if (inputs.phone) {
        formData.append("phone", inputs.phone);
      }

      if (file) {
        formData.append("avatar", file);
      }

      if (inputs.country) {
        formData.append("country_id", inputs.country_id);
      }

      const response = await register(formData);

      if (response.data?.errors) {
        setErrors(response.data.errors);
        toast.error("Register failed");
        return;
      }

      toast.success("Register successfully");
      navigate("/login", { replace: true });
    } catch (error) {
      if (error.response) {
        const { status, data } = error.response;

        if (status === 422) {
          setErrors(data.errors);
        } else {
          toast.error("Register failed, please try again");
        }
      } else {
        toast.error("Network error, please check your connection");
      }
    }
  };

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
        <div className="signup-form">
          <AccountForm
            inputs={inputs}
            errors={errors}
            handleInput={handleInput}
            handleFile={handleFile}
            fileErr={fileErr}
            onSubmit={handleSubmit}
            isRegister={true}
          />
        </div>
      </div>
    </div>
  );
}

export default Register;
