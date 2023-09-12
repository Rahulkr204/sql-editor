# Atlan - SQL Editor

This is an SQL editor built specifically for the frontend task of Atlan's interview. This particular project is built using **[React](https://reactjs.org/)**, **[React-CodeMirror](https://www.npmjs.com/package/@uiw/react-codemirror)** and the **[Antd](https://ant.design/)** library. We have used data from [here](https://github.com/graphql-compose/graphql-compose-examples/tree/master/examples/northwind/data/csv) repository. The sections below detail the salient features of this project.

## Features

1. **Interface**: Used Layout with SidePanel and Content area for showing selected tab content. I've used tabs to show query section since user can open any number of tabs for querying. Result section is maintained separately for each tab.
2. **Data Source**: The list of tables are stored as json. We can view the `fieldNames` and `fieldType` against each entry in this list.
3. **Running/Publishing Query**: We can publish/run query and see published in the `Published Section`
4. **Results Section**: We've limited total entries for result with a `Select`, when we select All, we use Virtualized Table to render large scale results. The user will also be alerted about the time taken to complete a query, giving the user a measure to check the performance of the system. I've provided two more section `Schedule` & `Documentation` for adding more functionality to queries.
5. We've used 
6. **Ability to save the results as JSON, XML, or CSV**: This application includes functionality to save the results of a query in JSON, XML, and CSV formats.

### Yet to be implemented
1. Search Data Source
2. Deleting published query
3. Export results to JSON/CSV

## Performance Audit

- **[GTmetrix](https://gtmetrix.com/)**: The fully loaded time is **`1.1 seconds`**, with the first contentful paint at **`795 ms`** with this site receives an A grade.
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