import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Cookies from "js-cookie";

const UserProfile = () => {
  const userDetails = useSelector((state) => state.user.userDetails);
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [editedDetails, setEditedDetails] = useState(userDetails);

  const handleInputChange = (e) => {
    setEditedDetails({
      ...editedDetails,
      [e.target.name]: e.target.value,
    });
  };

  const handleEditProfile = () => {
    setIsEditing(true);
  };

  const handleUpdateProfile = () => {
    dispatch({
      type: "EDIT_USER_DETAILS",
      payload: editedDetails,
    });
    setIsEditing(false);


    const userDataString = Cookies.get("usersData");
    if (userDataString) {
      const userData = JSON.parse(userDataString);
      const updatedUserData = userData.map((user) => {
        if (user.email === userDetails.email) {
          return {
            ...user,
            email: editedDetails.email,
            password: editedDetails.password,
          };
        }
        return user;
      });
      Cookies.set("usersData", JSON.stringify(updatedUserData), { expires: 2 });
    }
    alert("Profile Updated");
  };

  return (
    <div style={{ margin: "2rem" }}>
      <h2>User Profile</h2>
      {isEditing ? (
        <>
          <p>Email:</p>
          <input
            style={{
              width: "15rem",
              height: "2rem",
            }}
            type="email"
            name="email"
            value={editedDetails.email}
            onChange={handleInputChange}
          />
          <br />
          <p>Password:</p>
          <input
            style={{
              width: "15rem",
              height: "2rem",
            }}
            type="password"
            name="password"
            value={editedDetails.password}
            onChange={handleInputChange}
          />
          <button className="edit-btn" type="submit" onClick={handleUpdateProfile}>
            Update
          </button>
        </>
      ) : (
        <>
          <p>Email: {userDetails.email}</p>
          <p>Password: {userDetails.password}</p>
          <button  className="edit-btn" onClick={handleEditProfile}>
            Edit Profile
          </button>
        </>
      )}
    </div>
  );
};

export default UserProfile;
