import Modal from './Modal';
import React, { Component } from 'react';
import "../../styles/recipe.css";
import { useState } from 'react';
import Axios from '../../api/Axios';  
import * as API_ENDPOINTS from '../../api/ApiEndpoints';
import {useNavigate} from 'react-router-dom';
class recipeForm extends Component {
  
userId = localStorage.getItem('userId');

  state = {
    recipeName: '',
    cuisine: 'italian',
    category: 'appetizer',
    veganCategory: 'breakfast',
    isVegan: false,
    ingredients: '',
    instructions: '',
    servingSize: '',
    preparationTime: '',
    image: null,
  };
  handleInputChange = (event) => {
    const { name, value, type, checked, files } = event.target;
    const inputValue = type === 'checkbox' ? checked : type === 'file' ? files[0] : value;
    
    this.setState({
      [name]: inputValue,
    });
  };



  handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('userId', this.userId);
    formData.append('recipeName', this.state.recipeName);
    formData.append('cuisine', this.state.cuisine);
    formData.append('category', this.state.category);
    formData.append('veganCategory', this.state.veganCategory);
    formData.append('isVegan', this.state.isVegan);
    formData.append('ingredients', this.state.ingredients);
    formData.append('instructions', this.state.instructions);
    formData.append('servingSize', this.state.servingSize);
    formData.append('preparationTime', this.state.preparationTime);
    formData.append('image', this.state.image);
    
    Axios.post("http://localhost:5001/api/recipeupload", formData)
    
      .then((res) => {
        console.log(res.data);
      
        alert('Recipe Added Successfully');
      }
      )
      .catch((err) => {
        console.log('Error in adding recipe:', err);
        alert('Something went wrong');
      }
      );
    
  };

  render() {
    return (
<div class="unique-recipe-form-container">
  <h1 class="unique-form-title">RecipeForm</h1>
  <form class="recipe-form" onSubmit={this.handleSubmit}>
    <label class="unique-form-label" htmlFor="recipeName">Recipe Name:</label>
    <input
      type="text"
      id="recipeName"
      name="recipeName"
      value={this.state.recipeName}
      onChange={this.handleInputChange}
      required
      class="unique-form-input"
    /><br /><br />

    <label htmlFor="cuisine" class="unique-form-label">Cuisine:</label>
    <select
      id="cuisine"
      name="cuisine"
      value={this.state.cuisine}
      onChange={this.handleInputChange}
      required
      class="unique-select"
    >
      <option value="italian">Italian</option>
      <option value="mexican">Mexican</option>
      <option value="indian">Indian</option>
   
    </select><br /><br />

    <label htmlFor="category" class="unique-form-label">Category:</label>
    <select
      id="category"
      name="category"
      value={this.state.category}
      onChange={this.handleInputChange}
      required
      class="unique-select"
    >
      <option value="appetizer">Appetizer</option>
      <option value="main_course">Main Course</option>
      <option value="dessert">Dessert</option>
      
    </select><br /><br />

    <label htmlFor="veganCategory" class="unique-form-label">Vegan Category:</label>
    <select
      id="veganCategory"
      name="veganCategory"
      value={this.state.veganCategory}
      onChange={this.handleInputChange}
      required
      class="unique-select"
    >
      <option value="breakfast">Breakfast</option>
      <option value="lunch">Lunch</option>
      <option value="dinner">Dinner</option>
      
    </select><br /><br />

    <label htmlFor="isVegan" class="unique-form-label">100% Vegan:</label>
    <input
      type="checkbox"
      id="isVegan"
      name="isVegan"
      checked={this.state.isVegan}
      onChange={this.handleInputChange}
      class="unique-checkbox"
    /><br /><br />

    <label htmlFor="ingredients" class="unique-form-label">Ingredients:</label>
    <textarea
      id="ingredients"
      name="ingredients"
      value={this.state.ingredients}
      onChange={this.handleInputChange}
      required
      class="unique-textarea"
    /><br /><br />

    <label htmlFor="instructions" class="unique-form-label">Instructions:</label>
    <textarea
      id="instructions"
      name="instructions"
      value={this.state.instructions}
      onChange={this.handleInputChange}
      required
      class="unique-textarea"
    /><br /><br />

    <label htmlFor="servingSize" class="unique-form-label">Serving Size:</label>
    <input
      type="text"
      id="servingSize"
      name="servingSize"
      value={this.state.servingSize}
      onChange={this.handleInputChange}
      class="unique-form-input"
    /><br /><br />

    <label htmlFor="preparationTime" class="unique-form-label">Preparation Time:</label>
    <input
      type="text"
      id="preparationTime"
      name="preparationTime"
      value={this.state.preparationTime}
      onChange={this.handleInputChange}
      class="unique-form-input"
    /><br /><br />

    <label htmlFor="image" class="unique-form-label">Image Upload:</label>
    <input
      type="file"
      id="image"
      name="image"
      onChange={this.handleInputChange}
      class="unique-form-input"
    /><br /><br />

    <button type="submit" class="unique-submit-button">Submit</button>
  </form>
</div>

    );
  }
}

export default recipeForm;
