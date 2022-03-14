import React from "react";

import "./styles.css";

import Recipe from "../../assets/images/recipe.jpeg";

const RecipeCard = () => {
  return (
    <div className="card-container">
      <img src={Recipe} alt="Recipe" />
      <span>5</span>
      <span>45min.</span>
      <h3 className="card-title">Recipe Title</h3>
    </div>
  );
};

export default RecipeCard;
