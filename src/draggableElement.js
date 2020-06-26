import React from "react";
import "./styles.css";
import Draggable from "react-draggable";

export default function DraggableElement(props) {
  const onStart = () => {
    console.log("onStart ");
  };
  const onStop = () => {
    console.log("onStop ");
  };

  console.log("ddddd ", props.render);
  const dragHandlers = { onStart, onStop };
  return (
    <Draggable className="draggable" {...dragHandlers}>
      <div>{props.render}</div>
    </Draggable>
  );
}
