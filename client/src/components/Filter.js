import React from 'react';
import './Filter.css'

function Filter ({ filterBeersByStyle, beerStyles, styleSelection }) {
  return (
    <div className='filter-wrapper'>
      <select className='shadow' onChange={filterBeersByStyle}>
        <option value=''>What's your type?</option>
        <option value=''>ALL STYLES</option>
        {beerStyles.map((beerStyle, i) => {
          return <option key={i} value={beerStyle} selected={styleSelection === beerStyle}>{beerStyle}</option>
        })}
      </select>
    </div>
  );
}

export default Filter
