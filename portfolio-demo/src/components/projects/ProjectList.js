import { useState } from "react";
import ProjectListItem from "./ProjectListItem";

// ✅ 2. Refactor the phase filter component out of `ProjectList` and implement inverse data flow
// ✅ 2a. Move the `phase` state from `ProjectList` to `App`
function ProjectList({ projects, phaseState }) {

	const filteredProjects = projects.filter(
		(project) => phaseState === 0 || project.phase === phaseState
	);

	return (
		<section>
			<h2>Project List</h2>
			<ul className="cards">
				{filteredProjects.map((project) => (
					<ProjectListItem key={project.id} project={project} />
				))}
			</ul>
		</section>
	);
}

export default ProjectList;
