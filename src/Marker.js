import React, { Component } from "react";
import { markerStyle } from "./markerStyle";

export default class Marker extends Component {
  render() {
    return (
      <div className="marker" style={markerStyle}>
        <p className="marker-title">{this.props.name}</p>
      </div>
    );
  }
}
