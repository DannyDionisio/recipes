import { AnyAction } from "redux";

const initialState = {
  recipes: [],
};

export const recipeReducer = (state = initialState, action: AnyAction) => {
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
