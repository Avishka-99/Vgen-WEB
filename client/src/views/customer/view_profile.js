import React, { useState, useEffect } from "react";
import axios from "axios";

function UserProfile() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [nic, setNIC] = useState("");
  const [email, setEmail] = useState("");
  const userId = localStorage.getItem("userId");

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const response = await axios.get(`http://localhost:5001/api/getProfile/${userId}`);
        const userData = response.data[0]; // Assuming the response is an array with a single user object
        console.log(userData);
        setFirstName(userData.firstName);
        setLastName(userData.lastName);
        setNIC(userData.nic);
        setEmail(userData.email);
      } catch (error) {
        console.error("Error fetching user profile:", error);
      }
    };

    if (userId) {
      fetchUserProfile();
    }
  }, [userId]);

  return (
    <div className="profile">
      <h2>User Profile</h2>
      <div>
        <label>First Name:</label>
        <input type="text" value={firstName} readOnly />
        <label>Last Name:</label>
        <input type="text" value={lastName} readOnly />
        <label>NIC:</label>
        <input type="text" value={nic} readOnly />
        <label>Email:</label>
        <input type="text" value={email} readOnly />
      </div>
    </div>
  );
}

export default UserProfile;



    

  
