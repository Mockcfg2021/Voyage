import React, { useState } from "react";
import validate from "./validate";
function SignupForm(props) {
  const { switchToSignin } = props;
  const [values, setValues] = useState({
    userName: "",
    number: "",
    email: "",
    password: "",
    confirmPassword: "",
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
    <>
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
            />
            {errors.number ? (
              <label htmlFor="number" style={{ color: "red" }}>
                {errors.number}
              </label>
            ) : (
              <label htmlFor="number">Contact Number </label>
            )}
          </div>
          <div className="form-label-group">
            <input
              className="Input"
              type="email"
              placeholder="Email"
              id="email"
              name="email"
              required
              onChange={handleChange}
            />
            {errors.email ? (
              <label htmlFor="email" style={{ color: "red" }}>
                {errors.email}
              </label>
            ) : (
              <label htmlFor="email">Email address </label>
            )}
          </div>
          <div className="form-label-group">
            <input
              className="Input"
              type="password"
              id="password"
              placeholder="Password"
              name="password"
              required
              onChange={handleChange}
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
            style={{ marginTop: "5px" }}
          >
            Signup
          </button>
        </form>
        <a className="MutedLink" href="#">
          Already have an account?
          <span className="BoldLink" href="#" onClick={switchToSignin}>
            Signin
          </span>
        </a>
      </div>
    </>
  );
}

export default SignupForm;
