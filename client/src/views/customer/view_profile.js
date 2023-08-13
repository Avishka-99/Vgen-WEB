import React, { useState, useEffect } from "react";
import axios from "axios";


    
    function UserProfile() {
      const [firstName, setFirstName] = useState("");
      const [lastName, setLastName] = useState("");
      const [nic, setNIC] = useState("");
      const [email, setEmail] = useState("");
      const userId = localStorage.getItem("userId");
    
      useEffect(() => {
        // Fetch user profile data from the backend API
        const fetchUserProfile = async () => {
          try {
            const response = await axios.get(`http://localhost:5001/api/getProfile/${userId}`);
            const data = response.data;
            console.log(data);
            setFirstName(data.firstName);
            setLastName(data.lastName);
            setNIC(data.nic);
            setEmail(data.email);
          } catch (error) {
            console.error("Error fetching user profile:", error);
          }
        };
    
        fetchUserProfile();
      }, [userId]); // Include userId in the dependency array to re-fetch when it changes
    
      return (
        <div className="profile">
          <h2>User Profile</h2>
          <div>
            <label>First Name:</label>
            <input type="text"  value={firstName} readOnly />
            <label>Last Name:</label>
            <input type="text"  value={lastName} readOnly />
            <label>NIC:</label>
            <input type="text"  value={nic} readOnly />
            <label>Email:</label>
            <input type="text"  value={email} readOnly />
            

          </div>
        </div>
      );
    }
    
    export default UserProfile;
    


    

  
