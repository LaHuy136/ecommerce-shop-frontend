import { Link, useNavigate } from "react-router-dom";
import avatarDefault from "../../../src/assets/images/users/5.jpg";
import { useEffect } from "react";
import { update } from "../../api/account";
import AccountForm from "../../components/AccountForm";
import useAccountForm from "../../hooks/useAccountForm";
import { toast } from "react-toastify";
import { useAuth } from "../../context/AuthContext";

function Account() {
  const { user, login, loading } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user && !loading) navigate("/login");
  }, [user, loading]);

  const initialValues = {
    email: "",
    name: "",
    password: "",
    password_confirmation: "",
    phone: "",
    country_id: "",
  };

  const {
    inputs,
    setInputs,
    errors,
    setErrors,
    file,
    fileErr,
    handleInput,
    handleFile,
  } = useAccountForm(initialValues);

  const handleSubmit = async (e) => {
    e.preventDefault();
    let errorsSubmit = {};

    if (inputs.password) {
      if (inputs.password.length < 8) {
        errorsSubmit.password = "Length of password minimum is 8 characters";
      } else if (inputs.password !== inputs.password_confirmation) {
        errorsSubmit.password = "Password does not match";
      }
    }

    if (Object.keys(errorsSubmit).length > 0) {
      setErrors(errorsSubmit);
      return;
    }

    setErrors({});

    const formData = new FormData();
    formData.append("name", inputs.name);
    formData.append("phone", inputs.phone);

    if (inputs.email) {
      formData.append("email", inputs.email);
    }

    if (inputs.password) {
      formData.append("password", inputs.password);
      formData.append("password_confirmation", inputs.password_confirmation);
    }

    if (file) {
      formData.append("avatar", file);
    }

    if (inputs.country_id) {
      formData.append("country_id", inputs.country_id);
    }

    try {
      const res = await update(user.id, formData);
      login(res.user, res.token);

      toast.success("Profile updated successfully");
    } catch (error) {
      toast.error("Failed to update profile");
    }
  };

  useEffect(() => {
    if (!user) return;

    setInputs({
      email: user.email || "",
      name: user.name || "",
      phone: user.phone || "",
      country_id: Number(user.country_id) || "",
      password: "",
      password_confirmation: "",
    });
  }, [user, setInputs]);

  return (
    <section>
      <div className="container">
        <div className="row">
          <div className="col-sm-3">
            <div className="left-sidebar">
              <h2>Account & Product</h2>
              <div className="panel-group category-products" id="accordian">
                <div className="panel panel-default">
                  <div className="panel-heading">
                    <h4 className="panel-title">
                      <Link to="/accounts">Account</Link>
                    </h4>
                  </div>
                </div>

                <div className="panel panel-default">
                  <div className="panel-heading">
                    <h4 className="panel-title">
                      <Link to="/products">My product</Link>
                    </h4>
                  </div>
                </div>
              </div>

              <img
                src={
                  user?.avatar
                    ? "http://ecommerce-shop.test/storage/" + user.avatar
                    : avatarDefault
                }
                className="rounded-circle"
                width="150"
                height="auto"
                alt="Avatar..."
              />
            </div>
          </div>
          <div className="col-sm-9">
            <div className="blog-post-area">
              <h2 className="title text-center">Update profile</h2>

              <div className="signup-form">
                <AccountForm
                  inputs={inputs}
                  errors={errors}
                  handleInput={handleInput}
                  handleFile={handleFile}
                  fileErr={fileErr}
                  onSubmit={handleSubmit}
                  isRegister={false}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Account;
