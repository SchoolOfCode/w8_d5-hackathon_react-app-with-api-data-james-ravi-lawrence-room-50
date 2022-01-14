import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from "react";

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

  function handleClick(){
     fetchData();
  }


return(
  <div>
      <h1>Chuck Norris Joke Generator</h1>
      <button onClick={handleClick}>click me</button>
      <p>{joke}</p>   
  </div>
  
)
   
}

export default App;
