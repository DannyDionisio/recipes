import { PayloadAction } from "@reduxjs/toolkit";

export const setRecipes = (recipes: PayloadAction) => {
  return {
    type: "SET_RECIPES",
    payload: recipes,
  };
};
