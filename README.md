# ProductSelection

This project is a frontend-focused single page application that contains very simple Express.js server act as an api server.
Client tech stack is React, Redux and Webpack and is the main showcase of the project.

## Starting

After cloning the repository (or download it), install dependancies.
```bash
npm install
```
Install babel-cli to build this project
```bash
npm install -g babel-cli
```
Test Command
```bash
npm run test
```
Start server in develop mode (source-map). 
Then go to url http://localhost:3000
```bash
npm run start:dev
```
Start server in production mode (minified and uglified). 
Then go to url http://localhost:3000
```bash
npm run start
```

## Functionality
### Product Selection page

Page layout according to wireframe

### Server services
#### locationId

randomly return 'LONDON' or 'LIVERPOOL'

#### products

returns products depending on location

### Checkout page

Shows the review of basket products. Click "back" button to go back.

### Error handling

If any of the action is unsuccessful, a popup will show on the bottom of the screen.

## Tests

The tests are not exhaustive. Using Mocha, Chai and jsdom to test actions, async actions (sagas) and reducers.