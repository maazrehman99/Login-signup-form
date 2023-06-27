import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Cookies from "js-cookie";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const users = useSelector((state) => state.users);
const storedUserDetails = useSelector((state) => state.user.userDetails);
 const handleLogin = (event) => {
   event.preventDefault();


   if (
     storedUserDetails &&
     storedUserDetails.email === email &&
     storedUserDetails.password === password
   ) {
     dispatch({ type: "SET_LOGIN_STATUS", payload: true });
     dispatch({ type: "SET_USER_DETAILS", payload: storedUserDetails });
     Cookies.set("userDetails", JSON.stringify(storedUserDetails), {
       expires: 2,
     });
     navigate("/profile");
     alert("Login Successful");
     return;
   }


   const storedUserDetailsFromCookies = Cookies.get("userDetails");
   if (storedUserDetailsFromCookies) {
     const parsedUserDetails = JSON.parse(storedUserDetailsFromCookies);
     if (
       parsedUserDetails.email === email &&
       parsedUserDetails.password === password
     ) {
       dispatch({ type: "SET_LOGIN_STATUS", payload: true });
       dispatch({ type: "SET_USER_DETAILS", payload: parsedUserDetails });
       navigate("/profile");
       alert("Login Successful");
       return;
     }
   }

   alert("Invalid email or password. Please try again.");
 };

  return (
    <>
      <div className="container">
        <div className="wrapper">
          <div className="title">
            <span>Login Form</span>
          </div>
          <form onSubmit={handleLogin}>
            <div className="row">
              <i className="fas fa-user"></i>
              <input
                type="email"
                placeholder="xyz@email.com"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="row">
              <i className="fas fa-lock"></i>
              <input
                type="password"
                placeholder="Your Password Here"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="pass">Forgot password?</div>
            <div className="row button">
              <button className="btn-login" type="submit">
                Login
              </button>
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
