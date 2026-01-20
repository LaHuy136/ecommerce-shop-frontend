import { Link } from "react-router-dom";
import avatarDefault from "../../../src/assets/member/images/users/5.jpg";
function Account() {
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
                      <Link to="/account">Account</Link>
                    </h4>
                  </div>
                </div>

                <div className="panel panel-default">
                  <div className="panel-heading">
                    <h4 className="panel-title">
                      <Link href="/product">My product</Link>
                    </h4>
                  </div>
                </div>
              </div>

              <img
                src={avatarDefault}
                className="rounded-circle"
                width="150"
                height="auto"
              />
            </div>
          </div>
          <div className="col-sm-9">
            <div className="blog-post-area">
              <h2 className="title text-center">Update user</h2>

              <div className="signup-form">
                <form
                  action="/account/{{ $user->id }}"
                  method="POST"
                  enctype="multipart/form-data"
                >
                  <div className="form-group">
                    <label for="name">Full Name</label>
                    <div>
                      <input
                        type="text"
                        name="name"
                        // value="{{ $user->name }}"
                        className="form-control form-control-line"
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label for="email">Email</label>
                    <div>
                      <input
                        type="email"
                        // value="{{ $user->email }}"
                        className="form-control form-control-line"
                        name="email"
                        id="email"
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label for="password">Password</label>
                    <div>
                      <input
                        type="password"
                        name="password"
                        // value="{{ $user->password }}"
                        className="form-control form-control-line"
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label for="password_confirmation">
                      Confirmation Password
                    </label>
                    <div>
                      <input
                        type="password"
                        name="password_confirmation"
                        // value="{{ $user->password }}"
                        className="form-control form-control-line"
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label for="phone">Phone No</label>
                    <div>
                      <input
                        type="text"
                        name="phone"
                        // value="{{ $user->phone }}"
                        className="form-control form-control-line"
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label>Avatar</label>

                    <input
                      type="file"
                      name="avatar"
                      className="form-control"
                      accept="image/*"
                    />
                  </div>
                  <div className="form-group">
                    <label for="country_id">Select Country</label>

                    <select
                      className="form-control form-control-line"
                      name="country_id"
                    >
                      {/* @foreach ($countries as $country)
                                                <option value="{{ $country->id }}"> 
                                                  
                                                </option>
                                            @endforeach */}
                      <option value="England">England</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <button type="submit" className="btn btn-default">
                      Update
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Account;
