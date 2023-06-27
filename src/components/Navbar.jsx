import Cookies from "js-cookie";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
 
  const dispatch = useDispatch()
  const navigate = useNavigate()
  
  const login = useSelector((state) => state.user.isLoggedIn);




  const handleLogout = () => {

    Cookies.remove("loggedInUser");
    Cookies.remove("usersData");

 
    dispatch({ type: "SET_LOGIN_STATUS", payload: false });
    dispatch({ type: "SET_USER_DETAILS", payload: null });

    navigate("/login");
    alert("Logged out successfully");
  }
  return (
    <>
      <ul className="nav">
        <li>
          <Link to={login ? "/profile" : "/"}>
            {login ? "Profile" : "Login/Sign up"}
          </Link>
        </li>
        <li>
          <Link to={login ? "/contact" : "/"}>contact</Link>
        </li>
        <li>
          <Link to={login ? "/about" : "/"}>About</Link>
        </li>

        {login ? (
          <li>
            <button className="logout-btn" onClick={handleLogout}>
              Logout
            </button>
          </li>
        ) : (
          <></>
        )}
      </ul>
    </>
  );
};

export default Navbar;
