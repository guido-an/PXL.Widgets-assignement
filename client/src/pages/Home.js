import React from 'react'
import BeersList from '../components/BeersList'
import Search from '../components/Search'

function Home({beers, searchByName}){
    return(
        <section>
        <h1>HOME</h1>
        <Search searchByName={searchByName}/>
        <BeersList beers={beers} />
        </section>
    )
}

export default Home