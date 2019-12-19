import React from 'react';

function Search({searchByName}) {
  return (
    <div>
      <label>Search by name</label>
      <input onChange={searchByName} type="text" placeholder="Search by name" />
    </div>
  );
}

export default Search;
