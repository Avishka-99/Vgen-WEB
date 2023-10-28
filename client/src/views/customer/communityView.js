import React, { useState, useEffect } from 'react';
import Axios from '../../api/Axios';
import * as API_ENDPOINTS from '../../api/ApiEndpoints';
import '../../styles/communityform.css';


const CommunityView = () => {
  const [posts, setPosts] = useState([]);
  const [newComment, setNewComment] = useState('');
  const [reactions, setReactions] = useState({});
  const [showForm1,setShowForm1]=useState(false);
  const [title, setTitle] = useState('');
  const [description1, setDescription1] = useState('');
  const [image,setImage]=useState([]);
  const [imagePreviews,setImagePreviews]=useState([]);
  const communityId=localStorage.getItem('communityId');

   // Assuming you track reactions for each post here
   const [isCreatePostPopupOpen, setIsCreatePostPopupOpen] = useState(false);

  useEffect(() => {
    // Fetch posts from the server when the component mounts
    const fetchData =async()=>{
try{
   const res= await Axios.get('http://localhost:5001/api/getFeed',{
          params: {
            communityId: communityId
          }
        }

   );
    console.log(res.data);
        setPosts(res.data);
      }
      catch(error) {
        console.error(error);
      }};
   fetchData();
  }, []);

  const handleReaction = (postId, reactionType) => {
    // Implement logic to handle post reactions, update reactions state accordingly
    // Example:
    // Axios.post(API_ENDPOINTS.REACT_TO_POST_ENDPOINT, { postId, reactionType })
    //   .then((response) => {
    //     setReactions({ ...reactions, [postId]: reactionType });
    //   })
    //   .catch((error) => {
    //     console.error(error);
    //   });
  };

  const handleCommentSubmit = (postId) => {
    // Implement logic to submit a new comment for the given post
    // Example:
    // Axios.post(API_ENDPOINTS.ADD_COMMENT_ENDPOINT, { postId, comment: newComment })
    //   .then((response) => {
    //     // Handle success, update the posts state to include the new comment
    //     // Fetch updated posts from the server if necessary
    //   })
    //   .catch((error) => {
    //     console.error(error);
    //   });
  };
  // Function to open the create post modal
  const handleImageChange = (e) => {
    setImage(e.target.files);

  };
  const userId=localStorage.getItem('userId');
  
  const handleCreatePost=()=>{
   const formData = new FormData();
   formData.append('communityId', communityId);
    formData.append('title', title);
    formData.append('description', description1);
    formData.append('userId',userId);
    for(let i=0;i<image.length;i++){
      formData.append('image',image[i]);
    }
    Axios.post('http://localhost:5001/api/createPost',formData)
      .then((response) => {
        console.log(response);
        window.location.reload();
      })
      .catch((error) => {
        console.log(error);
      });

  }

  return (
    <div className="community-view-container">
      <h1>Community View</h1>
      <button className="create-post-button" onClick={()=>setShowForm1(true)}>Create Post</button>
        
      <div>
      {
        showForm1 &&(
          <div className="community-create-form">
          <i className="close-icon" onClick={() => setShowForm1(false)}>X</i>
        <h1>Create New Post</h1>
        <label>
          Title:
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
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
        Images:
          <input type="file" onChange={handleImageChange} accept='image/*' multiple />
        </label>
        <button onClick={handleCreatePost}>Create</button>
       
      </div>
        )
      }
      

      </div>
      {posts.length === 0 ? ( <p>No posts found</p>):
      (
      posts.map((post) => (
        <div key={post.id} className="post-container">
        <h2 className="post-title">{post.title}</h2>
                <p className="post-description">{post.description}</p>
                <div className='post_image_container'>
                {post.images.map((image, index) => (
                    <div className="comment" key={index}>
                        <img className="post-image" src={`http://localhost:5001/uploads/feed/${image.images}`} alt="post" />
                    </div>
                ))}
                </div>
          {/* Display post reactions */}
          {/* <button onClick={() => handleReaction(post.id, 'like')}>Like</button>
          <button onClick={() => handleReaction(post.id, 'dislike')}>Dislike</button> */}
          {/* Display post reactions */}
          <p>Reactions:</p>
          {/* Display post comments */}
          {/* {post.comments.map((comment, index) => (
            <div key={index} className="comment">
              <p>{comment.text}</p>
            </div>
          ))} */}
          <div className="comment-form">
            <input
              type="text"
              placeholder="Add a comment..."
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
            />
            <button>Submit</button>
          </div>

        </div>
      ))
      )}

    </div>
    
  );
};

export default CommunityView;
