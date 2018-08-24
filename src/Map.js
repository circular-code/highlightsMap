import React, { Component } from "react";
import GoogleMapReact from "google-map-react";

export default class Map extends Component {
  static defaultProps = {
    center: {
      lat: 48.894,
      lng: 9.187
    },
    zoom: 15
  };

  render() {
    return (
      <div style={{ height: "100vh", width: "100%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyB-972nHwM4RrE1OWp-f1yoyYfyRLCZI48" }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          {/* <AnyReactComponent
            lat={59.955413}
            lng={30.337844}
            text={"Kreyser Avrora"}
          /> */}
        </GoogleMapReact>
      </div>
    );
  }
}
