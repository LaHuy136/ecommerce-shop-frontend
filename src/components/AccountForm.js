import CountrySelect from "./selects/CountrySelect";

function AccountForm({
  inputs,
  setInputs,
  handleInput,
  handleFile,
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
          value={inputs.country}
        >
          <option value="">-- Select country --</option>
          <CountrySelect />
        </select>
      </div>

      <div className="form-group">
        <button type="submit" className="btn btn-default">
          {isRegister ? "Register" : "Update"}
        </button>
      </div>
    </form>
  );
}

export default AccountForm;
