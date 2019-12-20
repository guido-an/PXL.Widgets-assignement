import React from 'react';
import './SearchBar.css'

function Search({searchByName}) {
  return (
    <div>
      <input className="search-bar shadow" onChange={searchByName} type="text" placeholder="Search by name"/>
    </div>
  );
}

export default Search;
