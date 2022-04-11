import { combineReducers } from "redux";
import { recipesReducer } from "./recipesReducer";

export const reducers = combineReducers({
  recipes: recipesReducer,
});

export type ReducersState = ReturnType<typeof reducers>;
