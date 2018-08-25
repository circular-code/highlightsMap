import React, { Component } from "react";

export default class ListView extends Component {
  componentDidMount() {
    document.getElementById("input-places").focus();
  }

  render() {
    let places = this.props.places.filter(place => place.visible === true);

    return (
      <div id="listview">
        <input
          onChange={e => this.props.filterPlaces(e.target.value)}
          id="input-places"
          placeholder="filter places by name"
        />
        <ul className="list-places">
          {places.map(place => (
            <li
              onClick={e => this.props.selectPlace(e.target.dataset.name)}
              key={place.name}
              className={place.selected ? "list-item selected" : "list-item"}
              data-name={place.name}
              tabIndex="0"
              onKeyUp={e =>
                e.keyCode === 13
                  ? this.props.selectPlace(e.target.dataset.name)
                  : ""
              }
              aria-label="Press enter to select location  "
            >
              {place.name}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
