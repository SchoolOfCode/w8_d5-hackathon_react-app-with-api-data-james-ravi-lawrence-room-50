import React from "react";

function Dropdown() {
  return (
    <div>
      <label for="Categories">Choose a joke category:</label>

      <select name="categories" id="Categories">
        <option value="animal">Animal</option>
        <option value="career">Career</option>
        <option value="celebrity">Celebrity</option>
        <option value="dev">dev</option>
        <option value="explicit">Explicit</option>
        <option value="fashion">Fashion</option>
        <option value="food">Food</option>
        <option value="history">History</option>
        <option value="money">Money</option>
        <option value="movie">Movie</option>
        <option value="music">Music</option>
        <option value="political">Political</option>
        <option value="religion">Religion</option>
        <option value="science">Science</option>
        <option value="sport">Sport</option>
        <option value="travel">Travel</option>
      </select>
    </div>
  );
}
export default Dropdown;
