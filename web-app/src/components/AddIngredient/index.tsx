import React, { useState } from "react";

import "./styles.css";

import CarrotIcon from "../../assets/images/carrot-icon.svg";

import AddButton from "../AddButton";
import Input from "../Input";

export interface Ingredient {
  key: number;
  name: string;
  quantity: number;
  unit: string;
}

type Props = {
  onChange: (ingredients: Ingredient[]) => void;
};

const AddIngredient = ({ onChange }: Props) => {
  const [ingredients, setIngredients] = useState<Ingredient[]>([]);

  function handleAddIngredient(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    setIngredients([
      ...ingredients,
      { key: ingredients.length, name: "", quantity: 0, unit: "" },
    ]);
  }

  function handleIngredientChange(
    e: React.ChangeEvent<HTMLInputElement>,
    ingredient: Ingredient
  ) {
    const newIngredientsList = ingredients.map((i) => {
      if (i.key === ingredient.key) {
        return ingredient;
      }
      return i;
    });
    setIngredients(newIngredientsList);
    onChange(newIngredientsList);
  }

  return (
    <div id="ingredient-container">
      {ingredients.length > 0 && <p>Ingredientes</p>}

      {ingredients.map((ingredient) => (
        <div className="ingredient-content" key={`${ingredient.key}`}>
          <Input
            type="number"
            name="quantity"
            placeholder="Quantidade"
            value={ingredient.quantity}
            onChange={(e) =>
              handleIngredientChange(e, {
                ...ingredient,
                quantity: Number(e.target.value) || 0,
              })
            }
          />
          <Input
            name="unit"
            placeholder="Unidade de Medida"
            value={ingredient.unit}
            onChange={(e) =>
              handleIngredientChange(e, { ...ingredient, unit: e.target.value })
            }
          />
          <Input
            name="ingredient"
            placeholder="Ingrediente"
            value={ingredient.name}
            onChange={(e) =>
              handleIngredientChange(e, { ...ingredient, name: e.target.value })
            }
          />
        </div>
      ))}

      <AddButton
        source={CarrotIcon}
        icon="carrot-icon"
        title="ADICIONAR INGREDIENTE"
        onClick={handleAddIngredient}
      />
    </div>
  );
};

export default AddIngredient;
