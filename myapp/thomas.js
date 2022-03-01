const express = require('express')
const app = express()
const server = require('http').createServer(app)
const io = require('socket.io')(server)
const port = 3000



io.on('connection', (socket) => {
    console.log('A user has connected.')
    socket.on('disconnect', () => {
        console.log("A user has disconnected.")
    })
 })




app.get('/', (req, res) => {
    res.sendFile(__dirname + '/thomas_index.html');
})

app.get('/thomas', (req, res) => {
  res.send('Thomas Pickering\'s Page');
})

app.get('/demo', (req, res) => {
    res.send('This is a Nodejs demo by the Beeroscope team.');
})

server.listen(port, () => {
  console.log(`Server is listening on Port #:${port}`);
})