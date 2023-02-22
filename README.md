How to run project ?

    1. Run yarn install
    2. Run yarn start

How to run unit and integration tests? (mock service worker should be enabled)
-> Run: yarn test

How to run E2E tests? (Before you should run: yarn start, mock service worker should be enabled)

    1. Run: yarn cypress open
    2. In Cypress window click E2E testing
    3. Select "browser"
    4. Run specific test scenario e.g. heroFilter.cy.ts

Project was tested for:

    node:
    v16.16.0

    yarn:
    1.22.11

If you want to disable/enable mock service worker change REACT_APP_NODE_ENV variable in .env file to value: production/development
