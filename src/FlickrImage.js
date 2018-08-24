import React from "react";

function FlickrImage(props) {
  console.log(props);
  return (
    <img
      alt="from flickr"
      src={`https://farm${props.farm}.staticflickr.com/${props.server}/${
        props.id
      }_${props.secret}.jpg`}
    />
  );
}

export default FlickrImage;

// build image link

// 	or
// https://farm{farm-id}.staticflickr.com/{server-id}/{id}_{secret}_[mstzb].jpg
// 	or
// https://farm{farm-id}.staticflickr.com/{server-id}/{id}_{o-secret}_o.(jpg|gif|png)

// "id":"5340131446",
// "owner":"58130019@N08",
// "secret":"3b7c380bea",
// "server":"5244",
// "farm":6,
// "title":"dog",
// "ispublic":1,
// "isfriend":0,
// "isfamily":0
