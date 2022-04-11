import { Dispatch } from "redux";
import { Ingredient } from "../../components/AddIngredients";
import { Step } from "../../components/PreparationSteps";
import api from "../../services/api";

export interface Recipe {
  title: string;
  categoryId?: string;
  isForBlendingMachine?: boolean;
  portions?: number;
  metadata: {
    source?: string;
    url?: string;
    notes?: string;
  };
  ingredients: Ingredient[];
  preparationSteps: Step[];
  // image: string,
  timing: {
    cooking?: number;
    preparation?: number;
  };
  id: string;
}

export const addRecipe = (recipe: Omit<Recipe, "id">) => {
  return (dispatch: Dispatch) => {
    api
      .post("recipe", recipe)
      .then((response) => {
        alert("Recipe created with success!");
        dispatch({
          type: "ADD_RECIPE",
          payload: response.data,
        });
      })
      .catch(() => {
        alert("Error to create recipe.");
      });
  };
};

/*type Action = {
  type: "GET_RECIPES" | "RECIPES_ERROR";
  payload: any;
};*/

export const getRecipes = () => {
  return (dispatch: Dispatch) => {
    api.get<{ data: Recipe[] }>("recipe").then((response) => {
      dispatch({
        type: "GET_RECIPES",
        payload: response.data.data,
      });
    });
  };
};
