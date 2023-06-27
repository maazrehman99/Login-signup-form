import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import Cookies from "js-cookie";

const Signup = () => {
  const navigate = useNavigate();
  const users = [
    {
      email: "1",
      password: "1",
    },
  ];

  const dispatch = useDispatch();

  useEffect(() => {
    const userDataString = Cookies.get("usersData");
    if (userDataString) {
      const userData = JSON.parse(userDataString);
      dispatch({ type: "SET_USER_DETAILS", payload: userData });
    }
  }, [dispatch]);

   const handleSignup = (event) => {
     event.preventDefault();
     const email = document.getElementById("email").value;
     const password = document.getElementById("password").value;


     const userDetails = { email, password };
     dispatch({ type: "SET_USER_DETAILS", payload: userDetails });


     Cookies.set("userDetails", JSON.stringify(userDetails), { expires: 2 });

     navigate("/profile");
     alert("Signup Successful");
   };

  return (
    <>
      <div className="container">
        <div className="wrapper">
          <div className="title">
            <span>Sign up Form</span>
          </div>
          <form onSubmit={handleSignup}>
            <div className="row">
              <i className="fas fa-user"></i>
              <input
                id="email"
                type="text"
                placeholder="xyz@email.com"
                required
              />
            </div>
            <div className="row">
              <i className="fas fa-lock"></i>
              <input id="password" type="password" placeholder="Your Password Here" />
            </div>

            <div className="row button">
              <button className="btn-login" type="submit">
                Signup
              </button>
            </div>
            <div className="signup-link">
              Already a member? <Link to="/login">Login Now</Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Signup;
