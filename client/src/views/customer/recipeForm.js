import Modal from './Modal';
import React, { Component } from 'react';
import "../../styles/recipe.css";
import { useState } from 'react';

class recipeForm extends Component {
 cons  

  handleInputChange = (event) => {
    const { name, value, type, checked, files } = event.target;
    const inputValue = type === 'checkbox' ? checked : type === 'file' ? files[0] : value;

    this.setState({
      [name]: inputValue,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    
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
