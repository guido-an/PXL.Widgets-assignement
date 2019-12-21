import React from 'react';
import './SearchBar.css'

function Search ({ searchByName, searchInput }) {
  return (
    <div>
      <input className='search-bar shadow' onChange={searchByName} value={searchInput} type='text' placeholder='Search by name'/>
    </div>
  )
}

export default Search
