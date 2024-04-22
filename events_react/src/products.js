import './products.css';
import Card from './card.js';
import Item from './items.js';
import React from 'react';
import { useState } from 'react';

function Product(props){
    
    const [title , setTitle] = useState(props.title);

    function eachData(obj){
        obj.title = 'Changed';
        setTitle('Changed');
        console.log("THIS IS INSIDE A PROUCT.JS");
        console.log(obj);
        props.productCall(obj);
    }

    return(
        <Card className = "products">
            <Item title = {props.items[0].title} amount = {props.items[0].amount} date = {props.items[0].date} data = {eachData}></Item>
            <Item title = {props.items[1].title} amount = {props.items[1].amount} date = {props.items[1].date} data = {eachData}></Item>
            <Item title = {props.items[2].title} amount = {props.items[2].amount} date = {props.items[2].date} data = {eachData}></Item>
            <Item title = {props.items[3].title} amount = {props.items[3].amount} date = {props.items[3].date} data = {eachData}></Item>
        </Card> 
    );
}


export default Product;