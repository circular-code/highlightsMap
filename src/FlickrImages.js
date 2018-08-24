import React, { Component } from "react";
import FlickrImage from "./FlickrImage";

export default class FlickrImages extends Component {
  componentDidMount() {
    if (this.props.images.length === 0)
      this.props.getFlickrImages(this.props.name);
  }

  render() {
    let images =
      this.props &&
      this.props.images &&
      this.props.images.photos &&
      this.props.images.photos.photo;

    if (images instanceof Array && images.length > 0) {
      let list = [];
      images.forEach(image => {
        list.push(<FlickrImage data={image} />);
      });
      return list;
    } else {
      return (
        <div className="info-window-image-container">
          loading images ... or no images available
        </div>
      );
    }
  }
}
