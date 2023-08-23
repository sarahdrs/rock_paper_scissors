<img width="100" src="./images/db_logo.svg" alt="DB">

# Schere // Stein // Papier


This project uses [Vite](https://vitejs.dev/), <img width="30" src="https://vitejs.dev/logo.svg" alt="Vite logo"> a faster and leaner development experience for modern web projects.

Run `npm run dev`to start the local host and `npm run build` to create a dist folder.

It is developed for Google Chrome but works also for other current browsers.

### #1 Target Users and Responsiveness
This game is part of an application process as a coding challenge for team **Pareto** as target user at DB Systel.
The game is responsive for multiple devices from desktop to mobile.
### #2 Design System
The application uses components from DB UI. DB UI Elements is a library, that provides style conform UI components for Deutsche Bahn web frontends.
### #3 Testing & Code Quality

<img width="100" src="https://stylelint.io/img/light.svg" alt="Stylelint logo">  
<img width="50" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/ESLint_logo.svg/1200px-ESLint_logo.svg.png" alt="Eslint logo">
To ensure code quality, this project uses stylelint for css files and eslint for javascript.
Linters can be run via the CLI.
It will find errors and if possible fix them automatically:

   > npx eslint npx eslint ./src/index.js --fix

   > npx stylelint "style.css" --fix


<img width="100" src=["https://www.cypress.io/blog/assets/img/Cypress_Logos/LogoText-2022.png?v=1ed61ee28d](https://www.cypress.io/images/layouts/navbar-brand.svg)" alt="Cypress logo">

E2E Testing is a technique that tests your app from the web browser through to the back end of your application, as well as testing integrations with third-party APIs and services. These types of tests are great at making sure your entire app is functioning as a cohesive whole.

The e2e test is supposed to cover the visibility of elements, their functionality, and the overall userjourney of the game.
Further cypress allows cross-browser-testing in their desktop app.
The spec file can be found here: `cypress/e2e`

**Cypress Commands**

> npx cypress verify

Verify that Cypress is installed correctly and is executable.

> npx cyress run

Run cypress in the CLI

> npx cypress open

Opens the cypress app
