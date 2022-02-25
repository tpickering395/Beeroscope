const express = require('express')
const app = express()
const port = 3000


app.get('/', (req, res) => {
  res.send('Hello World!');
})

app.get('/thomas', (req, res) => {
  res.send('Hello! My name is Thomas Pickering. I am a member of the Beeroscope team.');
})

app.get('/demo', (req, res) => {
    res.send('This is a Nodejs demo by the Beeroscope team.');
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})