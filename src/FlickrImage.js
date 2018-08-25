import React from "react";

function FlickrImage(props) {
  // build url
  return (
    <a
      href={`https://farm${props.data.farm}.staticflickr.com/${
        props.data.server
      }/${props.data.id}_${props.data.secret}.jpg`}
    >
      <img
        alt={props.data.title}
        src={`https://farm${props.data.farm}.staticflickr.com/${
          props.data.server
        }/${props.data.id}_${props.data.secret}.jpg`}
      />
    </a>
  );
}

export default FlickrImage;

// "id":"5340131446",
// "owner":"58130019@N08",
// "secret":"3b7c380bea",
// "server":"5244",
// "farm":6,
// "title":"dog",
// "ispublic":1,
// "isfriend":0,
// "isfamily":0
