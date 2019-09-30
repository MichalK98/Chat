import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducet from './reducers/rootReducer';

const store = createStore(rootReducet);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

import socket from "./ws";

socket.on("connect", () => {
    console.log("connected to server!");
});