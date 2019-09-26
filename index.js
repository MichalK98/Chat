const express = require("express");
const compression = require("compression");

let PORT = 9000;
let app = express();

app.use(compression());
app.use("/dist", express.static("dist"));
app.use(express.static("public"));

app.get("/", (req, res) => {
    res.render('index');
});

server = app.listen(PORT);

const io = require('socket.io')(server);

io.on('connection', (socket) => {
    console.log('New user connected!');
    socket.on('new_username', (data) => {
        io.sockets.emit('new_username', {username : data.username});
        this.username = data.username;
    });

    socket.on('new_message', (data) => {
        // io.sockets.emit('new_message', {message : data.message, username : this.username});
        socket.broadcast.emit('new_message', {message : data.message, username : data.username});
        console.log("boardcast", data)
    });
    socket.on('message', (data) => {
        socket.emit('message', {message : data.message, username : data.username});
        console.log("me", data);
    });
});



// --------------------- //
console.log("");
console.log("Listening to port " + PORT);
console.log("Ctrl-c to stop");
console.log("");
// --------------------- //