import Title from "../../../components/layouts/admin/Title";

function Dashboard() {
  return (
    <>
      <Title title={"Dashboard"} />
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-8">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Sales Ratio</h4>
                <div className="sales ct-charts mt-3"></div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title m-b-5">Referral Earnings</h5>
                <h3 className="font-light">$769.08</h3>
                <div className="m-t-20 text-center">
                  <div id="earnings"></div>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-body">
                <h4 className="card-title m-b-0">Users</h4>
                <h2 className="font-light">
                  35,658{" "}
                  <span className="font-16 text-success font-medium">+23%</span>
                </h2>
                <div className="m-t-30">
                  <div className="row text-center">
                    <div className="col-6 border-right">
                      <h4 className="m-b-0">58%</h4>
                      <span className="font-14 text-muted">New Users</span>
                    </div>
                    <div className="col-6">
                      <h4 className="m-b-0">42%</h4>
                      <span className="font-14 text-muted">Repeat Users</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Latest Sales</h4>
              </div>
              <div className="table-responsive">
                <table className="table table-hover">
                  <thead>
                    <tr>
                      <th className="border-top-0">NAME</th>
                      <th className="border-top-0">STATUS</th>
                      <th className="border-top-0">DATE</th>
                      <th className="border-top-0">PRICE</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="txt-oflo">Elite admin</td>
                      <td>
                        <span className="label label-success label-rounded">
                          SALE
                        </span>{" "}
                      </td>
                      <td className="txt-oflo">April 18, 2017</td>
                      <td>
                        <span className="font-medium">$24</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="txt-oflo">Real Homes WP Theme</td>
                      <td>
                        <span className="label label-info label-rounded">
                          EXTENDED
                        </span>
                      </td>
                      <td className="txt-oflo">April 19, 2017</td>
                      <td>
                        <span className="font-medium">$1250</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="txt-oflo">Ample Admin</td>
                      <td>
                        <span className="label label-purple label-rounded">
                          Tax
                        </span>
                      </td>
                      <td className="txt-oflo">April 19, 2017</td>
                      <td>
                        <span className="font-medium">$1250</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="txt-oflo">Medical Pro WP Theme</td>
                      <td>
                        <span className="label label-success label-rounded">
                          Sale
                        </span>
                      </td>
                      <td className="txt-oflo">April 20, 2017</td>
                      <td>
                        <span className="font-medium">-$24</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="txt-oflo">Hosting press html</td>
                      <td>
                        <span className="label label-success label-rounded">
                          SALE
                        </span>
                      </td>
                      <td className="txt-oflo">April 21, 2017</td>
                      <td>
                        <span className="font-medium">$24</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="txt-oflo">Digital Agency PSD</td>
                      <td>
                        <span className="label label-danger label-rounded">
                          Tax
                        </span>{" "}
                      </td>
                      <td className="txt-oflo">April 23, 2017</td>
                      <td>
                        <span className="font-medium">-$14</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Recent Comments</h4>
              </div>
              <div className="comment-widgets">
                <div className="d-flex flex-row comment-row m-t-0">
                  <div className="p-2">
                    <img
                      src="{{ asset('admin/assets/images/users/1.jpg') }}"
                      alt="user"
                      width="50"
                      className="rounded-circle"
                    />
                  </div>
                  <div className="comment-text w-100">
                    <h6 className="font-medium">James Anderson</h6>
                    <span className="m-b-15 d-block">
                      Lorem Ipsum is simply dummy text of the printing and type
                      setting industry.{" "}
                    </span>
                    <div className="comment-footer">
                      <span className="text-muted float-right">
                        April 14, 2016
                      </span>
                      <span className="label label-rounded label-primary">
                        Pending
                      </span>
                      <span className="action-icons">
                        <a href="javascript:void(0)">
                          <i className="ti-pencil-alt"></i>
                        </a>
                        <a href="javascript:void(0)">
                          <i className="ti-check"></i>
                        </a>
                        <a href="javascript:void(0)">
                          <i className="ti-heart"></i>
                        </a>
                      </span>
                    </div>
                  </div>
                </div>

                <div className="d-flex flex-row comment-row">
                  <div className="p-2">
                    <img
                      src="{{ asset('admin/assets/images/users/4.jpg') }}"
                      alt="user"
                      width="50"
                      className="rounded-circle"
                    />
                  </div>
                  <div className="comment-text active w-100">
                    <h6 className="font-medium">Michael Jorden</h6>
                    <span className="m-b-15 d-block">
                      Lorem Ipsum is simply dummy text of the printing and type
                      setting industry.{" "}
                    </span>
                    <div className="comment-footer ">
                      <span className="text-muted float-right">
                        April 14, 2016
                      </span>
                      <span className="label label-success label-rounded">
                        Approved
                      </span>
                      <span className="action-icons active">
                        <a href="javascript:void(0)">
                          <i className="ti-pencil-alt"></i>
                        </a>
                        <a href="javascript:void(0)">
                          <i className="icon-close"></i>
                        </a>
                        <a href="javascript:void(0)">
                          <i className="ti-heart text-danger"></i>
                        </a>
                      </span>
                    </div>
                  </div>
                </div>

                <div className="d-flex flex-row comment-row">
                  <div className="p-2">
                    <img
                      src="{{ asset('admin/assets/images/users/5.jpg') }}"
                      alt="user"
                      width="50"
                      className="rounded-circle"
                    />
                  </div>
                  <div className="comment-text w-100">
                    <h6 className="font-medium">Johnathan Doeting</h6>
                    <span className="m-b-15 d-block">
                      Lorem Ipsum is simply dummy text of the printing and type
                      setting industry.{" "}
                    </span>
                    <div className="comment-footer">
                      <span className="text-muted float-right">
                        April 14, 2016
                      </span>
                      <span className="label label-rounded label-danger">
                        Rejected
                      </span>
                      <span className="action-icons">
                        <a href="javascript:void(0)">
                          <i className="ti-pencil-alt"></i>
                        </a>
                        <a href="javascript:void(0)">
                          <i className="ti-check"></i>
                        </a>
                        <a href="javascript:void(0)">
                          <i className="ti-heart"></i>
                        </a>
                      </span>
                    </div>
                  </div>
                </div>

                <div className="d-flex flex-row comment-row m-t-0">
                  <div className="p-2">
                    <img
                      src="{{ asset('admin/assets/images/users/2.jpg') }}"
                      alt="user"
                      width="50"
                      className="rounded-circle"
                    />
                  </div>
                  <div className="comment-text w-100">
                    <h6 className="font-medium">Steve Jobs</h6>
                    <span className="m-b-15 d-block">
                      Lorem Ipsum is simply dummy text of the printing and type
                      setting industry.{" "}
                    </span>
                    <div className="comment-footer">
                      <span className="text-muted float-right">
                        April 14, 2016
                      </span>
                      <span className="label label-rounded label-primary">
                        Pending
                      </span>
                      <span className="action-icons">
                        <a href="javascript:void(0)">
                          <i className="ti-pencil-alt"></i>
                        </a>
                        <a href="javascript:void(0)">
                          <i className="ti-check"></i>
                        </a>
                        <a href="javascript:void(0)">
                          <i className="ti-heart"></i>
                        </a>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Temp Guide</h4>
                <div className="d-flex align-items-center flex-row m-t-30">
                  <div className="display-5 text-info">
                    <i className="wi wi-day-showers"></i>
                    <span>
                      73<sup>°</sup>
                    </span>
                  </div>
                  <div className="m-l-10">
                    <h3 className="m-b-0">Saturday</h3>
                    <small>Ahmedabad, India</small>
                  </div>
                </div>
                <table className="table no-border mini-table m-t-20">
                  <tbody>
                    <tr>
                      <td className="text-muted">Wind</td>
                      <td className="font-medium">ESE 17 mph</td>
                    </tr>
                    <tr>
                      <td className="text-muted">Humidity</td>
                      <td className="font-medium">83%</td>
                    </tr>
                    <tr>
                      <td className="text-muted">Pressure</td>
                      <td className="font-medium">28.56 in</td>
                    </tr>
                    <tr>
                      <td className="text-muted">Cloud Cover</td>
                      <td className="font-medium">78%</td>
                    </tr>
                  </tbody>
                </table>
                <ul className="row list-style-none text-center m-t-30">
                  <li className="col-3">
                    <h4 className="text-info">
                      <i className="wi wi-day-sunny"></i>
                    </h4>
                    <span className="d-block text-muted">09:30</span>
                    <h3 className="m-t-5">
                      70<sup>°</sup>
                    </h3>
                  </li>
                  <li className="col-3">
                    <h4 className="text-info">
                      <i className="wi wi-day-cloudy"></i>
                    </h4>
                    <span className="d-block text-muted">11:30</span>
                    <h3 className="m-t-5">
                      72<sup>°</sup>
                    </h3>
                  </li>
                  <li className="col-3">
                    <h4 className="text-info">
                      <i className="wi wi-day-hail"></i>
                    </h4>
                    <span className="d-block text-muted">13:30</span>
                    <h3 className="m-t-5">
                      75<sup>°</sup>
                    </h3>
                  </li>
                  <li className="col-3">
                    <h4 className="text-info">
                      <i className="wi wi-day-sprinkle"></i>
                    </h4>
                    <span className="d-block text-muted">15:30</span>
                    <h3 className="m-t-5">
                      76<sup>°</sup>
                    </h3>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
