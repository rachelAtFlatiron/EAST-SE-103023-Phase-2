import { useState } from "react";
import Header from "./components/Header";
import ProjectsContainer from "./components/projects/ProjectsContainer";

function App() {
	const [darkMode, setDarkMode] = useState(true);
	const toggleDarkMode = () => {
		setDarkMode((prevDarkMode) => !prevDarkMode);
	};
	

	return (
		<div className={darkMode ? "App" : "App light"}>
			<Header darkMode={darkMode} toggleDarkMode={toggleDarkMode}/>
			<ProjectsContainer/>
		</div>
	);
}

export default App;

/*
inverse flow

1. parent component
- create state
- create callback that updates state

2. parent -> child
- pass down state
- pass down callback

3. child -> parent
- child triggers callback (through an event)
- results in setState in parent
- results in a state change -> re-render
*/
