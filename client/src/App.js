import { useState } from "react";
import "./App.css";
import { io } from "socket.io-client";

import Chat from "./Chat";
import JoinChat from "./JoinChat";

const socket = io.connect("http://localhost:3001");

function App() {
  const [user, setUser] = useState({ username: "", room: "" });

  const getUserInfo = (username, room) => {
    setUser({ username: username, room: room });
  };

  return (
    <div className="App">
      {user.username && user.room ? (
        <Chat socket={socket} username={user.username} room={user.room} />
      ) : (
        <JoinChat socket={socket} userInfo={getUserInfo} />
      )}
    </div>
  );
}

export default App;
