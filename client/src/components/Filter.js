import React from 'react';

function Filter({filterBeersByStyle, beersByStyle}) {
  return (
    <div>
      <label>What's your type?</label>
      <select onChange={filterBeersByStyle}>
        <option value="">ALL STYLES</option>
        {beersByStyle.map((beerStyle, i) => {
          return <option key={i} value={beerStyle}>{beerStyle}</option>;
        })}
      </select>
    </div>
  );
}

export default Filter;
