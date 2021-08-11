// const express = require("express")
// const app=express()
// const http=require("http")

// const server = http.createServer(app);

// app.get("/",(req))

// server.listen(4000, () => {
//     console.log("Now listening on port 4000");
// })

const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);
var path = require('path');
const viewPath = (path.join(__dirname, '//index.html')).replace(/\\/g, '/')


app.get('/', (req, res) => {   
  res.sendFile(viewPath);
});

// io.on('connection', (socket) => {
//     console.log('a user connected');
//   });

//   io.on('connection', (socket) => {
//     console.log('a user connected');
//     socket.on('disconnect', () => {
//       console.log('user disconnected');
//     });
//   });

  io.on('connection', (socket) => {
    socket.on('chat message', (msg) => {
      //console.log('message: ' + msg);
      io.emit('chat message', msg);
    });
  });

 // io.emit('some event', { someProperty: 'some value', otherProperty: 'other value' });


server.listen(4000, () => {
  console.log('listening on *:4000');
});

