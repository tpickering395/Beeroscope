const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('test');
});

const fetchQuote = async () => {
  const importedModule = await import('beerq');
  const beerQuote = importedModule.BeerQuote("eng");
  theQuote = beerQuote.getRandomQuote();
  console.log(theQuote);
}
fetchQuote();

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});