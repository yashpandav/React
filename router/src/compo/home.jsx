import { Outlet, useNavigate } from "react-router-dom";

export default function Home(){
    const navigate = useNavigate();

    function goHandler(){
        navigate("/about");
    }

    return (
        <div>
                <div>Home</div>
                <button onClick={goHandler}>About</button>
        </div>
    );
}