import React from "react";

function ListView(props) {
  let places = props.places.filter(place => place.visible === true);

  return (
    <div id="listview">
      <input
        onChange={e => props.filterPlaces(e.target.value)}
        id="input-places"
        placeholder="filter places by writing a name"
      />
      <ul className="list-places">
        {places.map(place => (
          <li
            onClick={e => props.selectPlace(e.target.dataset.name)}
            key={place.name}
            className={place.selected ? "list-item selected" : "list-item"}
            data-name={place.name}
          >
            {place.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListView;
