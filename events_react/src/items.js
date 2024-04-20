import './items.css';
import Card from './card.js';
import Pdate from './productsDate.js';
import React from 'react';

export default function Item(props){
    return(
        <Card className = "item_card">
            <Pdate date = {props.date}></Pdate>
            <div className = "p_title">
                <h2>{props.title}</h2>  
                <h5>{props.amount}</h5>
            </div>
        </Card> 
    );
}   