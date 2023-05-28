import React, { useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

const Login = () => {
  const [login, setLogin] = useState(false);
  const dispatch = useDispatch();
  const navigate= useNavigate();

  const loginbtn = (event) => {
    event.preventDefault();

    const email = document.getElementById("loginEmail").value;
    const password = document.getElementById("loginPass").value;
    const logindata = localStorage.getItem("usersData");
    const parsedData = JSON.parse(logindata);

    const user = parsedData.find((user) => {
      return user.email === email && user.password === password;
    });

    if (user) {
      alert("Login Successful");
      dispatch({ type: "SET_LOGIN_STATUS", payload: true });
      navigate("/profile");
    } else {
      alert("Please Sign up");
    }
    setLogin(true);
  };

  return (
    <>
      <div className="container">
        <div className="wrapper">
          <div className="title">
            <span>Login Form</span>
          </div>
          <form action="#">
            <div className="row">
              <i className="fas fa-user"></i>
              <input
                id="loginEmail"
                type="text"
                placeholder="Email or Phone"
                required
              />
            </div>
            <div className="row">
              <i className="fas fa-lock"></i>
              <input id="loginPass" type="password" placeholder="Password" />
            </div>
            <div className="pass">Forgot password?</div>
            <div className="row button">
              <button onClick={loginbtn}>Login</button>
            </div>
            <div className="signup-link">
              Not a member? <Link to="/signup">Signup Now</Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
