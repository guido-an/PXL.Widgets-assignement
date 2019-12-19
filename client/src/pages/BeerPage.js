import React, {Component} from 'react';
import axios from 'axios';

class BeerPage extends Component {
  state = {
    beer: null,
  };

  beerId = this.props.match.params.id;

  getBeer = () => {
    axios
      .get(`/${this.beerId}`)
      .then(beer => {
        this.setState({
            beer: beer.data
        })
      })
      .catch(err => {
        console.log(err, 'err');
      });
  };

  componentDidMount(){
    this.getBeer()
  }
  render() {
      console.log(this.state.beer)
      const beer = this.state.beer
    return (
      <div>
          {beer ? (
              <div>
              {beer.labels && (<img src={beer.labels.large}/>)}
            <h1>{beer.name}</h1>
            <p>Alcol: {beer.abv}</p>
            <p>{beer.description}</p>
              </div>
            
          ) : (
              <p>Beer coming...</p>
          )}
       
      
        
      </div>
    );
  }
}

export default BeerPage;
