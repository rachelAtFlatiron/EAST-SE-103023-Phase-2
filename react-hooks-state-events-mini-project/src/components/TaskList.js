import React, {useState} from "react";
import Task from "./Task";

function TaskList({tasks, handleDelete}) {
  
  // console.log(tasks)

  // const firstTask = tasks[0]

  return (
    <div className="tasks">
      {/*make this work for multiple tasks
      <Task {...firstTask} />
      */}

      {tasks.map((taskObject, index) => {
        return <Task 
        key={index} 
        {...taskObject}
        handleDelete={handleDelete}
        taskIndex={index} />
      })}
    </div>
  );
}

export default TaskList;
