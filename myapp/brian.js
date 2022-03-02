const express = require('express')
const app = express()
const port = 3000

const puppet = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://example.com');
  await page.screenshot({ path: 'example.png' });

  await browser.close();
})();


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
