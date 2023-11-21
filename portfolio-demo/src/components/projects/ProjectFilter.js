


function ProjectFilter({updatePhase}) {
    return (
    <div className="filter">
        {/* ✅ 2c. Using inverse data flow, get the value of the phase from ProjectList UP to the App component */}
        {/* ✅ - Invoke the callback function from the onClick event listener */}
        <button onClick={() => updatePhase(0)}>All</button>
        <button onClick={() => updatePhase(5)}>Phase 5</button>
        <button onClick={() => updatePhase(4)}>Phase 4</button>
        <button onClick={() => updatePhase(3)}>Phase 3</button>
        <button onClick={() => updatePhase(2)}>Phase 2</button>
        <button onClick={() => updatePhase(1)}>Phase 1</button>
    </div>
    )
  }
  
  export default ProjectFilter