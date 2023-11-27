import React, {useState} from "react";

function CategoryFilter({categories, selected, handleClick}) {
  //state variable to keep track of which button is selected
  

  
  // console.log(categories)
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {/* render <button> elements for each category here */}
      {categories.map((category) => 
        <button 
          onClick={() => handleClick(category)} 
          key={category}
          className={selected === category ? "selected" : ""}
          >
          {category}
        </button>
      )}
    </div>
  );
}

export default CategoryFilter;
