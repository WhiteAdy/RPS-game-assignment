# Rock Paper Scissors game

This Vite+React project was done as a technical task/assignment.

The list of technologies used are the following:

-   React 18
-   Typescript 5
-   CSS modules (with Sass)
-   ESLint
-   Prettier

## Running the app

There are two ways to run the app in the browser:

-   Visiting the [game deployed to GitHub Pages here](https://whiteady.github.io/RPS-game-assignment)

-   Running the dev server locally by following the below steps:
    -   Clone the project
    -   Verify that you have Node 18+ installed on your machine
    -   Run the `npm install` command to install the dependencies
    -   Run the `npm run dev` command to serve the app locally
    -   In your browser go to http://localhost:5173/RPS-game-assignment

## Project structure description

This project follows the **Atomic Design** system for breaking up the UI components into composable units arranged into following levels:

-   Atoms
-   Molecules
-   Organisms
-   Layouts

Components that are further down the list of levels contain one or more from the levels above. For example, a Molecule can have 2 Atoms, and an Organism can have 1 Molecule and 2 Atoms etc.

**ESLint** is used to maintain consistency and best-practices throughout the code. Some of the most recommended rules are applied, and extended in the `.eslintrc.cjs` file.

**Prettier** is used to format the code automatically and consistently following the rules specified in the ``prettierrc` file.

**Absolute Paths** are configured in the `tsconfig.json` to make imports cleaner and more consistent e.g: <br>
`import { Button } from 'components/layout'`<br>
vs: <br>
`import { Button } from '../../../Button/Button`
