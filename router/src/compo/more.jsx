import { useNavigate } from "react-router-dom"

export default function More(){

    const navigate = useNavigate();


    return<>
    <button onClick={() => {navigate("/")}}>home</button>
<div>More</div>
    </> 
}