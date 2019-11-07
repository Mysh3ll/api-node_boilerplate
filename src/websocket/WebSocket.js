import Server from 'socket.io';

class WebSocket {
  createWebSocket(server) {
    this.io = Server(server);
  }

  listen() {
    this.io.on('connection', socket => {
      console.log('client connected');

      socket.on('disconnect', () => {
        console.log('user disconnected');
      });

      // socket.emit('message', 'some data'); // for only one user connected to the socket

      socket.on('message', message => {
        console.log('Message Received: ' + message);
        // this.io.emit('message', { type: 'new-message', text: message }); // for all users connected
        socket.emit('message', message); // for only one user connected to the socket
      });
    });
  }
}

const websocket = new WebSocket();

module.exports = { websocket };
