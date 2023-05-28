import React from "react";
import { useSelector } from "react-redux";

const UserProfile = () => {
  const userDetails = useSelector((state) => state.user.userDetails);
console.log("user details: " + JSON.stringify(userDetails));
  return (
    <div>
      <h2>User Profile</h2>
      <p>Email: {userDetails.email}</p>
      <p>Password: {userDetails.password}</p>
    </div>
  );
};

export default UserProfile;
