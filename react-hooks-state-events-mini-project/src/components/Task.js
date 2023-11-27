import React from "react";

function Task({text, category, handleDelete}) {
  // console.log("task props:")
  // console.log(text + ", " + category)

  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button onClick={() => handleDelete(text)} className="delete">X</button>
    </div>
  );
}

export default Task;
