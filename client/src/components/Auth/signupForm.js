import React, { useState } from "react";
import validate from "./validate";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";

function SignupForm(props) {
  const { switchToSignin } = props;
  const [error, setError] = useState("");
  const [uid, setUid] = useState("");
  const history = useHistory();
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
    setError("");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors(validate(values));
    console.log(errors);
    if (
      !errors.email &&
      !errors.password &&
      !errors.confirmPassword &&
      !errors.number &&
      !errors.userName
    ) {
      axios
        .post("http://localhost:5000/register", {
          userName: values.userName,
          number: values.number,
          email: values.email,
          password: values.password,
          confirmPassword: values.confirmPassword,
        })
        .then((res) => {
          console.log(res.data.err_msg);
          setUid(res.data.uid);
          setError(res.data.err_msg);
          if (res.data.uid) {
            localStorage.setItem("userId", JSON.stringify(res.data.uid));
            history.push("/");
          }
        })
        .catch((error) => console.log(error));
    }
  };

  //console.log(values);
  //console.log(errors);
  return (
    <>
      <div className="AuthBoxContainer">
        {error && (
          <p
            style={{
              color: "red",
              fontSize: "12px",
              marginTop: "-15px",
              marginBottom: "2px",
            }}
          >
            {error}
          </p>
        )}
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
        <Link to="/auth/signin" className="MutedLink">
          Already have an account?
          <span className="BoldLink" onClick={switchToSignin}>
            Signin
          </span>
        </Link>
      </div>
    </>
  );
}

export default SignupForm;
