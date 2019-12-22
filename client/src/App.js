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
    beerStyles: [],
    searchInput: '',
    styleSelection: '',
  }

  getBeers = () => {
    axios
      .get(`${process.env.REACT_APP_BASE_URL}beers`)
      .then(beers => {
        this.setState({
          beers: beers.data.beers,
          fullBeersArray: beers.data.beers,
          beerStyles: beers.data.beerStyles,
        })
      })
      .catch(err => {
        console.log(err, 'err')
      })
  }

  componentDidMount() {
    this.getBeers()
  }

  searchByName = e => {
    this.setState(
      {
        searchInput: e.target.value,
      },
      () => this.processSelection()
    )
  }

  filterBeersByStyle = e => {
    this.setState(
      {
        styleSelection: e.target.value,
      },
      () => this.processSelection()
    )
  }

  processSelection() {
    let beers = this.state.searchInput.trim()
      ? this.state.fullBeersArray.filter(beer => {
          return beer.name
            .toUpperCase()
            .includes(this.state.searchInput.toUpperCase())
        })
      : this.state.fullBeersArray

    beers = this.state.styleSelection
      ? beers.filter(beer => {
          return beer.style && beer.style.name === this.state.styleSelection
        })
      : beers

    this.setState({
      beers,
    })
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
                beerStyles={this.state.beerStyles}
                filterBeersByStyle={this.filterBeersByStyle}
                searchByName={this.searchByName}
                searchInput={this.state.searchInput}
                styleSelection={this.state.styleSelection}
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
