import React from "react";
import { Link } from "react-router-dom";
import Button from "../../components/Button";
import PageContainer from "../../components/PageContainer";
import RecipeCard from "../../components/RecipeCard";

import "./styles.css";

const RecipesList = () => {
  return (
    <>
      <PageContainer>
        <div className="recipes-list-header">
          <h1>Recipes</h1>
          <Button type="button">
            <Link to="/recipe/create">Create Recipe</Link>
          </Button>
        </div>
        <div className="recipes-list">
          <RecipeCard />
          <RecipeCard />
          <RecipeCard />
          <RecipeCard />
        </div>
      </PageContainer>
    </>
  );
};

export default RecipesList;
