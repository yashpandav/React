import './App.css';
import Compo from './first_compo/compo'
import Sec_Comp from './first_compo/second_compo';

function App() {

  const arr = [
    {
      date : "22" , 
      month : "afaas",
      year : "2423"
    } , 
    {
      date : "213" , 
      month : "afsfdadfaas",
      year : "23"
    } , 
    {
      date : "656" , 
      month : "gnjfg",
      year : "222"
    }
  ];

  return (
    <div>
      <Compo name = "Yash Panadv" ></Compo>
      <Compo name = "Daksh Panadv" ></Compo>
      <Compo name = "Kaushik Panadv" ></Compo>
      <Compo name = "Kirtan Panadv" ></Compo>
      <hr></hr>
      <Sec_Comp date = {arr[0].date} month = {arr[0].month} year = {arr[0].year}></Sec_Comp>     
      <Sec_Comp date = {arr[1].date} month = {arr[1].month} year = {arr[1].year}></Sec_Comp>
      <Sec_Comp date = {arr[2].date} month = {arr[2].month} year = {arr[2].year}></Sec_Comp>

    </div>
  );
}

export default App;
