import React from 'react';
import './productsDate.css';

export default function Pdate(props) {
const month = props.date.toLocaleString('en-US', { month: 'long' });
const day = props.date.toLocaleString('en-US', { day: '2-digit' });
const year = props.date.getFullYear();
    return (
        <div className="date">  
            <h2 className="month">{month}</h2>
            <h2 className="day">{day}</h2>
            <h2 className="year">{year}</h2>
        </div>
    );
}