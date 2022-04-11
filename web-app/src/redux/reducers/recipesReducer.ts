import { AnyAction } from "redux";
import { Recipe } from "../actions/recipesActions";

const initialState = {
  recipes: [] as Recipe[],
};

type Reducer = typeof initialState;

export const recipesReducer = (
  state = initialState,
  action: AnyAction
): Reducer => {
  switch (action.type) {
    case "ADD_RECIPE":
      const recipes = state.recipes.concat(action.payload);
      return {
        ...state,
        recipes,
      };
    case "GET_RECIPES":
      return {
        ...state,
        recipes: action.payload,
      };
    default:
      return state;
  }
};
