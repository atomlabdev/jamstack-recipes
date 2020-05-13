import React from "react";

import Layout from "../components/layout";
import RecipeCard from "../components/recipe-card";

const IndexPage = ({ data }) => {
  console.log("data", data);
  return (
    <Layout>
      {data.allSitePage.edges.map((edge) => (
        <a href={edge.node.path}>{edge.node.context.title}</a>
      ))}
    </Layout>
  );
};

export const AllPostsQuery = graphql`
  query PostQuery {
    allSitePage(filter: { context: { type: { eq: "recipe" } } }) {
      edges {
        node {
          path
          context {
            title
            slug
            date
          }
        }
      }
    }
  }
`;

export default IndexPage;
