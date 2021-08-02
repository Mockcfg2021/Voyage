import React, { useState } from "react";
import "./common.css";
import validate from "./validate";
import { Link, useHistory } from "react-router-dom";
import swal from "@sweetalert/with-react";
import axios from "axios";

export function LoginForm(props) {
  const { switchToSignup } = props;
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const [error, setError] = useState("");
  const [uid, setUid] = useState("");
  const history = useHistory();
  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
    setErrors({});
    setError("")
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors(validate(values));
    console.log(errors);
    if (!errors.email && !errors.password) {
      axios
        .post("http://localhost:5000/login", {
          email: values.email,
          password: values.password,
        })
        .then((res) => {
          console.log(res.data);
          setUid(res.data.uid);
          setError(res.data.err_msg);
          if (res.data.uid) {
            localStorage.setItem("userId", JSON.stringify(res.data.uid));
            localStorage.setItem("role", JSON.stringify(res.data.role));
            history.push("/resources");
          }
        }).catch((err)=>console.log(err));
    }
  };

  const handleForgotPassword = (e) => {
    
    swal(
      "",
      "Please check your mail and follow the link to reset your password.",
      "info"
    );
  };

  console.log(values);
  console.log(errors);
  return (
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
      <p
        className="MutedLink"
        onClick={handleForgotPassword}
        style={{ marginTop: "5px", marginBottom: "0px", cursor: "pointer" }}
      >
        Forget your password?
      </p>
      <Link to="/auth/signup" className="MutedLink">
        Don't have an accoun?{" "}
        <span className="BoldLink" onClick={switchToSignup}>
          Signup
        </span>
      </Link>
    </div>
  );
}
