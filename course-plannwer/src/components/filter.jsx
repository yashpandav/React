import React from "react";
import './btn.css';

export default function Filter(props){
    const filterData = props.filterData;
    const filter = props.filter;
    const setFilter = props.setFilter;

    function filterHandler (data){
        setFilter(data);
    }

    return(
        <div id="filterData">
            {filterData.map((data) => {
                return <button className="btn" key={data.id} onClick = {() => {filterHandler(data.title)}}>{data.title}</button>;
            })}
        </div>
    );
}
