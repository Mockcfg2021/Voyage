import React, { useState } from "react";
import validate from "./validate";
import background_image from "../../assets/auth_background.png";
import "./index.css";
import swal from '@sweetalert/with-react';
import { useHistory } from "react-router";
import axios from "axios";


export default function ForgotPassword() {
  const [values, setValues] = useState({
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({});
  const history =  useHistory();
  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
    setErrors({});
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors(validate(values));
    console.log(errors);
    if(!errors.password && !errors.confirmPassword){
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
        //   setUid(res.data.uid);
        //   setError(res.data.err_msg);
          if (res.data.uid) {
            localStorage.setItem("userId", JSON.stringify(res.data.uid));
            localStorage.setItem("role", JSON.stringify(res.data.role));
            history.push("/");
          }
        })
        .catch((error) => console.log(error));
        swal("","Your password has been resetted.","success").then(()=>{
            history.push("/auth/signin");
        })
    }
  };

  console.log(values);
  console.log(errors);
  return (
    <div>
      <div className="RootContainer">
        <div>
          <img src={background_image} alt="Human" width="400px" />
        </div>
        <div className="BoxContainer" style={{ minHeight: "480px" }}>
          <div className="TopContainer">
            <div className="BackDrop"></div>
            <div className="HeaderContainer">
              <h2 className="HeaderText">Change Your</h2>
              <h2 className="HeaderText">Password</h2>
            </div>
          </div>
          <div className="InnerContainer">
            <div className="AuthBoxContainer">
              <form className="FormContainer" onSubmit={handleSubmit}>
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
                    marginTop: "15px",
                    textAlign: "center",
                    padding: "10px 10px ",
                  }}
                >
                  Save Changes
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
