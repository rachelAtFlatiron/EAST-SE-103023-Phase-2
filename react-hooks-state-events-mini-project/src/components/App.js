import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
// console.log("Here's the data you're working with");
// console.log({ CATEGORIES, TASKS });

function App() {
  //to be replaced with a fetch
  const [tasks, setTasks] = useState(TASKS)

  //lifting state of selected up here
  const [selected, setSelected] = useState("All")

  const handleSelection = (category) => {
    // console.log("handle click for " + category)
    setSelected(category)
  }

  //because we need our form to update tasks, we need to pass
  // it a handler, so it can pass a new task, up here!
  const addNewTask = (newTask) => {
    console.log("adding new task to our array")
    setTasks([...tasks, newTask])
  }

  //use selected variable to filter tasks
  const filteredTasks = tasks.filter(task => {
    // return true => keep the task
    if (selected === "All") { return true }
    //if my task is the right category
    return task.category === selected
  })

  //Using Text
  const handleDelete = (text) => {
    //takes in a task, and deletes it from our array
    // console.log("handle delete called for: " + text)
    //find the array element which has this text, then remove it.
    const newTasks = tasks.filter((task) =>{
      // should i delete this task ?
      console.log("filtering " + task.text + " for " + text)
      console.log(task.text !== text)
      return task.text !== text
    })
    console.log(newTasks)
    setTasks(newTasks)
  }

  
  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} selected={selected} handleClick={handleSelection}/>
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={addNewTask}/>
      <TaskList tasks={filteredTasks} handleDelete={handleDelete} />
    </div>
  );
}

export default App;

//Using index
// const handleDelete = (index) => {
//   //takes in a task, and deletes it from our array
//   console.log("handle delete called for: " + index)
//   //find the array element which has this text, then remove it.
//   // const newTasks = tasks.filter((task) =>{
//   //   // should i delete this task ?
//   //   return task.text !== text
//   // })
//   let newTasks = tasks
//   const removed = newTasks.splice(index, 1)
//   console.log(removed)
//   console.log(newTasks)
//   // const newTasks = tasks.pop(index)
//   setTasks((tasks) => newTasks)
// }