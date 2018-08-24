import React, { Component } from "react";
import GoogleMapReact from "google-map-react";
import Marker from "./Marker";

export default class Map extends Component {
  static defaultProps = {
    center: {
      lat: 48.7819963,
      lng: 9.1632948
    },
    zoom: 13.75
  };

  setPlaces(places) {
    let placesComponentArr = [];
    for (let place in this.props.places) {
      places[place].forEach(data =>
        placesComponentArr.push(
          <Marker name={data.name} lat={data.lat} lng={data.lng} />
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
        >
          {this.setPlaces(this.props.places)}
        </GoogleMapReact>
      </div>
    );
  }
}
