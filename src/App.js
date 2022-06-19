import './App.css';
import bot from "./images/leopold.png";
import refresh from "./images/refresh.png";
import Chat from "./Chat.js";
import React from 'react';

function refreshPage() {
  window.location.reload(false);
} 

function App() {
  
  return (
    <div>
      <div className="chatbox">
        <header>
          <p className='chat-name'>Leopold</p><br/>
          <p className='status'>Active now</p>
        <img className="refresh" onClick={refreshPage} src={refresh} alt="Refresh" />
        </header>
        <Chat/>
      </div>
      <img className="bot" src={bot} alt="Robot" />
    </div>
  );
}

export default App;
