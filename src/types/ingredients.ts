export type IngredientName =
  | "React"
  | "Gatsby"
  | "NextJS"
  | "Netlify"
  | "Typescript"
  | "Jest"
  | "React Testing Library"
  | "Netlify Functions";

export type IngredientType =
  | "Frontend Framework"
  | "Static Site Generator"
  | "Server Rendering Framework"
  | "Hosting"
  | "Type Checking"
  | "Test Runner"
  | "Testing Framework"
  | "Serverless Functions";

export interface Ingredient {
  name: IngredientName;
  type: IngredientType;
}

export const ingredients: Ingredient[] = [
  {
    name: "React",
    type: "Frontend Framework",
  },
  {
    name: "Gatsby",
    type: "Static Site Generator",
  },
  {
    name: "NextJS",
    type: "Server Rendering Framework",
  },
  {
    name: "Netlify",
    type: "Hosting",
  },
  {
    name: "Typescript",
    type: "Type Checking",
  },
  {
    name: "Jest",
    type: "Test Runner",
  },
  {
    name: "React Testing Library",
    type: "Testing Framework",
  },
  {
    name: "Netlify Functions",
    type: "Serverless Functions",
  },
];

export const hydrateIngredients = (keywords: string[]): Ingredient[] =>
  ingredients.filter(
    (ingredient: Ingredient) => keywords.indexOf(ingredient.name) > -1
  );
