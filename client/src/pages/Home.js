import React from 'react';
import BeersList from '../components/BeersList';
import SearchBar from '../components/SearchBar';
import Filter from '../components/Filter';

function Home({beers, searchByName, filterBeersByStyle, beersByStyle}) {
  return (
    <section>
      <h1>Looking for a great beer?</h1>
      <SearchBar searchByName={searchByName} />
      <Filter
        filterBeersByStyle={filterBeersByStyle}
        beersByStyle={beersByStyle}
      />
      <BeersList beers={beers} />
    </section>
  );
}

export default Home;
