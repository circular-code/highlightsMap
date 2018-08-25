import React, { Component } from "react";
import FlickrImages from "./FlickrImages";

export default class Info extends Component {
  render() {
    let places = this.props.place,
      place = places[0];
    if (places.length > 0)
      return (
        <div className="info-window">
          <div className="info-window-text-container">
            <p className="info-window-text" tabIndex="0">
              <strong>Name: </strong>
              <span>{place.name}</span>
            </p>
            <p className="info-window-text" tabIndex="0">
              <strong>Latitude: </strong>
              <span>{place.lat}</span>
            </p>
            <p className="info-window-text" tabIndex="0">
              <strong>Longitude: </strong>
              <span>{place.lng}</span>
            </p>
          </div>
          <div className="info-window-image-container">
            <strong tabIndex="0">Flickr Sourced Impressions: </strong>
            <FlickrImages
              getFlickrImages={this.props.getFlickrImages}
              images={place.images}
              name={place.name}
            />
          </div>
        </div>
      );
    else return "";
  }
}
