const express = require('express')
const app = express()
const port = 3000

// Hello world program in Javascript on the NodeJS framework.
app.get('/', (req, res) => {
  res.send('Hello World!');
})

app.get('/demo', (req, res) => {
    res.send('This is a Nodejs demo by the Beeroscope team.');
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})