import React, { useState, useEffect } from "react";
import axios from "axios";
import "../../styles/UserProfile.css"; // Import the CSS file for styling

function UserProfile() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [nic, setNIC] = useState("");
  const [email, setEmail] = useState("");
  const [profileImage, setProfileImage] = useState("");
  const [isEditing, setIsEditing] = useState(false); // State to track editing mode

  const userId = localStorage.getItem("userId");

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const response = await axios.get(`http://localhost:5001/api/getProfile`, {
          params: {
            userId,
          },
        });
        const userData = response.data;
        setFirstName(userData.firstName);
        setLastName(userData.lastName);
        setNIC(userData.nic);
        setEmail(userData.email);
        setProfileImage(userData.profileImage); // Assuming the response contains a profile image URL
      } catch (error) {
        console.error("Error fetching user profile:", error);
      }
    };

    if (userId) {
      fetchUserProfile();
    }
  }, [userId]);

  const handleEditClick = () => {
    setIsEditing(!isEditing);
  };

  const handleImageChange = (e) => {
    setProfileImage(e.target.value);
  };

  const handleSaveClick = async () => {
    // Send updated data to the server and handle the save logic here
    try {
      // Make a PUT request to update the user profile with new data
      await axios.put(`http://localhost:5001/api/updateProfile`, {
        userId,
        firstName,
        lastName,
        nic,
        email,
        profileImage,
      });
      // Optionally, you can update the local state or show a success message to the user
    } catch (error) {
      console.error("Error updating user profile:", error);
    }
    setIsEditing(false);
  };

  return (
    <div className="profile">
      <h2>User Profile</h2>
      <div className="profile-info">
        <div className="profile-field">
          <label>First Name:</label>
          {isEditing ? (
            <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
          ) : (
            <span>{firstName}</span>
          )}
        </div>
        <div className="profile-field">
          <label>Last Name:</label>
          {isEditing ? (
            <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} />
          ) : (
            <span>{lastName}</span>
          )}
        </div>
        <div className="profile-field">
          <label>NIC:</label>
          {isEditing ? (
            <input type="text" value={nic} onChange={(e) => setNIC(e.target.value)} />
          ) : (
            <span>{nic}</span>
          )}
        </div>
        <div className="profile-field">
          <label>Email:</label>
          {isEditing ? (
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          ) : (
            <span>{email}</span>
          )}
        </div>
        <div className="profile-field">
          <label>Profile Image URL:</label>
          {isEditing ? (
            <input type="text" value={profileImage} onChange={handleImageChange} />
          ) : (
            <span>{profileImage}</span>
          )}
        </div>
        {isEditing ? (
          <button onClick={handleSaveClick}>Save</button>
        ) : (
          <button onClick={handleEditClick}>Edit</button>
        )}
      </div>
    </div>
  );
}

export default UserProfile;



    

  
