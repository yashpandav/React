import React from "react";
import Card from "./card";
import { useState } from 'react';
import data from './data';

export default function Tour() {
    const [tours, setTours] = useState(data);

    function removeCardHandler(id) {
        const newTours = tours.filter(tour => tour.id !== id);
        setTours(newTours);
    }

    function refreshHandler(){
        setTours(data);
    }

    if(tours.length === 0){
        return(
            <div className="refresh">
                <h3>refresh</h3>
                <button type="button" onClick={refreshHandler}>
                    Refresh
                </button>
            </div>
        );
    }

    return (
        <div>
            {tours.map(tour => (
                <Card key={tour.id} tour={tour} removeCard={removeCardHandler} />
            ))}
        </div>
    );
}
