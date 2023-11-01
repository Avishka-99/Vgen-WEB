import React, { useState, useEffect } from 'react';
import Axios from '../../api/Axios';
import * as API_ENDPOINTS from '../../api/ApiEndpoints';
import '../../styles/communityform.css';


const CommunityView = () => {
  const [posts, setPosts] = useState([]);
  const [newComment, setNewComment] = useState('');
  const [comments, setComments] = useState([]);
  const [reactions, setReactions] = useState({});
  const [showForm1,setShowForm1]=useState(false);
  const [title, setTitle] = useState('');
  const [description1, setDescription1] = useState('');
  const [image,setImage]=useState([]);
  const [imagePreviews,setImagePreviews]=useState([]);
  const communityId=localStorage.getItem('communityId');
const [like,setLike]=useState(0);
const [isLike,setIsLike]=useState(false);
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
  const onLikeButton=(postId)=>{
   Axios.post('http://localhost:5001/api/likedPost',{
      userId:userId,
      postId:postId,
      like:!isLike
    })
    .then((response) => {
     const updatedLike=posts.map((post)=>{
       if(post.postId===postId){
         return{
           ...post,
            isLike:!post.isLike,
           likeCount:response.data.likeCount
         }
         }
         return post;
        });
        setPosts(updatedLike);
        setIsLike(!isLike);

    }).catch((error) => {
      console.log(error);
    });
  }
  const commentSubmit=(postId)=>{
    Axios.post('http://localhost:5001/api//commentPost',{
      userId:userId,
      postId:postId,
      comment:newComment
    })
    .then((response) => {
       const updatedComment=posts.map((post)=>{
          if(post.postId===postId){
            return{
              ...post,
              comments:response.data
            }
          }
          return post;
        });
        setPosts(updatedComment);
        setNewComment('');
    })
    .catch((error) => {
      console.log(error);
    });
  }
  useEffect(() => {
    const fetchComments = async (postId) => {
      try {
        const res = await Axios.get(`http://localhost:5001/api/getComment/${postId}`);
        console.log(res.data.comments);
        setComments(res.data.comments);
      } catch (error) {
        console.error(error);
      }
    };

    const fetchReactions = async (postId) => {
      try {
        const res = await Axios.get(`http://localhost:5001/api/getLike/${postId}`);
        console.log(res.data);
        setLike(res.data);
        if (res.data !== null) {
          setIsLike(true);
        }
      } catch (error) {
        console.error(error);
      }
    };

    // Fetch comments and reactions for each post
    posts.forEach((post) => {
      fetchComments(post.postId);
      fetchReactions(post.postId);
    });
  }, [posts]);

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
                <div  className='comment-container'>
                {comments.map((comment, index) => (
                    <div  className="comment">
                        <p>{comment.comment}</p>
                    </div>
                ))}
                </div>
  
          <p>Reactions:</p>
          
          <i   
              className={isLike ? 'fa fa-heart' : 'fa fa-heart-o'}
              style={{
                fontSize: '20px',
                color: 'red',
                cursor: 'pointer',
              }}
              onClick={() => onLikeButton(post.postId)} // Pass postId to the like button click handler
            />
            <span>{post.likeCount}</span>
       
          <div className="comment-form">
            <input
              key={post.postId}

              type="text"
              placeholder="Add a comment..."
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
             
            />
            <button onClick={()=>commentSubmit(post.postId)}>Submit</button>
          </div>

        </div>
      ))
      )}

    </div>
    
  );
};

export default CommunityView;
