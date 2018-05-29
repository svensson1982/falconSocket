let app = require('express')();
let http = require('http').Server(app);
let io = require('socket.io')(http);

io.on('connection', (socket) => {

    // Log whenever a user connects
    console.log('user connected');

    // When we receive 'data' from our client, we send it back to our client
    // using `io.emit()`
    socket.on('addData', (data) => {
        io.emit('addData',  data);
    });

    // When we receive 'data' from our client, we send it back to our client
    // using `io.emit()`
    socket.on('addPoints', (data) => {
        io.emit('addPoints',  data);
    });

});

// Initialize our websocket server on port 5000
http.listen(5000, () => {
    console.log('started on port 5000');
});
