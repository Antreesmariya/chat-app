const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

const PORT = 3000;

app.use(express.static('public'));

io.on('connection', (socket) => {
  console.log('A user connected');

  // Listen for chat messages from clients
  socket.on('chat message', (msg) => {
    io.emit('chat message', msg);
  });

  socket.on('disconnect', () => {
    console.log('A user disconnected');
  });
});

// Start the server
http.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
