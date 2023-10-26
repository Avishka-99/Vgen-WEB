import React, { useState } from 'react';
import Axios from '../../api/Axios';
import * as API_ENDPOINTS from '../../api/ApiEndpoints';
import '../../styles/communityform.css'
const CommunityOrganizerForm = () => {
  const [organizerName, setOrganizerName] = useState('');
  const [nicNumber, setNicNumber] = useState('');
  const [regNumber, setRegNumber] = useState('');
  const [profilePicture, setProfilePicture] = useState(null);
  const [description, setDescription] = useState('');
  const userId=localStorage.getItem('userId');


  const handleOrganizerNameChange = (e) => {
    setOrganizerName(e.target.value);
  };
  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleNicNumberChange = (e) => {
    setNicNumber(e.target.value);
  };

  const handleRegNumberChange = (e) => {
    setRegNumber(e.target.value);
  };

  const handleProfilePictureChange = (e) => {
    // Assuming you want to handle a single profile picture upload
    const file = e.target.files[0];
    setProfilePicture(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('organizeName', organizerName);
    formData.append('description', description);
    formData.append('profilePicture', profilePicture);
    formData.append('userId', userId);
    console.log(formData);
    Axios.post('http://localhost:5001/api/registerCommunityOrganizer', formData)
      .then((res) => {
        console.log(res);
        alert('Community Organizer Successfully Registered');
      })
      .catch((err) => {
        console.log(err);
        alert('Community Organizer Registration Failed');
      }
      );
      
    
  };

  return (
    <div className="commynuty-create-form">
        <h1>Community Organizer Form</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Organizer Name:
          <input type="text" value={organizerName} onChange={handleOrganizerNameChange} required />
        </label>
        <br />
        <label>
          Why do you want to be a community organizer:
          <input type="text" value={description} onChange={handleDescriptionChange} required />
        </label>
        <br />
        <label>
          Profile Picture:
          <input type="file" accept="image/*" onChange={handleProfilePictureChange} />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CommunityOrganizerForm;

