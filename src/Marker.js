import React from "react";
import { markerStyle } from "./markerStyle";

// I did not include the markers in the tab order in order to prevent double existance of data. I beliebe for the user it is better to only get presented the places data once for each place, not twice.

function Marker(props) {
  let className;
  if (props.selected === true) className = "marker selected";
  else className = "marker";
  return (
    <div
      className={className}
      style={markerStyle}
      data-name={props.name}
      onClick={e => props.selectPlace(e.target.dataset.name)}
    >
      <p data-name={props.name} className="marker-title">
        {props.name}
      </p>
    </div>
  );
}

export default Marker;
