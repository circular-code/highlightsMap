import React, { Component } from "react";
import FlickrImage from "./FlickrImage";

export default class FlickrImages extends Component {
  componentDidMount() {
    // if no images were already downloaded
    if (this.props.images.length === 0)
      this.props.getFlickrImages(this.props.name);
  }

  componentDidUpdate() {
    // if no images were already downloaded
    if (this.props.images.length === 0)
      this.props.getFlickrImages(this.props.name);
  }

  render() {
    // create new Image for each downloaded image in state.place.images
    let images = this.props && this.props.images;

    if (images instanceof Array && images.length > 0) {
      let list = [];
      images.forEach(image => {
        list.push(
          <FlickrImage key={image.id} data={image} name={this.props.name} />
        );
      });
      return list;
    } else {
      return "loading images ... or no images available";
    }
  }
}
