const express = require("express");
const compression = require("compression");

let PORT = 9000;
let app = express();

app.use(compression());
app.use("/dist", express.static("dist"));
app.use(express.static("public"));

app.listen(PORT);

console.log("");
console.log("Listening to port " + PORT);
console.log("Ctrl-c to stop");
console.log("");