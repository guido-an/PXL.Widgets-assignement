import React, {useState, useEffect}  from 'react';
import './App.css';
import axios from 'axios';
import Home from './pages/Home'



function App() {
  let [beers, setCurrentBeers] = useState([]);
  let [fullBeersArray, setFullBeersArray] = useState([])
  const baseUrl = "http://localhost:5000/"
  
  useEffect(() => {
    axios.get(baseUrl)
      .then(res => {
        setCurrentBeers((beers = res.data.data));
        setFullBeersArray((fullBeersArray = res.data.data));
      })
      .catch(err => {
        console.log(err, "err")
      });
  }, []);

  const searchByName = e => {
    let filteredBeers = fullBeersArray.filter(beer => {
      return beer.name
        .toUpperCase()
        .includes(e.target.value.toUpperCase());
    });
    setCurrentBeers((beers = filteredBeers));
  };

  return (
      <Home 
      beers={beers} 
      searchByName={searchByName}
      />   
    
  );
}

export default App;
