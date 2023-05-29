import React from "react";
import { Link ,useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

const Signup = () => {
  const navigate = useNavigate();
  const users = [
    {
      email: "1",
      password: "1",
    },
  ];

  const dispatch = useDispatch();

  const signUP = (event) => {
    event.preventDefault();
    const userData = {
      email: document.getElementById("email").value,
      password: document.getElementById("password").value,
    };

    users.push(userData);
    const jsonString = JSON.stringify(users);
    localStorage.setItem("usersData", jsonString);
    dispatch({ type: "SET_LOGIN_STATUS", payload: true });
     dispatch({ type: "SET_USER_DETAILS", payload: userData });
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
          <form onSubmit={signUP}>
            <div className="row">
              <i className="fas fa-user"></i>
              <input
                id="email"
                type="text"
                placeholder="Email or Phone"
                required
              />
            </div>
            <div className="row">
              <i className="fas fa-lock"></i>
              <input id="password" type="password" placeholder="Password" />
            </div>

            <div className="row button">
              <button type="submit">Signup</button>
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
