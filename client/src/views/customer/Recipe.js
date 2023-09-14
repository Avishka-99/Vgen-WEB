import Modal from './Modal';
import CreatePostForm from './createPostForm';
import axios from 'axios';
import * as API_ENDPOINTS from '../../api/ApiEndpoints';
import React, { useState, useEffect } from 'react';
import "../../styles/Feed.css";
import {useNavigate} from 'react-router-dom';

const Recipe = () => {
const navigate = useNavigate();
const navigateTo = (page) => {
	
    navigate('/' + page);

};
  return (
    <div>
      <h1>Recipe</h1>
      <button 
      onClick={()=>{
      navigateTo('recipeForm');
      }}>
        Add Recipe
      </button>
    </div>
  );
};

export default Recipe;