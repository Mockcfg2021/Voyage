import React, { useState } from "react";
import validate from "./validate";
import background_image from "../../assets/auth_background.png";
import "./index.css";

export default function Editprofile() {
  const [values, setValues] = useState({
    userName: "Deep",
    number: "1234567890",
    email: "xyz@example.com",
    password: "123456789",
    confirmPassword: "123456789",
  });
  const [errors, setErrors] = useState({});
  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
    setErrors({});
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors(validate(values));
    console.log(errors);
  };

  console.log(values);
  console.log(errors);
  return (
    <div>
      <div className="RootContainer">
        <div>
          <img src={background_image} alt="Human" width="400px" />
        </div>
        <div className="BoxContainer">
          <div className="TopContainer">
            <div className="BackDrop"></div>
            <div className="HeaderContainer">
              <h2 className="HeaderText">Edit Profile</h2>
            </div>
          </div>
          <div className="InnerContainer">
            <div className="AuthBoxContainer">
              <form className="FormContainer" onSubmit={handleSubmit}>
                <div className="form-label-group">
                  <input
                    className="Input"
                    type="text"
                    placeholder="User Name"
                    id="userName"
                    name="userName"
                    onChange={handleChange}
                    value={values.userName}
                    required
                  />
                  {errors.userName ? (
                    <label htmlFor="userName" style={{ color: "red" }}>
                      {errors.userName}
                    </label>
                  ) : (
                    <label htmlFor="userName">User name </label>
                  )}
                </div>
                <div className="form-label-group">
                  <input
                    className="Input"
                    type="text"
                    placeholder="Contact Number"
                    id="number"
                    name="number"
                    required
                    onChange={handleChange}
                    value={values.number}
                  />
                  {errors.number ? (
                    <label htmlFor="number" style={{ color: "red" }}>
                      {errors.number}
                    </label>
                  ) : (
                    <label htmlFor="number">Contact Number </label>
                  )}
                </div>
                {/*                 <div className="form-label-group">
                  <input
                    className="Input"
                    type="email"
                    placeholder="Email"
                    id="email"
                    name="email"
                    required
                    onChange={handleChange}
                    disabled
                  />
                  {errors.email ? (
                    <label htmlFor="email" style={{ color: "red" }}>
                      {errors.email}
                    </label>
                  ) : (
                    <label htmlFor="email">Email address </label>
                  )}
                </div> */}
                <div className="form-label-group">
                  <input
                    className="Input"
                    type="password"
                    id="password"
                    placeholder="Password"
                    name="password"
                    required
                    onChange={handleChange}
                    value={values.password}
                  />
                  {errors.password ? (
                    <label htmlFor="password" style={{ color: "red" }}>
                      {errors.password}
                    </label>
                  ) : (
                    <label htmlFor="password">Password</label>
                  )}
                </div>
                <div className="form-label-group">
                  <input
                    className="Input"
                    type="password"
                    id="confirmPassword"
                    placeholder="Confirm Password"
                    name="confirmPassword"
                    required
                    value={values.confirmPassword}
                    onChange={handleChange}
                  />
                  {errors.confirmPassword ? (
                    <label htmlFor="confirmPassword" style={{ color: "red" }}>
                      {errors.confirmPassword}
                    </label>
                  ) : (
                    <label htmlFor="confirmPassword">Confirm Password</label>
                  )}
                </div>
                <button
                  className="SubmitButton"
                  type="submit"
                  style={{
                    marginTop: "5px",
                    textAlign: "center",
                    padding: "10px 10px ",
                  }}
                >
                  Edit Profile
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
