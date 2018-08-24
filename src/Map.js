import React, { Component } from "react";
import GoogleMapReact from "google-map-react";
import Marker from "./Marker";
import Styles from "./mapStyles.json";

export default class Map extends Component {
  static defaultProps = {
    center: {
      lat: 48.7819963,
      lng: 9.1632948
    },
    zoom: 13.75
  };

  createMapOptions() {
    return {
      // created with https://mapstyle.withgoogle.com/
      styles: Styles
    };
  }

  setPlaces(places) {
    let placesComponentArr = [];

    for (let place in places) {
      places[place].forEach(data =>
        placesComponentArr.push(
          <Marker
            key={data.name}
            name={data.name}
            lat={data.lat}
            lng={data.lng}
          />
        )
      );
    }
    return placesComponentArr;
  }

  render() {
    return (
      <div style={{ height: "100vh", width: "100%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyB-972nHwM4RrE1OWp-f1yoyYfyRLCZI48" }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
          options={this.createMapOptions}
        >
          {this.setPlaces(this.props.places)}
        </GoogleMapReact>
      </div>
    );
  }
}
