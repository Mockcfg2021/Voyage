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
    role: "",
    school: "",
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
      !errors.userName &&
      !errors.school &&
      !errors.role
    ) {
      axios
        .post("http://localhost:5000/register", {
          userName: values.userName,
          number: values.number,
          email: values.email,
          password: values.password,
          confirmPassword: values.confirmPassword,
          role:values.role,
          school:values.school
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
        })
        .catch((error) => console.log(error));
    }
  };

  console.log(values);
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
          <div className="dropdown" style={{ marginTop: "0px" }}>
            <select
              className=" Input category-btn"
              id="categoryList"
              style={{ color: "rgba(200, 200, 200, 1)" }}
              onChange={handleChange}
              value={values.role}
              name="role"
            >
              <option value="" selected disabled hidden  >
                Your role
              </option>
              <option value="Teacher" >Teacher</option>
              <option value="Leader" >Leader</option>
              <option value="NGO">NGO</option>
            </select>
          </div>
          {values.role !== "NGO" && values.role!=="" ? (
            <div className="form-label-group">
              <input
                className="Input"
                type="text"
                id="school"
                placeholder="School"
                name="school"
                required
                onChange={handleChange}
              />
              {errors.school ? (
                <label htmlFor="school" style={{ color: "red" }}>
                  {errors.school}
                </label>
              ) : (
                <label htmlFor="school">School Name</label>
              )}
            </div>
          ) : null}
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
