import React, { useState } from 'react';
import "../../styles/CreatePostForm.css";
import Axios from '../../api/Axios';
import * as API_ENDPOINTS from '../../api/ApiEndpoints'


const CreatePostForm = ({ onClose, onPostCreate }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');
  const user_id=localStorage.getItem('userId');
  const [feedImage,setFeedImage]=useState();

  const handleSubmit = (e) => {
  const formData=new FormData();
    formData.append('userId',user_id);
    formData.append('feedImage',feedImage);

    formData.append('feedName',title);
    formData.append('description',description);
    Axios.post(API_ENDPOINTS.createPost_URL,formData)


    
  };
  const handleFiles=(e)=>{
    setFeedImage(e.target.files[0]);

  }

  return (
    <div className="create-post-form">
      <h2>Create a New Post</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        {/* add image */}
        <input  
            type="file"
            placeholder="Image"
            onChange={handleFiles}
        />
        <button type="submit">Create Post</button>
      </form>
    </div>
  );
};

export default CreatePostForm;
