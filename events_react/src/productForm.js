import './form.css';    
import React from 'react';
import { useState } from 'react';

export default function ProductForm(){

    const [newTitle , setTitle] = useState('');
    const [newDate , setDate] = useState('');
    
    function newTitleHandler(event){
        console.log(event.target.value);
        setTitle(event.target.value);
    }

    function newDateHandler(event){
        console.log(event.target.value);
        setDate(event.target.value);
    }

    function submitHandler(event){
        event.preventDefault(); 

        const fullProduct = {
            title : newTitle,
            date : newDate
        }

        console.log(fullProduct);

        setTitle('');
        setDate('');
    }


    return(
        <form onSubmit={submitHandler}>
            <div>
                <label>Title : </label>
                <input type="text" value={newTitle} onChange={newTitleHandler}></input>
            </div>
            <div>
                <label>Date : </label>
                <input type="date" value={newDate} onChange={newDateHandler} min = '2020-01-01' max='2025-12-31'></input>
            </div>
            <button type="submit">Submit</button>
        </form>
    );
}