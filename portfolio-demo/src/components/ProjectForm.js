import { useState } from "react";
const projectsUrl = "http://localhost:4000/projects"

function ProjectForm({ onAdd, addProject }) {
	const formOutline = {
		name: "",
		about: "",
		link: "",
		image: "",
		phase: 0,
		claps: 0,
	};

	const [form, setForm] = useState(formOutline);

	const handleChange = (e) => {
		setForm({
			...form,
			[e.target.name]: e.target.value,
		});
	};

	//✅ 2. Persist the new project upon the ProjectForm submission
	const handleSubmit = (e) => {
		e.preventDefault();


		//✅ 2a. Send the new project data to the server using a POST fetch request
		const newProject = {...form, phase: parseInt(form.phase)}

		fetch(projectsUrl,{
			method: "POST",
			body: JSON.stringify(newProject),
			headers: {
				"Content-type": "application/json; charset=UTF-8"
			}
		})
		.then(r=>r.json())
		.then(serverProject => {
			//pessimistically render
			//this simply re-renders old projects (from prev fetch)
			// with the new project appended to the end.
			addProject(serverProject); 
			
			//trigger a re-fetch of all projects
			// onAdd()

			//clear the form
			setForm(formOutline)
		})

	};

	

	return (
		<section>
			<form
				className="form"
				autoComplete="off"
				onSubmit={(e) => handleSubmit(e)}
			>
				<h3>Add New Project</h3>

				<label htmlFor="name">Name</label>
				<input
					type="text"
					id="name"
					name="name"
					value={form.name}
					onChange={(e) => handleChange(e)}
				/>

				<label htmlFor="about">About</label>
				<textarea
					id="about"
					name="about"
					value={form.about}
					onChange={(e) => handleChange(e)}
				/>

				<label htmlFor="phase">Phase</label>
				<select
					name="phase"
					id="phase"
					value={form.phase}
					onChange={(e) => handleChange(e)}
				>
					<option value="">Pick a Phase</option>
					<option value="1">Phase 1</option>
					<option value="2">Phase 2</option>
					<option value="3">Phase 3</option>
					<option value="4">Phase 4</option>
					<option value="5">Phase 5</option>
				</select>

				<label htmlFor="link">Project Homepage</label>
				<input
					type="text"
					id="link"
					name="link"
					value={form.link}
					onChange={(e) => handleChange(e)}
				/>

				<label htmlFor="image">Screenshot</label>
				<input
					type="text"
					id="image"
					name="image"
					value={form.image}
					onChange={(e) => handleChange(e)}
				/>

				<button type="submit">Add Project</button>
			</form>
		</section>
	);
}

export default ProjectForm;
