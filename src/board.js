import React from "react";
import "./styles.css";
import field from "../imgs/field.jpg";

export default function Board() {
  return (
    <div className="board">
      <img
        src={field}
        alt="board"
        className="img-field"
        height={400}
        width={400}
        rotate={45}
      />
    </div>
  );
}
