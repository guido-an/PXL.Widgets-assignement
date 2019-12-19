const express = require('express');
const router = express.Router();
const axios = require('axios');
const cors = require('cors');

// router.get('/', cors(), (req, res, next) => {
//   axios.get('http://api.brewerydb.com/v2/beers/?key=659d5c6b8f3d2447f090119e48202fdb')
//   .then(beer => {
//     res.status(200).json(beer.data)
//     console.log(beer.data.length, "LENGTH")
//   })
//   .catch(err => {
//       debugger
//     res.send(err)
//       console.log(err)
//   })

//   });
router.get('/', (req, res) => {
  axios
    .get(`http://api.brewerydb.com/v2/beers/?key=${process.env.API_KEY}`)
    .then(beers => {
      res.status(200).json(beers.data);
    })
    .catch(err => {
      res.send(err);
    });
});

module.exports = router;
