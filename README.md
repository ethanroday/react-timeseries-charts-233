This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Repro Steps

This is an example repo to demonstrate https://github.com/esnet/react-timeseries-charts/issues/233.
Steps to repro:

1. Clone and `yarn install`.
2. `yarn start` and see that the bar chart does not render.
3. `yarn build`, then serve the build folder (`serve -s build`) and go to `http://localhost:8080`. See that the bar chart does render.

You can make your own by:

1. Bootstrapping a new app using CRA 2.2.1.
2. Following the `react-hot-loader` [instructions for migrating from CRA](https://github.com/gaearon/react-hot-loader#migrating-from-create-react-app).
3. Installing React Timeseries Charts and Pond.js (`yarn add react-timeseries-charts pondjs`).
4. Taking the [bar chart example code](https://github.com/esnet/react-timeseries-charts/blob/master/src/website/packages/charts/examples/barchart/Index.js) and pasting into a new file called `Chart.js` (and removing extraneous imports and exports).
5. Importing the new Chart component in `App.js` and replacing the contents of the `render()` method with the `<Chart />` component.