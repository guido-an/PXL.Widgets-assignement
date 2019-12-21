import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import axios from 'axios'
import Footer from './components/Footer'
import Home from './pages/Home'
import BeerPage from './pages/BeerPage'
import './App.css'

class App extends Component {
  state = {
    beers: [],
    fullBeersArray: [],
    beerStylesArray: [],
    searchInput: '',
    styleSelection: ''
  }

  getBeers = () => {
    axios
      .get(`${process.env.REACT_APP_BASE_URL}beers`)
      .then(beers => {
        this.setState(
          {
            beers: beers.data.beers,
            fullBeersArray: beers.data.beers,
            beerStylesArray: beers.data.beerStyles
          }
        )
      })
      .catch(err => {
        console.log(err, 'err')
      })
  }

  componentDidMount() {
    this.getBeers()
  }

  searchByName = e => {
    let filteredBeers = this.state.fullBeersArray.filter(beer => {
      return beer.name.toUpperCase().includes(e.target.value.toUpperCase())
    })
    this.setState({
      beers: filteredBeers,
      searchInput: e.target.value
    })
  }

  filterBeersByStyle = e => {
    if (e.target.value === '') {
      this.setState({
        beers: this.state.fullBeersArray,
      })
    } else {
      let filteredStyle = this.state.fullBeersArray.filter(
        beer => beer.style && beer.style.name === e.target.value
      )
      this.setState({
        beers: filteredStyle,
        styleSelection: e.target.value
      })
    }
  }

  render() {
    return (
      <section>
        <Switch>
          <Route
            exact
            path="/"
            render={props => (
              <Home
                {...props}
                beers={this.state.beers}
                searchByName={this.searchByName}
                searchInput={this.state.searchInput}
                styleSelection={this.state.styleSelection}
                filterBeersByStyle={this.filterBeersByStyle}
                beersByStyle={this.state.beerStylesArray}
              />
            )}
          />
          <Route exact path="/:id" render={props => <BeerPage {...props} />} />
        </Switch>
        <Footer />
      </section>
    )
  }
}

export default App
