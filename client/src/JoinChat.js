import React, { useState } from "react";
import "./JoinChat.css";
import icon from "./chat-pixel.png";

function JoinChat({ socket, userInfo }) {
  const [username, setUsername] = useState("");
  const [room, setRoom] = useState("");

  const joinRoomHandler = () => {
    if (username !== "" && room !== "") {
      socket.emit("join_room", room);
      userInfo(username, room);
    }
  };

  return (
    <div className="container">
      <form>
        <header>
          <h3>Join Chat</h3>
          <img src={icon} alt="chat-icon" height={25} />
        </header>
        <input
          type="text"
          placeholder="Your name"
          onChange={(event) => {
            setUsername(event.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Create a Room ID"
          onChange={(event) => {
            setRoom(event.target.value);
          }}
        />
        <button onClick={joinRoomHandler}>Join A Room</button>
      </form>
    </div>
  );
}

export default JoinChat;
