import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Button from "../../components/Button";
import PageContainer from "../../components/PageContainer";

import Recipe from "../../assets/images/recipe.jpeg";

import "./styles.css";

interface RecipeProps {
  portions: number;
  title: string;
}

const RecipesList = () => {
  const [recipeList, setRecipeList] = useState<RecipeProps[]>([]);

  useEffect(() => {
    fetch("http://localhost:4000/recipe/")
      .then((response) => response.json())
      .then((res) => setRecipeList(res.data));
  }, [recipeList]);

  return (
    <>
      <PageContainer>
        <div className="recipes-list-header">
          <h1>Recipes</h1>
          <Button type="button">
            <Link to="/recipe/create">Create Recipe</Link>
          </Button>
        </div>

        <div className="recipes-list-wapper">
          {recipeList.map((recipe) => (
            <div className="card-container">
              <img src={Recipe} alt="Recipe" />
              <span>{recipe.portions}</span>
              <span>45min.</span>
              <h3 className="card-title">{recipe.title}</h3>
            </div>
          ))}
        </div>
      </PageContainer>
    </>
  );
};

export default RecipesList;
