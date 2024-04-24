import React, { useState } from "react";

export default function Card({ tour, removeCard }) {
    const [readMore, setReadMore] = useState(false);

    const toggleReadMore = () => {
        setReadMore(!readMore);
    };

    const details = readMore ? tour.info : `${tour.info.substring(0, 200)}...`;

    return (
        <div className="main-info">
            <img src={tour.image} alt={tour.name} />
            <div className="details">
                <h3>{tour.name}</h3>
                <h3>{tour.price}</h3>
            </div>
            <div className="info">
                <p>
                    {details}
                    <span onClick={toggleReadMore}>
                        {readMore ? " Show Less" : " Show More"}
                    </span>
                </p>
            </div>
            <button type="button" onClick={() => removeCard(tour.id)}>
                Not Interested
            </button>
        </div>
    );
}
