import React from 'react'

function BeersList({beers}){
    console.log(beers)
    return(
        beers.map(beer => {
            return (
              <div key={beer.id}>
                {beer.labels && (<img src={beer.labels.medium}/>)}
                <p><strong>{beer.name}</strong></p>
              {beer.style &&( <p>{beer.style.name}</p>)}
              </div>
            )
          })
    )
}


export default BeersList