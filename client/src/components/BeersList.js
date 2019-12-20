import React from 'react'
import { Link } from 'react-router-dom'
import './BeersList.css'

function BeersList ({ beers }) {
  return (
    <section className='beers-section'>
      {beers.map(beer => {
        return (
          <div className='beer-container shadow' key={beer.id}>
            <div>
              {beer.labels ? (
                <img style={{ height: '80px' }} src={beer.labels.medium} alt={beer.name} />
              ) : (
                <img style={{ height: '80px' }} alt='' />
              )}
              <h2>
                <strong>{beer.name}</strong>
              </h2>
              {beer.style ? <p>{beer.style.name}</p> : <p />}
              <Link to={`/${beer.id}`}>View Details</Link>
            </div>
          </div>
        )
      })}
    </section>
  )
}

export default BeersList
