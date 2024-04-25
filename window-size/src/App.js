import './App.css';
import { useState } from 'react';

function App() {

    const [height , heightState] = useState(window.innerHeight);
    const [width , widthState] = useState(window.innerWidth);


    window.addEventListener('resize' , () => {
      heightState(window.innerHeight);
      widthState(window.innerWidth);
    })

  return (
    <div>
      <p>THIS IS A WIDTH {width} AND THIS IS A {height}</p>
    </div>
  );
}

export default App;
