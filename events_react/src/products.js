import './products.css';
import Card from './card.js';
import Item from './items.js';
import React from 'react';

function Product(props){
    return(
        <Card className = "products">
            <Item title = {props.items[0].title} amount = {props.items[0].amount} date = {props.items[0].date}></Item>
            <Item title = {props.items[1].title} amount = {props.items[1].amount} date = {props.items[1].date}></Item>
            <Item title = {props.items[2].title} amount = {props.items[2].amount} date = {props.items[2].date}></Item>
            <Item title = {props.items[3].title} amount = {props.items[3].amount} date = {props.items[3].date}></Item>
        </Card> 
    );
}


export default Product;