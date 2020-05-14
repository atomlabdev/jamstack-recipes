import React from "react";
import IngredientListItem from "./ingredient-list-item";
import { Ingredient } from "../types/ingredients";

interface IngredientListProps {
  ingredients: Ingredient[];
}

const IngredientsList = ({ ingredients }: IngredientListProps): JSX.Element => {
  return (
    <>
      <h3>Ingredients</h3>
      <ul className="ingredient-list">
        {ingredients.map((ingredient) => (
          <IngredientListItem ingredient={ingredient} />
        ))}
      </ul>
    </>
  );
};

export default IngredientsList;
