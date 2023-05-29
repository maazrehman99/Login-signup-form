import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
 
  const dispatch = useDispatch()
  const navigate = useNavigate()
  
  const login = useSelector((state) => state.user.isLoggedIn);
const logout = () => {
  dispatch({ type: "SET_LOGIN_STATUS", payload: false });
  navigate("/login");
};
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
            <button onClick={logout} >Logout</button>
          </li>
        ) : (
          <></>
        )}
      </ul>
    </>
  );
};

export default Navbar;
