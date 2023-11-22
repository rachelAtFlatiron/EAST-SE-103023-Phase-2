import { useState, useEffect } from 'react'
import Header from "./components/Header";
import ProjectList from "./components/ProjectList";
import ProjectForm from "./components/ProjectForm";
//Replace this with a call to the server
// import projectsData from './projects'
const projectsUrl = "http://localhost:4000/projects"

// ✅ 1. Implement useEffect in App component to load projects
// ✅ 1a. Import the useEffect hook from the React library
function App() {
  console.log("App is rendering...")
  const [darkMode, setDarkMode] = useState(true)
  const [projects, setProjects] = useState([])
  const [newProjectAdded, setNewProjectAdded] = useState(1)

  const onNewProject = () => {
    setNewProjectAdded(newProjectAdded + 1)
  }
  // const [ counter, setCounter ] = useState(1)

  // useEffect(()=>{
  //   console.log("updating counter from: " + counter)
  //   setCounter(counter + 1)
  // }, [])
  // console.log("the value of counter is "+ counter)

  const fetchProjects = () => {
    console.log("value of new projects added:" + newProjectAdded)
    //make a fetch to get the projects
    console.log("Fetching projects from server...")
    fetch(projectsUrl)
    .then(r=> r.json())
    .then(projects => {
      console.log("saving projects to state")
      // ✅ 1c. Update projects state to the response from the server
      setProjects(projects)
    }).catch(error =>{
      //the server is down most likely.
      console.log("could not connect to server")
    })


    const cleanUpFunc = () => {
      console.log("clean up time!")
    }
    return cleanUpFunc
  }

  //Call fetch projects, 
  //once???
  // fetchProjects()
  //nope, not once. it happens over and over because of re-render

  // ✅ 1b. Use useEffect and make a GET request using the fetch method
  //fetchprojects is called only after the first render
  useEffect(fetchProjects, [newProjectAdded])

  // ✅ 3. Demonstrate the order of operations between rendering a component and running the side effect
  // ✅ - Place a console.log() inside the App component as well as the useEffect method
  // ✅ - Open up the devtools to observe when each phase of the component will
  // ✅ 4. Demonstrate useEffect dependency array with phaseState, searchQuery, and projects in ProjectList.js occur

  const updateDarkMode = () => {
    setDarkMode(prevDarkMode => !prevDarkMode)
  }

  const addProject = (project) => {
    setProjects([...projects, project])
  }
  // console.log("almost done rendering, returning jsx now...")
  return (
    <div className={darkMode ? "App" : "App light"}>
      <Header handleClick={updateDarkMode} darkMode={darkMode} />
      <ProjectForm onAdd={onNewProject} addProject={addProject} />
      <ProjectList projects={projects}/>
      {/* <button onClick ={fetchProjects}>Fetch the Projects</button> */}
    </div>
  );
}


export default App;
