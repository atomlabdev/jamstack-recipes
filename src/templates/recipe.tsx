import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import IngredientsList from "../components/ingredient-list";
import { hydrateIngredients, IngredientName } from "../types/ingredients";

interface RecipeProps {
  data: {
    sitePage: {
      context: {
        title: string;
        date: Date;
        ingredients: IngredientName[];
      };
    };
  };
}

const Recipe = ({ data }: RecipeProps): JSX.Element => {
  return (
    <Layout>
      <p>{data.sitePage.context.title}</p>
      <IngredientsList
        ingredients={hydrateIngredients(data.sitePage.context.ingredients)}
      />
    </Layout>
  );
};

export const postQuery = graphql`
  query($path: String!) {
    sitePage(path: { eq: $path }) {
      context {
        title
        date
        ingredients
      }
    }
  }
`;

export default Recipe;
