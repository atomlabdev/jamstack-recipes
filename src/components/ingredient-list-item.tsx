import React from "react";
import { Ingredient } from "../types/ingredients";

interface IngredientProps {
  ingredient: Ingredient;
}

const IngredientListItem = ({ ingredient }: IngredientProps) => {
  return (
    <li className="ingredient-list-item">
      <span className="has-bold-text">{ingredient.name}</span>
      <br />
      <span>{ingredient.type}</span>
    </li>
  );
};

export default IngredientListItem;
