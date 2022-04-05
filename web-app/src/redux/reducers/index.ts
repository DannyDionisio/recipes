import { combineReducers } from "redux";
import { recipeReducer } from "./recipeReducer";

export const reducers = combineReducers({
  allRecipes: recipeReducer,
});

export type ReducersState = ReturnType<typeof reducers>;
