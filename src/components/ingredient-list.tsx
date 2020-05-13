import React from "react";
import IngredientListItem from "./ingredient-list-item";
import { Ingredient } from "../types/ingredients";

interface IngredientListProps {
  ingredients: Ingredient[];
}

const IngredientsList = ({ ingredients }: IngredientListProps): JSX.Element => {
  return (
    <div>
      {ingredients.map((ingredient) => (
        <IngredientListItem ingredient={ingredient} />
      ))}
    </div>
  );
};

export default IngredientsList;
