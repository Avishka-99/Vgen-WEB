import Modal from './Modal';
import axios from 'axios';
import * as API_ENDPOINTS from '../../api/ApiEndpoints';
import React, { useState, useEffect } from 'react';
import "../../styles/recipehome.css"; // Import the CSS file for styling
import { useNavigate } from 'react-router-dom';

const Recipe = () => {
  const navigate = useNavigate();

  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await axios.get('http://localhost:5001/api/getRecipe');
        const recipeData = response.data;
        setRecipes(recipeData);
      } catch (error) {
        console.error("Error fetching recipes:", error);
      }
    }
    fetchRecipes();
  }, []);

  const navigateTo = (page) => {
    navigate('/' + page);
  };

  return (
    <div className='recipe-container'>
      <h1>Recipes</h1>
      <button onClick={() => navigateTo('recipeForm')}>Add Recipe</button>
      <div className='recipe-cards'>
        {recipes.map((recipe) => (
          <div className='recipe-card' key={recipe._id}>
            <div className='recipe-card-info'>
              <h2>{recipe.recipeName}</h2>
              <p>Cuisine Type: {recipe.cuisineType}</p>
              <p>Category: {recipe.categoryType}</p>
              <p>Vegan: {recipe.veganCategory}</p>
              <p>Ingredients: {recipe.ingredients}</p>
              <p>Instructions: {recipe.instructions}</p>
              <p>Serving Size: {recipe.servingSize}</p>
              <p>Preparation Time: {recipe.preparationTime}</p>
            </div>
            <div className='recipe-card-image'>
              <img src={`http://localhost:5001/uploads/recipes/${recipe.recipeImage}`} alt='recipe' />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Recipe;

