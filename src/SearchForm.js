import React from 'react';
import "./SearchForm.css";

export default function SearchForm() {
  return (
      <div className="searchBar">=
    <form>
          <input
            type="search"
            placeholder="Enter A City..."
            className="search-text-input"
            autoComplete="off"
          />
          <input
            type="submit"
            value="Search🔍"
            className="search-Button"
          />
          <input
            type="submit"
            value="Current Location📍"
            className="location-search"
          />
    </form>
</div>
  );
}
