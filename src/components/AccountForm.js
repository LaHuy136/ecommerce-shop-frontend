import CountrySelect from "./selects/CountrySelect";
import { Link } from "react-router-dom";
function AccountForm({
  inputs,
  setInputs,
  handleInput,
  handleFile,
  errors,
  fileErr,
  onSubmit,
  isRegister = true,
}) {
  return (
    <form onSubmit={onSubmit}>
      <div className="form-group">
        <label htmlFor="name">Full Name</label>
        <input
          type="text"
          name="name"
          value={inputs.name || ""}
          placeholder="Full Name"
          className="form-control form-control-line"
          onChange={handleInput}
        />
        {errors.name && <div className="invalid-feedback">{errors.name}</div>}
      </div>

      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          value={inputs.email || ""}
          placeholder="Email"
          className="form-control form-control-line"
          onChange={handleInput}
        />
        {errors.email && <div className="invalid-feedback">{errors.email}</div>}
      </div>

      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          value={inputs.password || ""}
          placeholder="Password"
          className="form-control form-control-line"
          onChange={handleInput}
        />
        {errors.password && (
          <div className="invalid-feedback">{errors.password}</div>
        )}
      </div>

      <div className="form-group">
        <label htmlFor="password_confirmation">Password Confirmation</label>
        <input
          type="password"
          name="password_confirmation"
          value={inputs.password_confirmation || ""}
          placeholder="Confirm Password"
          className="form-control form-control-line"
          onChange={handleInput}
        />
      </div>

      <div className="form-group">
        <label htmlFor="phone">Phone</label>
        <input
          name="phone"
          value={inputs.phone || ""}
          placeholder="Phone Number"
          className="form-control form-control-line"
          onChange={handleInput}
        />
      </div>

      <div className="form-group">
        <label htmlFor="avatar">Avatar</label>
        <input
          type="file"
          name="avatar"
          className="form-control form-control-line"
          onChange={handleFile}
        />
        {fileErr && <span>{fileErr}</span>}
      </div>

      <div className="form-group">
        <label htmlFor="country_id">Country</label>
        <select
          name="country_id"
          className="form-control form-control-line"
          onChange={handleInput}
          value={inputs.country_id || ""}
        >
          <option value="">-- Select country --</option>
          <CountrySelect />
        </select>
        {errors.country && (
          <div className="invalid-feedback">{errors.country}</div>
        )}
      </div>
      {isRegister && (
        <div className="form-group">
          <span>
            <b>You have account ? </b>
          </span>
          <Link to="/login">Login</Link>
        </div>
      )}
      <div className="form-group">
        <button type="submit" className="btn btn-default">
          {isRegister ? "Register" : "Update"}
        </button>
      </div>
    </form>
  );
}

export default AccountForm;
