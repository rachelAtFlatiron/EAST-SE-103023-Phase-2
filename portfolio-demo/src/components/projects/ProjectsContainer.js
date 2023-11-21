import { useState } from "react";
import ProjectList from "./ProjectList";
import ProjectFilter from "./ProjectFilter";
import ProjectForm from "./ProjectForm";
import projectsImport from "./projects";

function ProjectContainer () {
	//State
    const [phaseState, setPhase] = useState(0);
	const [projects, setProject] = useState(projectsImport)

    //Handlers
    function updatePhaseNumber(phaseNumber) {
		setPhase(phaseNumber);
	}

    //Return JSX
    return (
    <div>
        <ProjectForm/>
        <ProjectFilter updatePhase={updatePhaseNumber} />
        <ProjectList projects={projects} phaseState={phaseState} />
    </div>
    )
}

export default ProjectContainer
