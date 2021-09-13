import React from "react";

export const SearchBox = ({ handleChange }) => (
  <div className="search-box">
    <input
      type="search"
      className="search"
      placeholder="Search for Products"
      onChange={handleChange}
    />
  </div>
);
