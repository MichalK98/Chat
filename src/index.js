import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));

import socket from "./ws";

socket.on("connect", () => {
    console.log("connected to server!");
});