import "./App.css";
import { useEffect, useState } from "react";
import Button from "./components/button";
import Dropdown from "./components/dropdown";

function App() {

  const [joke, setJoke] = useState("");

  const [category, setCategory] = useState("random");
  const [categoryList, setCategoryList] = useState([]) // 1. Set a state for the categories, start it as an empty array..

  async function fetchCategories(){
    const response = await fetch(`https://api.chucknorris.io/jokes/categories`);
    const data = await response.json();
    setCategoryList(data) //3. Sets the categoryList state to be whatever was returned in the json..
  }

  useEffect(() => {
    fetchData();
    fetchCategories(); //2. Gets called once when page is loaded
  }, []);

  async function fetchData() {

    if(category === "random"){
      const response = await fetch("https://api.chucknorris.io/jokes/random");
      const data = await response.json();
      return(data.value);
    }
    
    const response = await fetch(
      `https://api.chucknorris.io/jokes/random?category=${category}`
    );
    const data = await response.json();
    return (data.value);

  }

  async function jokeGetter() {
    const joke = await fetchData();
    setJoke(joke)
  }

  function handleChange(event){
    const category = event.target.value;
    setCategory(category)
  }

  //3. Send the state as a prop to Dropdown component
  return (
    <div>
      <h1>Chuck Norris Joke Generator</h1>
      <Button handleClick={jokeGetter} buttonText="Get Joke"/>
      <Button handleClick={jokeGetter} buttonText="todo.." />
      <Dropdown handleChange={handleChange} options={categoryList}/>
      <p>{joke}</p>
    </div>
  );
}

export default App;
