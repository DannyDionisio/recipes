import React from "react";
import { api } from "../../services/api";

import "./styles.css";

import Button from "../../components/Button";
import PageContainer from "../../components/PageContainer";
import RecipeCard from "../../components/RecipeCard";

/*
type Recipe = {
  id: string;
  image: string;
  portions: number;
  totalTime: number;
};
*/

const RecipesList = () => {
  return (
    <PageContainer>
      <div className="recipesListWrapper">
        <header>
          <h1>Recipes</h1>
          <Button>Create Recipe</Button>
        </header>

        <div className="recipesList">
          <RecipeCard />
        </div>
      </div>
    </PageContainer>
  );
};

export default RecipesList;
