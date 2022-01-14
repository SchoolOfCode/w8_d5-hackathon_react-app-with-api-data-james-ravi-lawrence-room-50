import "./App.css";
import { useEffect, useState } from "react";
import Button from "./components/button";
import Dropdown from "./components/dropdown";
import Chuck from './images/chuck.jpeg'

function App() {
  const [joke, setJoke] = useState("");

  const [category, setCategory] = useState("animal");

  async function fetchDataCategory() {
    const response = await fetch(
      `https://api.chucknorris.io/jokes/random?category=${category}`
    );
    const data = await response.json();
    setJoke(data.value);
  }

  async function fetchData() {
    const response = await fetch("https://api.chucknorris.io/jokes/random");
    const data = await response.json();
    setJoke(data.value);
  }
  useEffect(() => {
    fetchData();
  }, []);

  function jokeGetter() {
    fetchData();
  }

  return (
    <div class="box">
      <h2>Chuck Norris Joke Generator</h2>
      <img src={Chuck} height={200} width={200} />
      <p>{joke}</p>
      <Button handleClick={jokeGetter} buttonText="Get Random Joke" />
      <Dropdown /> 
    </div>
  );
}

export default App;
