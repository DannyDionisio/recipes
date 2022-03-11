import React from "react";
import { Link } from "react-router-dom";
import Button from "../../components/Button";
import PageContainer from "../../components/PageContainer";
import RecipeTile from "../../components/RecipeTile";

import "./styles.css";

const RecipesList = () => {
  return (
    <div>
      <PageContainer>
        <div className="recipes-list-header">
          <h1>Recipes</h1>
          <Button type="button">
            <Link to="/recipe/create">Create Recipe</Link>
          </Button>
        </div>
        <RecipeTile />
      </PageContainer>
    </div>
  );
};

export default RecipesList;
