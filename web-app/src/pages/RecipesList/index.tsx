import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import {
  getRecipes,
  Recipe as RecipeType,
} from "../../redux/actions/recipesActions";

import Button from "../../components/Button";
import PageContainer from "../../components/PageContainer";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import PersonIcon from "@mui/icons-material/Person";

import Recipe from "../../assets/images/recipe.jpeg";

import "./styles.css";
import { ReducersState } from "../../redux/reducers";

const RecipesList = () => {
  const dispatch = useDispatch();
  const recipes = useSelector((state: ReducersState) => state.recipes.recipes);

  useEffect(() => {
    dispatch(getRecipes());
  }, [recipes, dispatch]);

  return (
    <>
      <PageContainer>
        <div className="recipes-list-header">
          <h1>Recipes</h1>
          <Button type="button">
            <Link
              to="/recipe/create"
              style={{ textDecoration: "none", color: "white" }}
            >
              Create Recipe
            </Link>
          </Button>
        </div>

        <div className="recipes-list-wapper">
          {recipes.map((recipe: RecipeType) => (
            <div className="card-container" key={recipe.id}>
              <img src={Recipe} alt="Recipe" />
              <span>
                <PersonIcon />
                {recipe.portions}
              </span>

              {recipe.timing?.cooking && (
                <span>
                  <AccessTimeIcon />
                  {recipe.timing?.cooking + "min."}
                </span>
              )}

              <h3 className="card-title">{recipe.title}</h3>
            </div>
          ))}
        </div>
      </PageContainer>
    </>
  );
};

export default RecipesList;
