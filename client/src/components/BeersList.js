import React from 'react';
import {Link} from 'react-router-dom';
import './BeersList.css'

function BeersList({beers}) {

  return (
  
    beers.map(beer => {
    return (
      <div className="beer-wrapper shadow" key={beer.id}>
        {beer.labels && <img src={beer.labels.medium} />}
        <h2>
          <strong>{beer.name}</strong>
        </h2>
        {beer.style && <p>{beer.style.name}</p>}
        <Link to={`/${beer.id}`}>View details</Link>
      </div>
    );
  })
  )
}

export default BeersList;
