import React,{useState} from "react";
import "./Login.css";
import {useSelector,useDispatch} from "react-redux"
import { Link, useNavigate } from "react-router-dom";
import {setUser} from "../../Redux/UserReducer/actions"

const Login = () => {
  
  const [logindata, setLoginData] = useState({});
  
  const dispatch = useDispatch();

 
  const navigate = useNavigate();

  const handleLogin = () => {

    fetch("http://localhost:8080/user/login", {
      method: "POST",
      body: JSON.stringify(logindata),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.message == undefined) {
          dispatch(setUser(res));
          navigate("/");
        } else {
          alert(res.message);
        }
      });
  } 

  const handleInputChange = (e) => {
      setLoginData({ ...logindata, [e.target.name]: e.target.value });
  }

    return (
      <div className="login__wrapper">
        <input
          className="input__element login__input"
          placeholder="Enter email"
          name="email"
          onChange={(e)=>handleInputChange(e)}
        />
        <input
          className="input__element login__input"
          placeholder="Enter Password"
          name="password"
          type="password"
          onChange={(e)=>handleInputChange(e)}
        />
        <button className="btn__element" onClick={() => handleLogin()}>
          LOGIN
        </button>
        <Link to="/register">New to Get_IT-Job ? Register here..!</Link>
      </div>
    );
}

export default Login