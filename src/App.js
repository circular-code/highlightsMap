import React from "react";
// import { Route } from "react-router-dom";
import Map from "./Map";
import ListView from "./ListView";
import Info from "./Info";
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
      // select result
      state.places
        .filter(place => {
          return ~place.name.indexOf(value);
        })
        .forEach(place => {
          if (place.selected) place.selected = false;
          else {
            // clear selection, so only ony place is selected at the same time
            state.places.forEach(oldPlace => {
              oldPlace.selected = false;
            });

            place.selected = true;
          }
        });
      return state;
    });
  };

  getFlickrImages = name => {
    // get flickr images based on selected place
    fetch(
      `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=1168a8d14d15b7e5ebbcb9b6ab91abf2&text=${name}&sort=relevance&privacy_filter=1&safe_search=1&per_page=5&page=1&format=json&nojsoncallback=1`
    )
      .then(data => data.json())
      .then(data => {
        this.setState(state => {
          // store downloaded images in images array of place
          var filteredPlace = state.places.filter(place => {
            return place.name === name;
          });

          filteredPlace[0].images = data && data.photos && data.photos.photo;
          return state;
        });
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
        <Info
          place={this.state.places.filter(place => place.selected)}
          getFlickrImages={this.getFlickrImages}
        />
      </div>
    );
  }
}

export default App;
