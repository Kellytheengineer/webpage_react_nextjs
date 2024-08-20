"use client";

import { useState, useEffect } from 'react';
import styles from './Review.module.css'

/*Someone clicks a button which changes the state of "selectedCountry".
When the "selectedCountry" state changes the component will re-render and if the  useEffect depends on that state it will trigger the useEffect hook to run.
That useEffect could run a fetch request.
Pass the "selectedCountry" state as part of the request so you make a request that asks for data specific to that country.
Once the data returns from fetch - store it in the second bit of state that is meant to hold reviews.
The component will re-render (because you updated that second bit of state) and show the review
};*/ 

const Reviews = () => {
    const [buttonStatuses, setButtonStatuses] = useState({
        scotland: false,
        wales: false,
        england: false,
    });

    function handleButtonClick(button) {
        setButtonStatuses(prevStatuses => ({
            ...prevStatuses,
            [button]: !prevStatuses[button],
        }));
    }

    const[selectedButton, setSelectedButton]=useState(null);
    const[reviewData, setReviewData]=useState(null);
    
    console.log(reviewData)
    
    useEffect(()=>{
        if(selectedButton){
            fetch(`https://seal-app-336e8.ondigitalocean.app/reviews?country=${selectedButton}`)
                .then(Response=>Response.json())
                .then(data=> setReviewData(data))
    }
},[selectedButton]);
function selectButton(country){
    setSelectedButton(country);
}

    return (
        <div>
            <button
                 onClick={() => {
                    selectButton("scotland");
                    handleButtonClick("scotland");
                }}
                className={buttonStatuses.scotland ? styles.clickedButton : ''}
            >
                Scotland
            </button>
            <button
                 onClick={() => {
                    selectButton("wales");
                    handleButtonClick("wales");
                }}
                className={buttonStatuses.wales ? styles.clickedButton : ''}
            >
                Wales
            </button>
            <button
                 onClick={() => {
                    selectButton("england");
                    handleButtonClick("england");
                }}
                className={buttonStatuses.england ? styles.clickedButton : ''}
            >
                England
            </button>
        </div>
    );
};

export default Reviews;

