const express = require('express');
const app = express();
const port = 3001;
const unirest = require("unirest");


app.get('/api/associations/:word', (req, res) => {
  const request = unirest("GET", "https://api.punkapi.com/v2/beers");   // Load API endpoint.
  console.log(`Received request, word is:${req.params.word}`);          
  request.query({ "beer_name": req.params.word });                      // Call API with proper query tag.

  request.end(function (response) {
    console.log("~-------------Response------------~");
    console.log(response.body);
    if (response.error) throw new Error(response.error);
    res.json(response.body || {});                        // Return data in JSON format.
  });
});
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});