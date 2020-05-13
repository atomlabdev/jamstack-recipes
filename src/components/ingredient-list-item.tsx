import React from "react";
import { Ingredient } from "../types/ingredients";

interface IngredientProps {
  ingredient: Ingredient;
}

const IngredientListItem = ({ ingredient }: IngredientProps) => {
  return (
    <p>
      {ingredient.name} - {ingredient.type}
    </p>
  );
};

export default IngredientListItem;
