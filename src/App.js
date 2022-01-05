import React, { useState } from 'react';
import './App.css';

function App() {
  const color = ["red", "green", "yellow", "blue", "pink", "black", "purple"];
  const [count,setCount] = useState(0)
  const [currentColor, setBG] = useState(0)

  function reset(){
    setCount(0)
    setBG(0)
  }

  document.addEventListener("keydown",reset,false);
  
  return (
    <div onClick={() => {
      setCount(count+1)
      setBG(currentColor===color.length-1 ? 0 : currentColor+1)
    }}
     style={{ backgroundColor: color[currentColor] }}
     className="App">
      <h1>{count}</h1>
      <h4>Click anywhere to add to your count! Press any key to reset.</h4>
    </div>
  );
}

export default App;
