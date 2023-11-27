import React, {useState} from "react";

function NewTaskForm({categories, onTaskFormSubmit}) {
  const [text, setText] = useState("")
  const [category, setCategory] = useState("Code")

  const handleCategoryChange = (e) => {
    console.log(e.target.value)
    setCategory(e.target.value)
  }
  const handleSubmit = (e) => {
    e.preventDefault()

    // add a new task
    const newTask = {
      text:text,
      category:category
    }

    onTaskFormSubmit(newTask)
    // clear the form
    setText("")
  }

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input type="text" name="text" value={text} onChange={e => {
          setText(e.target.value)
          // console.log("we are setting the text state variable now! to this val: " + e.target.value)
        }
        } />
      </label>
      <label>
        Category
        <select name="category" onChange={handleCategoryChange}>
          {/* render <option> elements for each category here */}
          {categories.map(category => {
            
            if (category === "All") return ""

            return <option value={category} key={category}>{category}</option>
          })}
        </select>
      </label>
      <input  type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
