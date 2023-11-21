import React from "react";
import { NavLink } from 'react-router-dom'

// ✅ 4. Add `NavLink`'s throughout the site.
// ✅ 4a. Add `NavLink`s in `Header`.
// ✅ 4b. In `Home` add `NavLink` to button `View All Projects`.  Direct it to `/projects`.
function Header({ updateDarkMode, darkMode }) {
	return (
		<header>
			<h1>
				<span className="logo">{"//"}</span>
				Project Showcase
			</h1>
			<button onClick={updateDarkMode}>{darkMode ? "Light Mode" : "Dark Mode"}</button>
			<NavLink to={'/'} className="button">
				Home
			</NavLink>
			<NavLink className="button" to={"/about"}>
				About
			</NavLink>
			<NavLink className="button" to={"/new"}>
				New Project
			</NavLink>
			<NavLink className="button" to={"/projects"}>
				All Projects
			</NavLink>
		</header>
	);
}

export default Header;