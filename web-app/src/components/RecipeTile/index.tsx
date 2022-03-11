import React from "react";

import Recipe from "../../assets/images/recipe.jpeg";

const RecipeTile = () => {
  return (
    <div className="header">
      <img src={Recipe} alt="Recipe" />
      <h3>Recipe Title</h3>
    </div>
  );
};

export default RecipeTile;
