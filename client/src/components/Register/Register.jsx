import React, { useState } from "react";

import "./Register.css";
import { useSelector, useDispatch } from "react-redux";
import { setUser } from "../../Redux/UserReducer/actions";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const [logindata, setLoginData] = useState({});

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleregister = () => {
    fetch("https://get-it-job.herokuapp.com/user/register", {
      method: "POST",
      body: JSON.stringify(logindata),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        console.log("res:", res);
        if (res.message == undefined) {
          dispatch(setUser(res));
          navigate("/");
        } else {
          alert(res.message);
        }
      });
  };

  const handleInputChange = (e) => {
    setLoginData({ ...logindata, [e.target.name]: e.target.value });
  };

  return (
    <div className="register__wrapper">
      <input
        className="input__element register__input"
        placeholder="Enter name"
        name="name"
        onChange={(e) => {
          handleInputChange(e);
        }}
      />
      <input
        className="input__element register__input"
        placeholder="Enter email"
        name="email"
        onChange={(e) => {
          handleInputChange(e);
        }}
      />
      <input
        className="input__element register__input"
        placeholder="Enter Password"
        name="password"
        type="password"
        onChange={(e) => {
          handleInputChange(e);
        }}
      />
      <button className="btn__element" onClick={() => handleregister()}>
        REGISTER
      </button>
      <Link to="/login">Already hvae an Account ? click here..! </Link>
    </div>
  );
};

export default Register;
