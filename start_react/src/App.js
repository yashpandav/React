import './App.css';
import Compo from './first_compo/compo'
import Sec_Comp from './first_compo/second_compo';

function App() {
  return (
    <div>
      <Compo></Compo>
      <Sec_Comp></Sec_Comp>
      <div className="App">
        <h1>Hello React</h1>
      </div>
    </div>
  );
}

export default App;
