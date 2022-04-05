import { PayloadAction } from "@reduxjs/toolkit";

/*export const addRecipe = (recipes: PayloadAction) => {
  return (dispatch) => {
    api
      .post("recipe", { recipes })
      .then((response) => {
        alert("Recipe created with success!");
        dispatch({
          type: "ADD_RECIPE",
          payload: response.data,
        });

        //history.push("/recipes");
      })
      .catch(() => {
        alert("Error to create recipe.");
      });
  };
};*/

export const getRecipes = (recipes: PayloadAction) => {
  return {
    type: "GET_RECIPES",
    payload: recipes,
  };
};
