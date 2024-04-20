import './card.css';
import React from 'react';

export default function Card(props){
    const cla = 'Card_' + props.className;
    return (
        <div className = {cla}>
            {props.children}
        </div>
    );
}
