const express = require('express')
const router = express.Router()
const axios = require('axios')
const cors = require('cors')

router.get('/beers', cors(), (req, res) => {
  axios
    .get(`http://api.brewerydb.com/v2/beers/?key=${process.env.API_KEY}`)
    .then(beers => {
      res.status(200).json(beers.data.data)
    })
    .catch(err => {
      res.send(err)
    })
})

router.get('/beers/:id', (req, res) => {
  axios
    .get(`http://api.brewerydb.com/v2/beer/${req.params.id}/?key=${process.env.API_KEY}`)
    .then(beers => {
      res.status(200).json(beers.data.data)
    })
    .catch(err => {
      res.send(err)
    })
})

module.exports = router
