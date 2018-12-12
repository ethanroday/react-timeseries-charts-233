import React, { Component } from 'react';
import { hot } from "react-hot-loader";
import Chart from './Chart'
import './App.css';

class App extends Component {
  render() {
    return (
      <Chart />
    )
  }
}

export default hot(module)(App);