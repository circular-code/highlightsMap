import React from "react";
// import { Route } from "react-router-dom";
import Map from "./Map";
import "./App.css";

class App extends React.Component {
  state = {};

  componentDidMount() {}

  onOptionChanged = () => {};

  render() {
    return (
      <div className="app">
        <Map />
      </div>
    );
  }
}

export default App;
