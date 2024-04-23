import './App.css';
import { useState } from 'react';
import Compo from './compo.js';

function App() {
  const [count , setCount] = useState(0);

  function decreaseHandler(count){ 
    setCount(count - 1);  
  }
  
  function increaseHandler(count){
    setCount(count + 1);
  }

  function resetHandler(){
    setCount(0);
  }

  return (
    <div id='main'>
      <h1>Increment 😁 Decrement</h1>
      <Compo increase={increaseHandler} decrease={decreaseHandler} total={count}/>
      <button type='button' onClick={resetHandler}>Reset</button>
    </div>
  );
}

export default App;