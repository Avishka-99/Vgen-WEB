
import Modal from './Modal'; // You'll need to create the Modal component
import CreatePostForm from './createPostForm'; // You'll need to create the CreatePostForm component
import axios from 'axios'; // Import Axios
import * as API_ENDPOINTS from '../../api/ApiEndpoints';
import React,{useState,useEffect} from 'react';
import "../../styles/Feed.css";
const Feed = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [posts, setPosts] = useState([]);
  const [selectedPost, setSelectedPost] = useState(null);
  const [isLoading, setIsLoading] = useState(true); // Add loading state
  const userId = localStorage.getItem('userId');
  const fetchUserData = async () => {
    try {
      const res = await axios.get(`http://localhost:5001/api/getUser/${userId}`);

      return res.data;
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };
  const fetchData = async () => {
    try {
      const res = await axios.get("http://localhost:5001/api/getFeed");
      const postWithUserData = await Promise.all(
        res.data.map(async (post) => {
          const userData = await fetchUserData(post.userId);
          return {
            ...post,
            userData,
          };
        })
      );
      console.log(postWithUserData);
      setPosts(postWithUserData);
      setIsLoading(false); // Update loading state
    } catch (err) {
      console.log("Error fetching data:", err);
      setIsLoading(false); // Update loading state
    }
  };
  useEffect(() => {
    fetchData();

  },[]);

  const handleOpenModal = () => {

    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedPost(null);

  };

  const handleCreatePost = async (newPost) => {
    try {
      const response = await axios.post(API_ENDPOINTS.createPost_URL, newPost);
      setPosts([...posts, response.data]);
      handleCloseModal();
    } catch (error) {
      console.error('Error creating post:', error);
    }
  };

  const handleDeletePost = async (postToDelete) => {
    if (postToDelete.userId === userId) {
      try {
        await axios.delete(`${API_ENDPOINTS.deletePost_URL}/${postToDelete.id}`);
        const updatedPosts = posts.filter((post) => post.id !== postToDelete.id);
        setPosts(updatedPosts);
        handleCloseModal();
      } catch (error) {
        console.error('Error deleting post:', error);
      }
    } else {
      console.warn('You are not authorized to delete this post.');
    }
  };

  const handleViewPost = (post) => {
    setSelectedPost(post);
    handleOpenModal();
  };

  return (
    <div>
    <h1>Feed</h1>
    <button onClick={handleOpenModal}>Create Post</button>


    {isLoading ? (
      <p>Loading...</p> // Display a loading indicator
    ) : posts.length === 0 ? (
      <p>No posts available.</p> // Display a message for empty feed
    ) : (
      posts.map((post, index) => (
        
        <div key={index} className="post-preview" onClick={() => handleViewPost(post)}>
        <div className="post-details">
          <h3>{post.feedName}</h3>
          <p>{post.description}</p>
          <p>By: {post.userData.firstName}</p>
          
         </div>

          <img className='post-image' src={`http://localhost:5001/uploads/feed/${post.feedImage}`} alt={post.feedName} />
          {post.userId === userId && (
            <div>
              <button onClick={() => handleDeletePost(post)}>Delete</button>
            </div>
          )}
        </div>
      ))
    )}

    {isModalOpen  && (
        <Modal onClose={handleCloseModal}>
          {selectedPost ? (
            <div className="modal-content">
              <h2>{selectedPost.feedName}</h2>
              <p>{selectedPost.description}</p>
              <p>By: {selectedPost.userData.firstName}</p>
              <img
                className="product--image1"
                src={`http://localhost:5001/uploads/feed/${selectedPost.feedImage}`}
                alt={selectedPost.feedName}
              />
            </div>
          ) : (
            <CreatePostForm
              onPostCreate={handleCreatePost}
              onClose={handleCloseModal} 
            />
          )}
        </Modal>
      )}
  </div>
  );
};

export default Feed;
