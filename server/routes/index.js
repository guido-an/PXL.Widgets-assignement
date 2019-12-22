const express = require('express')
const router = express.Router()
const axios = require('axios')
const differenceInDays = require('date-fns/differenceInDays')

let beersCache = { beers: [], beerStyles: [], timeStamp: null }

router.get('/beers', (req, res) => {
  if (
    beersCache.beers.length === 0 ||
    differenceInDays(new Date(), beersCache.beers.timeStamp) >= 1
  ) {
    axios
      .get(`http://api.brewerydb.com/v2/beers/?key=${process.env.API_KEY}`)
      .then(beers => {
        beersCache = { beers: beers.data.data, timeStamp: new Date(), beerStyles: getBeerStyles(beers.data.data)  }
        res.status(200).json({ beers: beersCache.beers, beerStyles: beersCache.beerStyles })
      })
      .catch(err => {
        res.send(err)
      })
  } else {
    res.status(200).json({ beers: beersCache.beers, beerStyles: beersCache.beerStyles })
  }
})

router.get('/beers/:id', (req, res) => {
  if (
    beersCache.beers.length === 0 ||
    differenceInDays(new Date(), beersCache.beers.timeStamp) >= 1
  ) {
    axios
      .get(
        `http://api.brewerydb.com/v2/beer/${req.params.id}/?key=${process.env.API_KEY}`
      )
      .then(beers => {
        res.status(200).json(beers.data.data)
      })
      .catch(err => {
        res.send(err)
      })
  } else {
    const beer = beersCache.beers.find(myBeer => myBeer.id === req.params.id)
    res.status(200).json(beer)
  }
})

function getBeerStyles (beers) {
  const styleArray = []
  beers.forEach(beer => {
    if (beer.style) {
      if (!styleArray.includes(beer.style.name)) {
        styleArray.push(beer.style.name)
      }
    } else {
      return null
    }
  })
  return styleArray.sort((a, b) => {
    return a > b ? 1 : b > a ? -1 : 0
  })
}

module.exports = router
