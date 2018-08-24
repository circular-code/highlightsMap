import React from "react";
// import { Route } from "react-router-dom";
import Map from "./Map";
import Places from "./places.json";
import "./App.css";

class App extends React.Component {
  state = {};

  componentDidMount() {}

  onOptionChanged = () => {};

  render() {
    return (
      <div className="app">
        <Map places={Places} />
      </div>
    );
  }
}

export default App;
