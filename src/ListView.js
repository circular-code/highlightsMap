import React from "react";

function ListView(props) {
  let places = props.places.filter(place => place.visible === true);
  return (
    <div id="listview">
      <input
        onChange={e => props.filterPlaces(e.target.value)}
        id="input-places"
      />
      <ul className="list-places">
        {places.map(place => (
          <li
            onClick={e => props.selectPlace(e.target.dataset.name)}
            key={place.name}
            className="list-item"
            data-name={place.name}
          >
            {`Name: ${place.name}`}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListView;
