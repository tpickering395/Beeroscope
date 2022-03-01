const express = require('express')
const app = express()
const port = 3000

// User declaration in Javascript on the NodeJS framework.
app.get('/', (req, res) => {
  res.send('My name is Kylan!');
})

app.get('/demo', (req, res) => {
    res.send('This is a Nodejs demo by the Beeroscope team.');
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})