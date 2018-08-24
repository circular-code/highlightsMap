import React from "react";
// import { Route } from "react-router-dom";
import Map from "./Map";
import ListView from "./ListView";
import Places from "./places.json";
import "./App.css";

class App extends React.Component {
  state = {
    places: Places
  };

  filterPlaces = value => {
    this.setState(state => {
      // hide results
      state.places
        .filter(place => {
          return !~place.name.indexOf(value);
        })
        .forEach(element => {
          element.visible = false;
        });

      // show results
      state.places
        .filter(place => {
          return ~place.name.indexOf(value);
        })
        .forEach(place => {
          place.visible = true;
        });

      return state;
    });
  };

  selectPlace = value => {
    this.setState(state => {
      // select results
      state.places
        .filter(place => {
          return ~place.name.indexOf(value);
        })
        .forEach(place => {
          if (place.selected) place.selected = false;
          else {
            // reset selection, so only ony place is selected at the same time
            state.places.forEach(oldPlace => {
              oldPlace.selected = false;
            });

            place.selected = true;
          }
        });
      return state;
    });
  };

  render() {
    return (
      <div className="app">
        <Map places={this.state.places} selectPlace={this.selectPlace} />
        <ListView
          places={this.state.places}
          filterPlaces={this.filterPlaces}
          selectPlace={this.selectPlace}
        />
      </div>
    );
  }
}

export default App;
