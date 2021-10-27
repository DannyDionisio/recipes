import React from "react";
import "./styles.css";

import Button from "../../components/Button";
import PageContainer from "../../components/PageContainer";

const RecipesList = () => {
  return (
    <PageContainer>
      <div className="contentRecipesWrapper">
        <h1>Recipes</h1>
        <Button>Create Recipe</Button>
      </div>
    </PageContainer>
  );
};

export default RecipesList;
