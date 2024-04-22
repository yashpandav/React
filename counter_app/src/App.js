import './App.css';
import { useState } from 'react';

function App() {

  const [count , setCount] = useState(0);

  function decreseHandler(){
    setCount(count - 1);  
  }

  
  function increseHandler(){
    setCount(count + 1);
  }

  function resetHandler(){
    setCount(0);
  }

  return (
    <div id='main'>
      <h1>Increment 😁 Decrement</h1>
      <div id='container'>
        <button type='button' onClick={decreseHandler}>-</button>
        <div>
          <h3>{count}</h3>
        </div>
        <button type='button' onClick={increseHandler}>+</button>
      </div>
      <button type='button' onClick={resetHandler}>Reset</button>
    </div>
  );
}

export default App;
