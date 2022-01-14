import React from "react";
import Option from "../option"

function Dropdown({handleChange, options}) { 
  return (
    <div>
      <label htmlFor="Categories">Choose a joke category:</label>
      <select onChange={handleChange} name="categories" id="Categories">
      {options.map(function(item){
        return <Option key={item} value={item} text={item[0].toUpperCase() + item.substring(1)}/>
      })}
      </select>
    </div>
  );
}
export default Dropdown;
