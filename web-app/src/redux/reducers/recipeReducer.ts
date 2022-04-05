import { AnyAction } from "redux";

const initialState = {
  recipes: [
    {
      title: "",
      category: "",
      portions: "",
      //addImage: '',
      ingredients: [],
      steps: [],
      prepTime: "",
      totalTime: "",
      blendingMachine: false,
      url: "",
      notes: "",
    },
  ],
};

export const recipeReducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case "SET_RECIPES":
      return state;
    default:
      return state;
  }
};
