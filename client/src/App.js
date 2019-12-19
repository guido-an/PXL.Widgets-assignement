import React, {useState, useEffect}  from 'react';
import './App.css';
import axios from 'axios';


const baseUrl = "http://localhost:5000/"

function App() {
  let [beers, setCurrentBeers] = useState([]);
  useEffect(() => {
    axios.get(baseUrl)
      .then(res => {
        
        setCurrentBeers((beers = res.data.data));
        console.log(beers, "test")
      })
      .catch(err => {
        
        console.log(err, "err")
      });
   
  }, []);

  return (
    <div>
      <h1>HOME</h1>
      {beers.map((beer, index) => {
        return <p>{beer.name}</p>
      })}
    </div>
  );
}

export default App;
