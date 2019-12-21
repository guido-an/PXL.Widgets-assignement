require('dotenv').config()

const express = require('express')
const app = express()
const cors = require('cors')
const path = require('path')

app.use(cors({
  origin: '*',
  credentials: true
}))

const mainRoutes = require('./routes/index')
app.use('/', mainRoutes)

app.use(express.static(path.join(__dirname, 'build')))

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'))
})

app.listen(process.env.PORT, () => {
  console.log('Beers app listening on port 5000!')
})

module.exports = app
