exports.createPages = async function({ actions, graphql }) {
  const { data } = await graphql(`
    query PostQuery {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              slug
              date
              ingredients
              description
              images
            }
          }
        }
      }
    }
  `);

  data.allMarkdownRemark.edges.forEach((edge) => {
    const {
      title,
      slug,
      date,
      ingredients,
      description,
      images,
    } = edge.node.frontmatter;

    actions.createPage({
      path: slug,
      component: require.resolve(`./src/templates/recipe.tsx`),
      context: {
        type: "recipe",
        title,
        slug,
        date,
        ingredients,
        description,
        images,
      },
    });
  });
};
