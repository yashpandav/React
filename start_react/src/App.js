import './App.css';
import Compo from './first_compo/compo';
import Sec_Comp from './first_compo/second_compo'

function App() {
  return (
    <div>
      <Sec_Comp className = "parent">
        <Compo className = "child"></Compo>
      </Sec_Comp>
    </div>
    
  );
}

export default App;
