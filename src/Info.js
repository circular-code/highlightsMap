import React, { Component } from "react";

export default class Info extends Component {
  render() {
    let places = this.props.place,
      place = places[0];
    if (places.length > 0)
      return (
        <div className="info-window">
          <div className="info-window-text-container">
            <p className="info-window-text">
              <strong>Name: </strong>
              <span>{place.name}</span>
            </p>
            <p className="info-window-text">
              <strong>Latitude: </strong>
              <span>{place.lat}</span>
            </p>
            <p className="info-window-text">
              <strong>Longitude: </strong>
              <span>{place.lng}</span>
            </p>
          </div>
          <div className="info-window-image-container">No Images available</div>
        </div>
      );
    else return "";
  }
}
