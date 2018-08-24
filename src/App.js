import React from "react";
// import { Route } from "react-router-dom";
import Map from "./Map";
import Places from "./places.json";
import "./App.css";

class App extends React.Component {
  state = { places: Places };

  componentDidMount() {}

  onOptionChanged = () => {};

  render() {
    return (
      <div className="app">
        <Map places={this.state.places} />
      </div>
    );
  }
}

export default App;
