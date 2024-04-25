import React from "react";
import './spinner.css';


export default function Spinner () {
    return(
        <div>
            <div className="spinner"></div>
            <p style={{color : "whitesmoke" , fontSize : "20px"}}>Loading...</p>
        </div>
    )
}