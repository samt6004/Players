import React from "react";
import "./styles.css";
import Board from "./board";
import Player from "./player";
import DraggableElement from "./draggableElement";

export default function App() {
  const addPlayer = () => {};

  return (
    <div className="App">
      <div>
        <h1>Hello CodeSandbox</h1>
        <input type="text" placeholder="name" />
        Team 1
        <input type="checkBox" placeholder="team" />
        <input type="button" value="addPlayer" onClick={addPlayer} />
      </div>
      <Board />
      <DraggableElement render={<Player name="dddd" />} />
    </div>
  );
}
