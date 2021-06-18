import React, { Component } from "react";

export default class Test extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div
            className="col-sm-9 col-md-7 col-lg-5 mx-auto"
            style={{ marginTop: "35px" }}
          >
            <div
              className="card card-signin my-5"
              style={{ backgroundColor: "white" }}
            >
              <div className="card-body">
                <h5 className="card-title text-center">User Login</h5>
                <form className="form-signin" autocomplete="off">
                  <div className="form-label-group">
                    <input
                      type="email"
                      id="email"
                      className="form-control"
                      placeholder="Email address"
                      onfocus="purple(event)"
                      required
                    />
                    <label id="label1" for="email">
                      Email address
                    </label>
                  </div>
                  <div className="form-label-group">
                    <input
                      type="password"
                      id="password"
                      className="form-control"
                      placeholder="Password"
                      onfocus="purple(event)"
                      required
                    />
                    <label id="label2" for="password">
                      Password
                    </label>
                  </div>
                  <div id="forgotpassword" className="pt-2">
                    <h6>Forgot Password</h6>
                  </div>
                  <div>
                    <input
                      className="btn btn-lg text-uppercase"
                      type="button"
                      value="LogIn"
                      id="sub"
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
