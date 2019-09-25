import React from 'react';
import './App.css';
import Chat from './components/Chat';
import Channels from './components/channels';

function App() {
  return (
    <div className="App">
      <Channels/>
      <Chat/>
    </div>
  );
}

export default App;
