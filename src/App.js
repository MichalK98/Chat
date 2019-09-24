import React from 'react';
import './App.css';
import Chat from './components/chat.js';
import Channels from './components/channels.js';

function App() {
  return (
    <div className="App">
      <Channels/>
      <Chat/>
    </div>
  );
}

export default App;
