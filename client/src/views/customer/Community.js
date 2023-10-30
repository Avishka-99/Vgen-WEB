import React from 'react'
import '../../styles/Community.css'
import { useState } from 'react';
import Axios from '../../api/Axios';
import { Button } from 'bootstrap';
import { useNavigate } from 'react-router-dom';

export default function Community() {
  const navigate = useNavigate();
  const [showForm, setShowForm] = useState(false);
  const navigateTo = (page) => {
    navigate('/' + page);
  };
  const groups = [
    { id: 1, name: 'group1', description: 'description1', members: 10 },
    { id: 2, name: 'group2', description: 'description2', members: 20 },
    { id: 3, name: 'group3', description: 'description3', members: 30 },
    { id: 4, name: 'group4', description: 'description4', members: 40 },
    { id: 5, name: 'group5', description: 'description5', members: 50 },
    { id: 6, name: 'group6', description: 'description6', members: 60 },
  ];
  const handleRequestClick = () => {
    setShowForm(true);
  };
  const [organizeName, setOrganizeName] = useState('');
 
  const [description, setDescription] = useState('');
  const userId=localStorage.getItem('userId');


  const handleOrganizerNameChange = (e) => {
    setOrganizeName(e.target.value);
  };
  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };



  const handleSubmit = (e) => {
    e.preventDefault();
    const organizerData = {
      description: description,
      userId: userId,
    };

    Axios.post("http://localhost:5001/api/registerCommunityOrganizer", organizerData, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => {
        console.log(response);
        window.location.reload();
      })
      .catch((error) => {
        console.log(error);
      });
   
      
    
  };
  return (
    <div>
      <p>Join for life</p>
      <div>
        <p>Request for Community Organizer</p>
        <button onClick={handleRequestClick}>Request</button>

      </div>
      {showForm &&(
      <div className="commynuty-create-form">
        <h1>Community Organizer Form</h1>
   
      
        <label>
          Why do you want to be a community organizer:
          <input type="text" value={description} onChange={handleDescriptionChange} required />
        </label>
        <br />
        <button onClick={handleSubmit} type="submit">Submit</button>
      
    </div>
      )}
      <div className="groups-container">

        {groups.map((group) => (
          <div key={group.id} className='group-card'>
            <div className='group-card__image'></div>
            <div className='group-card__content'>
              <h3 className='group-card__title'>{group.name}</h3>
              <p className='group-card__description'>{group.description}</p>
              <p className='group-card__members'>{`Members: ${group.members}`}</p>
              <button className='group-card__button'>Join</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
  
}
