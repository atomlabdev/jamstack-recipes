import React from "react";
import Layout from "../components/layout";
import RecipeCard from "../components/recipe-card";

interface RecipeNode {
  node: {
    path: string;
    context: {
      title: string;
      description: string;
      date: Date;
      images: string[];
    };
  };
}

interface HomepageProps {
  data: {
    allSitePage: {
      edges: RecipeNode[];
    };
  };
}

const IndexPage = ({ data }: HomepageProps): JSX.Element => {
  console.log("data", data);
  return (
    <Layout>
      <section className="hero primary-bg">
        <div className="hero-body">
          <div className="content has-text-centered">
            <p className="subtitle has-text-white is-size-3">
              Be notified of new recipes
            </p>
            <a
              className="button cta is-large"
              href="https://mailchi.mp/64d31f32d4fa/jamstack-recipes"
              target="_blank"
            >
              Subscribe via email
            </a>
          </div>
        </div>
      </section>
      <div style={{ padding: 60 }}>
        {data.allSitePage.edges.map((edge) => (
          <RecipeCard
            path={edge.node.path}
            title={edge.node.context.title}
            description={edge.node.context.description}
            image={edge.node.context.images[0]}
          />
        ))}
      </div>
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
            description
            date
            images
          }
        }
      }
    }
  }
`;

export default IndexPage;
