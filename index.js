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
});

// --------------------- //
console.log("");
console.log("Listening to port " + PORT);
console.log("Ctrl-c to stop");
console.log("");
// --------------------- //