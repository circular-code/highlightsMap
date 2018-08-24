import React, { Component } from "react";
import { markerStyle } from "./markerStyle";

export default class Marker extends Component {
  render() {
    let className;
    if (this.props.selected === true) className = "marker selected";
    else className = "marker";
    return (
      <div
        className={className}
        style={markerStyle}
        data-name={this.props.name}
        onClick={e => this.props.selectPlace(e.target.dataset.name)}
      >
        <p className="marker-title">{this.props.name}</p>
      </div>
    );
  }
}
