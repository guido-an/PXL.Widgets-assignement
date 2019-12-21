import React from 'react'
import BeersList from '../components/BeersList'
import SearchBar from '../components/SearchBar'
import Filter from '../components/Filter'

function Home ({ beers, searchByName, filterBeersByStyle, beersByStyle, searchInput, styleSelection }) {
  return (
    <section className='section-container shadow'>
      <div style={{ textAlign: 'center' }}>
        <h1 style={{ color: '#222', fontSize: '29px' }}>
          Looking for your next beer?
        </h1>
        <p style={{ fontSize: '18px', position: 'relative', bottom: '10px' }}>
          Start from here.
        </p>
      </div>
      <div>
        <SearchBar searchByName={searchByName} searchInput={searchInput} />
        <Filter
          filterBeersByStyle={filterBeersByStyle}
          beersByStyle={beersByStyle}
          styleSelection={styleSelection}
        />
      </div>
      <BeersList beers={beers} />
    </section>
  )
}

export default Home
