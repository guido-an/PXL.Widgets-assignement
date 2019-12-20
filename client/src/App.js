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
    beersByStyle: [],
    beersByAbv: [],
  }

  getBeers = () => {
    axios
      .get(`${process.env.REACT_APP_BASE_URL}beers`)
      .then(beers => {
        this.setState({
          beers: beers.data,
          fullBeersArray: beers.data,
        })
        this.getBeersByStyle()
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
    })
  }

  getBeersByStyle = () => {
    let styleArray = []
    this.state.fullBeersArray.forEach(beer => {
      if (beer.style) {
        if (!styleArray.includes(beer.style.name)) {
          styleArray.push(beer.style.name)
        }
      } else {
        return null
      }
    })
    // sort in alphabetically order
    let sortedByStyleArray = styleArray.sort((a, b) => {
      return a > b ? 1 : b > a ? -1 : 0
    })
    this.setState({
      beersByStyle: sortedByStyleArray,
    })
  }

  filterBeersByStyle = e => {
    if (e.target.value === '') {
      this.setState({
        beers: this.state.fullBeersArray,
      })
    } else {
      let filteredStyle = this.state.fullBeersArray.filter(beer => {
        if (beer.style) {
          return beer.style.name === e.target.value
        } else {
          return null
        }
      })
      this.setState({
        beers: filteredStyle,
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
                filterBeersByStyle={this.filterBeersByStyle}
                beersByStyle={this.state.beersByStyle}
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
