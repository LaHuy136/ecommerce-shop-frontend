import { useNavigate } from "react-router-dom";
import avatarDefault from "../../../src/assets/images/users/5.jpg";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { index, update } from "../../api/account";
import { useAuth } from "../../context/AuthContext";
import AccountForm from "../../components/AccountForm";
import useAccountForm from "../../hooks/useForm";
function Account() {
  const { user, login, loading } = useAuth();
  const [profile, setProfile] = useState({});
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

  const loadProfile = async () => {
    try {
      const response = await index();
      setProfile(response.data);
    } catch (error) {
      toast.error("Failed to load profile: ", error);
      console.log(error);
    }
  };

  useEffect(() => {
    loadProfile();
  }, []);

  useEffect(() => {
    if (!profile) return;

    setInputs({
      email: profile.email || "",
      name: profile.name || "",
      phone: profile.phone || "",
      country_id: profile.country_id || "",
      password: "",
      password_confirmation: "",
    });
  }, [profile]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    let errorSubmits = {};

    if (inputs.password) {
      if (inputs.password.length < 8) {
        errorSubmits.password = "Length of password minimum is 8 characters";
      } else if (inputs.password !== inputs.password_confirmation) {
        errorSubmits.password = "Password does not match";
      }
    }

    if (!inputs.country_id) {
      errorSubmits.country_id = "Please choose your country";
    }

    if (Object.keys(errorSubmits).length > 0) {
      setErrors(errorSubmits);
      return;
    }

    try {
      const formData = new FormData();
      formData.append("name", inputs.name);
      formData.append("email", inputs.email);
      formData.append("phone", inputs.phone);
      formData.append("country_id", inputs.country_id);
      if (inputs.password) {
        formData.append("password", inputs.password);
        formData.append("password_confirmation", inputs.password_confirmation);
      }
      if (file) {
        formData.append("avatar", file);
      }

      const response = await update(profile.id, formData);
      login(response.user, response.token);
      setErrors({});
      toast.success("Profile updated successfully");
      loadProfile();
    } catch (error) {
      console.log(error);
      if (error.response) {
        const { status, data } = error.response;

        if (status === 422) {
          setErrors(data.errors);
        } else {
          toast.error("Create product failed, please try again");
        }
      } else {
        toast.error("Network error, please check your connection");
      }
    }
  };

  return (
    <section>
      <div className="col-sm-7">
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
              setInputs={setInputs}
            />
          </div>
        </div>
      </div>

      <div className="col-sm-2">
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
    </section>
  );
}

export default Account;
