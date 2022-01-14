
import './App.css';
import {useEffect, useState} from "react";
import Button from "./components/button"

function App() {

const [joke,setJoke] = useState("");


  async function fetchData(){
    const response = await fetch('https://api.chucknorris.io/jokes/random')
    const data = await response.json();
    setJoke(data.value);
  }
  useEffect(() =>{
    fetchData();
  },[])

  function jokeGetter(){
     fetchData();
  }


return(
  <div>
      <h1>Chuck Norris Joke Generator</h1>
      <Button handleClick= {jokeGetter} buttonText = "Get Random Joke"/>
      <p>{joke}</p>   
  </div>
  
)
   
}

export default App;
