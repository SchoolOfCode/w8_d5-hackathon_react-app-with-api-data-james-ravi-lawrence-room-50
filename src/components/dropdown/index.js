import React from "react";
import Option from "../option"

function Dropdown({handleChange, options}) { 
  return (
    <div>
      <label htmlFor="Categories">Choose a joke category:</label>
      <select onChange={handleChange} name="categories" id="Categories">
      <Option value="random" text="Random"/>
      {options.map(function(item){
        const text=item[0].toUpperCase() + item.substring(1)
        return <Option key={item} value={item} text={text}/>
      })}
      
      </select>
    </div>
  );
}
export default Dropdown;
