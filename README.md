# Atlan - SQL Editor

This is an SQL editor built specifically for the frontend task of Atlan's interview. This particular project is built using **[React](https://reactjs.org/)**, and the **[React Bootstrap](https://react-bootstrap.github.io/)** front-end framework. It originally contains a data dump borrowed from [this](https://github.com/graphql-compose/graphql-compose-examples/tree/master/examples/northwind/data/csv) repository. The sections below detail the salient features of this project.

## Features

<!-- 1. **Tab Based Interface**: An easy-to-use tab based interface allows the user to switch between multiple queries at once. Want to view a table _and_ run a query at the same time? Sure, go right ahead. Each tab maintains its own separate state, so as long as you don't reload the page, you can jump right back to where you left a tab.
2. **Dynamic Table Views**: The list of tables is fetched at first, but the actual data isn't. Only when you click on the name of a table, are the entries fetched. Keeping the application lightweight, and blazing fast.
3. **Defining Custom Types for Columns**: Each person is not the same; similarly, each column is not the same. You might want to specify certain processing functions: want to parse an image, or return an integer. You can do all this, and the table will display the processed result.
4. **Result Statistics**: The user will also be alerted about the time taken to complete a query, giving the user a measure to check the performance of the system.
5. **Ability to save the results as JSON, XML, or CSV**: This application includes functionality to save the results of a query in JSON, XML, and CSV formats. _**Pro Tip**: You can also save a query,so that you don't have to type the same thing twice!_ -->

## Performance Audit

- **[GTmetrix](https://gtmetrix.com/)**: The fully loaded time is **1.1 seconds**, with the first contentful paint at **795 ms** with this site receives an A grade.
The exact metrics are:
  - **First Contentful Paint**: `795ms`
  - **Speed Index**: `851ms`
  - **Largest Contentful Paint**: `963ms`
  - **Time to Interactive**: `795ms`
  - **Total Blocking Time**: `0ms`
  - **Cumulative Layout Shift**: `0.27`
- **Chrome DevTools**: The load time according to Chrome DevTools is **3.92 seconds**. I got this load time from the `load` event in the Network tab of the DevTools. Along the same lines, the `DOMContentLoaded` event fires after **3.36 seconds**.


## Optimisations
- **Extensive use of the `useMemo` & `useCallback` hook**. The `useMemo` hook reduces the number of re-computations by storing the results of computations with the same dependencies. The data of tables is entirely 'memoised'. The `useCallback` is a hook used for memoizing functions in functional components. It's primarily used to optimize performance by preventing unnecessary re-creations of functions and minimizing re-renders in React components.
- **Use Babel Plugin Import for On-Demand Loading of the Antd library.** 
  We can use the `babel-plugin-import` to enable on-demand loading of antd components


## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.