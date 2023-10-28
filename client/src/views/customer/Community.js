
import React, { useEffect } from 'react'
import '../../styles/Community.css'
import { useState } from 'react';
import Axios from '../../api/Axios';
import { Button } from 'bootstrap';
import { useNavigate } from 'react-router-dom';
import communityView from './communityView';



export default function Community() {
  const navigate = useNavigate();
  const [showForm, setShowForm] = useState(false);
  const [image,setImage]=useState(false);
  const [description1,setDescription1]=useState('');
  const [showForm1,setShowForm1]=useState(false);
  const [group, setGroup] = useState([]);
  const [showJoinConfirm, setShowJoinConfirm] = useState(false);
  const[selectedGroup,setSelectedGroup]=useState(null);
  const [userJoined, setUserJoined] = useState([]);
  const [increseMember,setIncreaseMember]=useState(0);

  const navigateTo = (page) => {
    navigate('/' + page);
  };
  const navigateToCommunityView = (communityId) => {
    navigateTo('communityView');
    localStorage.setItem('communityId',communityId);

  }
  useEffect(() => {
  const groups =()=>{
    Axios.get("http://localhost:5001/api/getCommunity").then((response) => {
      console.log(response);
      setGroup(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
  }
  groups();
  }, []);

  const [organizeName, setOrganizeName] = useState('');
 
  const [description, setDescription] = useState('');
  const [isEligible, setIsEligible] = useState(false);
  const userId=localStorage.getItem('userId');
  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };
  useEffect(() => {
  const isregister=()=>{
    Axios.get("http://localhost:5001/api//checkCommunityOrganizer/"+userId).then((response) => {
      console.log(response);
    
    })
    .catch((error) => {
      console.log(error);
    });
  }


  if(!isregister){
    setIsEligible(true);
  }
  else{ 
    setIsEligible(false);
  }
  }, []);

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
  
    const handleImageChange=(e)=>{
      const file=e.target.files[0];
      setImage(file);
    }
    
  
  const handleRequestClick = () => {
    if(isEligible){
      setShowForm(true);
    }else{
      alert("You are already a community organizer");
    }
  };
  const handleCreateCommunity=()=>{
    const formData1=new FormData();
    formData1.append('communityName',organizeName);
    formData1.append('userId',userId);
    formData1.append('image',image);
    formData1.append('description',description1);

    Axios.post('http://localhost:5001/api/createCommunity/',formData1)
    .then((res)=>{
      console.log("succesfully",res);
      setShowForm(false);
      setOrganizeName('');
      setDescription1('');
      setImage(null);
    }).catch((error)=>{
      console.error('Error');
    })
  }
  const handleJoinConfirm=(communityId,noOfMembers)=>{
    const userId=localStorage.getItem('userId');
    
    const data={
      userId:userId,
      communityId:communityId,
      noOfMembers:noOfMembers+1,
    }
    Axios.post('http://localhost:5001/api/joinCommunity',data)
    .then((res)=>{
      console.log("succesfully",res);
      setShowJoinConfirm(false);
      setSelectedGroup(null);
    }).catch((error)=>{
      console.error('Error');
    })


  }
  const handleJoinCommunity=(group)=>{
    setShowJoinConfirm(true);
    setSelectedGroup(group);

  }
  const handleCancel=()=>{
    setShowJoinConfirm(false);
    setSelectedGroup(null);
  }
  useEffect(() => {
 const checkMember=()=>{
  const userId=localStorage.getItem('userId');
  

  
  Axios.get('http://localhost:5001/api/checkCommunity',{
    params:{
      userId:userId,
    }
  })
  .then((res)=>{
    console.log("succesfully",res);
    setUserJoined(res.data);
    console.log(res.data);
    return true;
  }).catch((error)=>{
    console.error('Error',error);
    return false;
  })

  }
  checkMember();
  }
  , []);
const check=(communityId)=>{
    
    for(let i=0;i<userJoined.length;i++){
      if(userJoined[i].communityId===communityId){
        
        return true;
      }
    }
    return false;
}


  return (
    <div>
      <p>Join for life</p>
      <div>
        <p>Request for Community Organizer</p>
        <button onClick={handleRequestClick}>Request</button>

      </div>
      <button onClick={()=>setShowForm1(true)}>
            Create Community
          </button>
      {showForm &&(
      <div className="community-create-form">
      <i className="close-icon" onClick={() => setShowForm(false)}>X</i>
        <h1>Community Organizer Form</h1>
   
      
        <label>
          Why do you want to be a community organizer:
          <input type="text" value={description} onChange={handleDescriptionChange} required />
        </label>
        <br />
        <button onClick={handleSubmit} type="submit">Submit</button>
     
    </div>
      )}
      
    
    
      <div>
      {
        showForm1 &&(
          <div className="community-create-form">
          <i className="close-icon" onClick={() => setShowForm1(false)}>X</i>
        <h1>Create Community</h1>
        <label>
          Organization Name:
          <input
            type="text"
            value={organizeName}
            onChange={(e) => setOrganizeName(e.target.value)}
            required
          />
        </label>
        <label>
          Description:
          <input
            type="text"
            value={description1}
            onChange={(e) => setDescription1(e.target.value)}
            required
          />
        </label>
        <label>
          Upload Image:
          <input type="file" onChange={handleImageChange} accept="image/*" />
        </label>
        {image && <img src={URL.createObjectURL(image)} alt="Preview" />}
        <button onClick={handleCreateCommunity}>Create</button>
        <button onClick={() => setShowForm(false)}>Cancel</button>
      </div>
        )
      }
      

      </div>
      <div className="groups-container">

        {group.map((group) => (
          <div key={group.communityId} className='group-card'>
          <img className='group-card__image' src={`http://localhost:5001/uploads/community/${group.image}`} alt='group' />
            <div className='group-card__content'>
              <h3 className='group-card__title'>{group.name}</h3>
              <p className='group-card__description'>{group.description}</p>
              <p className='group-card__members'>{`Members: ${group.noOfMembers}`}</p>
              {check(group.communityId)?(
             
              <button onClick={()=>navigateToCommunityView(group.communityId)}  className='group-card__button'>View</button>
         ):(
            <button onClick={()=>handleJoinCommunity(group)}  className='group-card__button'>Join</button>
          )  }
            </div>
          </div>
        ))}
      </div>
      {
        showJoinConfirm && selectedGroup &&(
          
          <div className="join-confirmation-popup">
          <p>Do you want to join this group?</p>
          
          <button onClick={()=>handleJoinConfirm(selectedGroup.communityId,selectedGroup.noOfMembers)}>Yes</button>
          <button onClick={handleCancel}>No</button>
        </div>
        )
      }

    </div>
  );
        
}
