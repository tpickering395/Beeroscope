const express = require('express');
const app = express();
const port = process.env.PORT || 3001;
const unirest = require("unirest");
var request = require('request');


app.get('/api/associations/:word/:abv_lt/:abv_gt/:ibu_gt/:ibu_lt/:ebc_lt/:ebc_gt', (req, res) => {
  const request = unirest("GET", "https://api.punkapi.com/v2/beers");   // Load API endpoint.
  console.log(`Received request, word is:${req.params.word}`);          
  request.query({ "beer_name": req.params.word });                      // Call API with proper query tag.
  request.query({"abv_lt": req.params.abv_lt});
  request.query({"abv_gt": req.params.abv_gt});
  request.query({"ibu_gt": req.params.ibu_gt});
  request.query({"ibu_lt": req.params.ibu_lt});
  request.query({"ebc_lt": req.params.ebc_lt});
  request.query({"ebc_gt": req.params.ebc_gt});
  
  request.end(function (response) {
    console.log("~-------------Response------------~");
    console.log(response.body);
    if (response.error) throw new Error(response.error);
    res.json(response.body || {});                        // Return data in JSON format.
  });
});

app.use(express.static(__dirname + '/static/public/uploads'));

app.get('/api/beer/', (req, res) => {
  const request = unirest("GET", "https://api.punkapi.com/v2/beers/random");   // Load API endpoint.          

  request.end(function (response) {
    console.log("~-------------Response------------~");
    console.log(response.body);
    if (response.error) throw new Error(response.error);
    res.json(response.body || {});
  });
});

app.get('/api/horoscopes/:sign', (req, res) => {
  const request = unirest("POST", "https://aztro.sameerkumar.website/?sign=" + req.params.sign + "&day=today");   // Load API endpoint.
  console.log(`Received request, sign is:${req.params.sign}`);          

  request.end(function (response) {
    console.log("~-------------Response------------~");
    console.log(response.body);
    if (response.error) throw new Error(response.error);
    res.json(response.body || {});
	// Return data in JSON format.
  });
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});