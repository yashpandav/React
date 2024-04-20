import './items.css';
import Card from './card.js';
import Pdate from './productsDate.js';
import React from 'react';
import { useState } from 'react';   
export default function Item(props){

    const [title , setItem] = useState(props.title);

    function eventHandle(){
        console.log(title);
        setItem('other');
    }

    return(
        <Card className = "item_card">
            <Pdate date = {props.date}></Pdate>
            <div className = "p_title">
                <h2>{title}</h2>  
                <h4>{props.amount}</h4>
                <button type='btn' onClick={eventHandle}>Click Me</button>
            </div>
        </Card> 
    );
}   