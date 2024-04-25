import Navbar from "./components/navbar";
import Card from "./components/card";
import { filterData , apiUrl} from "./data";
import Filter from "./components/filter";
import { useState , useEffect} from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Spinner from "./components/spinner";
import './components/app.css'

function App() {

  const [courses , setCourses] = useState(null);
  const [loading , setLoading] = useState(true);
  const [filter , setFilter] = useState("All");

  const getData = async () => {
    setLoading(true);
      try{  
        const fetched = await fetch(apiUrl);
        const value = await fetched.json();
        setCourses(value.data);
      }
      catch{
        toast.error("Something Went Wrong");
      }
      setLoading(false);
  }
  
  useEffect( () => {
    getData() 
  }
    , []
  );

  return (
    <div className='main' style={loading ? {display : "flex" , justifyContent : "center" , alignItems : "center"} : {}}>
      {
        loading ? <Spinner></Spinner> : <>
        <ToastContainer />
        <Navbar></Navbar>
        <Filter filterData = {filterData} filter = {filter} setFilter = {setFilter} ></Filter>
        <Card courses = {courses} filter = {filter}></Card>
        </>
      }      
      
    </div>
  );
}

export default App;
