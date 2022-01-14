import React from "react";

function Dropdown({handleChange, options}) { 
  return (
    <div>
      <label htmlFor="Categories">Choose a joke category:</label>
      <select onChange={handleChange} name="categories" id="Categories">
      {options.map(function(item){
        console.log(item)
      })}
      </select>
    </div>
  );
}
export default Dropdown;
