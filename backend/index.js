const app = require('express');
const httpServer = require('http').createServer(app);
const io = require('socket.io')(httpServer, {
    cors: true,
    origins: ["*"],
    allowEIO3: true
});

// const { createGame } = require('./util/words');

io.on("connection", (socket) => {
    console.log("a user connected");
    //socket emit
    // socket.emit('message', 'Hey i just connected')
    // socket.broadcast.emit('message', 'hi this message is send to everyone except sender')
    // io.emit('this is send to everyone')
    // socket.join('here is a unique id for the room')
    // socket.to('room unique id').emit('message', 'this message is send to everyone in the room except the sender')
    // io.to('room unique id').emit('message', 'this message is send to everyone in the room')
    socket.on('joinGame', ({ gameId }) => {
        socket.join(gameId);
        console.log("a player joined the room " + gameId);
        socket.to(gameId).emit('joinGame', "A player joined the game!");
    })

})
const PORT = process.env.PORT || 3000;
httpServer.listen(PORT, () => {
    console.log('Server is listenning on Port: ', PORT)
})