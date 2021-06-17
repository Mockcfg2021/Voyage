import React, { useState } from "react";
import "./common.css";
import validate from "./validate";

export function LoginForm(props) {
  const { switchToSignup } = props;
  const [values, setValues] = useState({
    email: "",
    password: "",
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
    <div className="AuthBoxContainer">
      <form className="FormContainer" onSubmit={handleSubmit}>
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
            required
            name="password"
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
        <button
          className="SubmitButton"
          type="submit"
          style={{ marginTop: "10px" }}
        >
          Signin
        </button>
      </form>
      <a className="MutedLink" href="#" style={{ marginTop: "5px" }}>
        Forget your password?
      </a>
      <a className="MutedLink" href="#">
        Don't have an accoun?{" "}
        <span className="BoldLink" href="#" onClick={switchToSignup}>
          Signup
        </span>
      </a>
    </div>
  );
}
