import React from 'react'

function Header ({darkMode, toggleDarkMode}) {
  //without destructuring
  // const prop1 = props.prop1

  //with destructuring
  // i dont have to do anything
  
  return (
    <header>
      <h1>
        <span className='logo'>{'//'}</span>Portfolio Showcase
      </h1>
      {/* ✅ 1c.  Inside the `Header` component, invoke the callback function to update state in `App` */}
      <button onClick={toggleDarkMode}>
        {darkMode ? 'Light Mode' : 'Dark Mode'}
      </button>
    </header>
  )
}
export default Header
