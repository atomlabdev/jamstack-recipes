import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import IngredientsList from "../components/ingredient-list";
import { hydrateIngredients } from "../types/ingredients";

// interface PostProps {
//   data: {
//     sitePage: {
//       context: {
//         title: string;
//         category: string;
//         date: Date;
//         videoId: string;
//       };
//     };
//   };
// }

const Recipe = ({ data }): JSX.Element => {
  console.log("data", data);
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
