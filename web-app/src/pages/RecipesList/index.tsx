import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../../services/api";

import Button from "../../components/Button";
import PageContainer from "../../components/PageContainer";

import AccessTimeIcon from "@mui/icons-material/AccessTime";
import PersonIcon from "@mui/icons-material/Person";

import Recipe from "../../assets/images/recipe.jpeg";

import "./styles.css";

interface RecipeProps {
  portions: number;
  title: string;
  id: string;
  timing: {
    cooking: number;
  };
}

const RecipesList = () => {
  const [recipeList, setRecipeList] = useState<RecipeProps[]>([]);

  useEffect(() => {
    api.get("recipe").then((res) => setRecipeList(res.data.data));
  }, []);

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
            <div className="card-container" key={recipe.id}>
              <img src={Recipe} alt="Recipe" />
              <span>
                <PersonIcon />
                {recipe.portions}
              </span>
              <span>
                <AccessTimeIcon />
                {recipe.timing.cooking + "min."}
              </span>
              <h3 className="card-title">{recipe.title}</h3>
            </div>
          ))}
        </div>
      </PageContainer>
    </>
  );
};

export default RecipesList;
