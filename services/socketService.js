const http = require('http');
const socketIo = require('socket.io');
const { app } = require('../server');

const server = http.createServer(app);
const io = socketIo(server, {
    cors: {
        origin: '*',
    }
});

io.on('connection', (socket) => {
    console.log('User connected');

    // Emit a welcome message when a user connects
    socket.emit('message', 'Welcome to the WebSocket server!');

    // Listen for messages from clients
    socket.on('message', (message) => {
        console.log('Message received:', message);

        // Broadcast the message to all connected clients
        io.emit('message', message);
    });

    // Listen for disconnection
    socket.on('disconnect', () => {
        console.log('User disconnected');
    });
});

server.listen(8080, () => {
    console.log(`Server is running on port 8080`);
});

module.exports = {
    io
};
