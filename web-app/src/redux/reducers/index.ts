import { combineReducers } from "redux";
import { recipeReducer } from "./recipeReducer";

export const reducers = combineReducers({
  allRecipes: recipeReducer,
});
