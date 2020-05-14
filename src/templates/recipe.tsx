import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import IngredientsList from "../components/ingredient-list";
import { hydrateIngredients, IngredientName } from "../types/ingredients";
import Carousel from "../components/carousel";

interface RecipeProps {
  data: {
    sitePage: {
      context: {
        title: string;
        date: Date;
        ingredients: IngredientName[];
        images: string[];
      };
    };
  };
}

const Recipe = ({ data }: RecipeProps): JSX.Element => {
  return (
    <Layout>
      <Carousel images={data.sitePage.context.images} />
      <div style={{ padding: 20 }}>
        <h1>{data.sitePage.context.title}</h1>
        <IngredientsList
          ingredients={hydrateIngredients(data.sitePage.context.ingredients)}
        />
      </div>
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
        images
      }
    }
  }
`;

export default Recipe;
