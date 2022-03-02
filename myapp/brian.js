const express = require('express')
const app = express()
const port = 3000

const _ = require("lodash");

const nums = _.range(1, 9);
// => [1, 2, 3, 4, 5, 6, 7, 8, 9]

const chunks = _.chunk(nums, 3);
// => [[1, 2, 3], [4, 5, 6], [7, 8, 9]]

const right = _.takeRight(nums, 2);
// => [7, 8, 9]

app.get('/', (req, res) => {
  res.send('Here we go!');
})

app.get('/brianzeng', (req, res) => {
  res.send("Hi, I'm Brian and this is Team Beeroscope.");
})

app.get('/demo', (req, res) => {
    res.send('Beeroscope demo here.');
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})
