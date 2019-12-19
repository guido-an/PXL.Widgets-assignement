import React from 'react';
import {Link} from 'react-router-dom';

function BeersList({beers}) {

  return (
  
    beers.map(beer => {
    return (
      <div key={beer.id}>
        {beer.labels && <img src={beer.labels.medium} />}
        <p>
          <strong>{beer.name}</strong>
        </p>
        {beer.style && <p>{beer.style.name}</p>}
        <Link to={`/${beer.id}`}>View beer</Link>
      </div>
    );
  })
  )
}

export default BeersList;
