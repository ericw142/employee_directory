import React from "react";

function Searchbar(props) {
    return(
        <input
          value={props.search}
          onChange={props.handleInputChange}
          autoComplete='off'
          name="search"
          type="text"
          className="form-control"
          placeholder="Search by name"
          id="search"
        />
    )
}

export default Searchbar;