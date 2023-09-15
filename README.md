# Maxime Moreau - Moonpig Test

My solution is hosted on **GitHub Pages**
[https://maximemoreaupro.github.io/moonpig-test](https://maximemoreaupro.github.io/moonpig-test)

The top left link _Cards_ forwards to the card listings page

> **Github Pages** is not compatible with the **BrowserRouter** so the deployed app uses the **HashRouter**.
>
> **HashRouter** adds _/#/_ after the baseurl _maximemoreaupro.github.io/moonpig-test_ to operate the SPA routing system

## Installation

```bash
git clone git@github.com:MaximeMoreauPro/moonpig-test.git
cd moonpig-test
npm install
```

## Tech Stack

This app uses `react` and `react-dom` to build the web components and pages, `react-router-dom` for SPA routing and `styled-components` for styling.

I kept it simple so there is no other third party library.

I'm also a big fan of **TypeScript**.
Here's an advanced use case with generic types in [DataDisplayerUI.tsx](src/app/common/components/DataDisplayerUI.tsx)

The build system is based on `webpack` and `babel` and related plugins because its customisation is more powerfull than the default build system provided by `create-react-app`. I've good experience with these tools.

## Testing

Run the test

```bash
npm run test
```

### TDD

I used TDD to implement some part of this app. Thanks to it I can implement the different rules incrementaly with the simple code as possible and then easily refacto the code for better readibilty/perf etc and add other rules. Thus I'm sure to don't break previous behaviour.
It also bring good test coverage and document what the code does as well.

I also used _Wallaby.js_ VS Code plugin to have a quick feedback that ensure that my code goes to the right direction/intent.

### Types of tests

#### Unit Test

I wrote _unit tests_ with `jest` to verify that the behavior of the Use Cases classes is as expected.

#### Smart/Container Component Test

I wrote _React components tests_ with `react-testing-library` to test the Container/Smart Components which orchestrate the logic with UI Components, custom hooks, navigation and the Use Cases classes.
With more time I would add `jest-axe` to check if the rendered HTML have no accessibility violations

I mock only external dependencies like [useNavigate](src/app/pages/cards/containers/CardListings/CardListings.test.tsx) with `jest.mock`.

I use abstraction with Interfaces and multiple classes implememtation for my own code. [ProductRepository](src/products/ProductRepository.ts), [InMemoryProductRepository](src/products/infrastructure/ProductRepository.in-memory.ts) and , [API_ProductRepository](src/products/infrastructure/ProductRepository.api.ts) use this approach.

I use `Context` as a Dependency Injection System so it's simple to change an implementation in a test as the `InMemoryProductRepository`.

#### Dumb/UI Component Test

With more time I would have written `Storybook` stories for Dumb/UI Components. I think unit tests with [jest-styled-components](https://styled-components.com/docs/tooling#jest-integration) is not efficient for these kind of components most of the time especially because CSS is tricky to test programmaticaly and can evolve too often during the life of a project.

I'd publish these stories on `Chromatic` to check their rendering within multiple browsers and check if there is no UI regression. It's also a great tool for UI Designers who can have a look at the stories to check if it matches the Design System defined in _Figma_ for example

#### E2E Test

With more time I would have written E2E tests with `cypress` or `playwright` to check the main app features on an environment the closest to production.
They can detect potential failures related to API/token, infrastructure, environement variables, security config such as same-origin policy, web browsers compatibility, production build etc. that are impossible to catch by simply running unit tests with `jest`.

## Deployment

The deployment to GitHub Pages [https://maximemoreaupro.github.io/moonpig-test](https://maximemoreaupro.github.io/moonpig-test) is manual

```bash
npm run deploy -m "Deployment Comment"
```

## Possible improvements

1. Add a CI/CD with the following steps

- static code analysis: code formating with `prettier`, linting with `ESLint` plugins, type checking with `TypeScript`, `SonarQube` for code quality, `Dependabot`, `Snyk` or `CodeQL` for security...
- run the unit and component tests with code coverage limits
- mutation testing with `Stryker.js` to assess the relevance and robustness of the tests with a mutation score which is more relevant than just the code coverage percent
- deploy the app on a pre-production environment and then run E2E tests targeting it
- add performance, SEO, accessibility tests with the `LightHouse CI` tools targeting the pre-production environment with thresholds
- makes the release to production automatic or send a message on a Slack channel for example asking for developers approbation if all the previous steps succeed or explaining the cause of failure.

2. Improve the accessibilty, mobile/tablet responsiveness, browsers compatibility, performance

3. Add a production web app monitoring with `Sentry` and `Checkly` for example

...and more stuffs according to the need/constraints and team suggestions :)
