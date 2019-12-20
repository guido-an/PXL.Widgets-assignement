import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import './BeerPage.css'

class BeerPage extends Component {
  state = {
    beer: null,
  }

  beerId = this.props.match.params.id

  getBeer = () => {
    axios
      .get(`/beers/${this.beerId}`)
      .then(beer => {
        this.setState({
          beer: beer.data,
        })
      })
      .catch(err => {
        console.log(err, 'err')
      })
  }

  componentDidMount() {
    this.getBeer()
  }
  render() {
    const beer = this.state.beer
    return (
      <section className="beer-page section-container">
       
        {beer ? (
          <div className="beer-wrapper shadow">
            {beer.labels && <img src={beer.labels.medium} alt={beer.name} />}
            <h1>{beer.name}</h1>
            {beer.abv && <span>Alcol: {beer.abv}</span>}
            <p>{beer.description}</p>
            <Link to="/">> View all beers</Link>
          </div>
        ) : (
          <p style={{ textAlign: 'center' }}>Beer coming...</p>
        )}
      </section>
    )
  }
}

export default BeerPage
