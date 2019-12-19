require('dotenv').config();

const express = require('express');
const app = express();
const cors = require("cors");



// app.use(cors({
//     origin: ["http://localhost:3000/"],
//     credentials: true
// }));

app.use(cors({
  origin: [process.env.CLIENT_URL],
  credentials: true
}));


const mainRoutes = require('./routes/index');
app.use('/', mainRoutes);

app.listen(5000, () => {
  console.log('Beers app listening on port 5000!')
});

module.exports = app;