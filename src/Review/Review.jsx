"use client";

import { useState , useEffect } from 'react';
import styles from '/Review/Review.css'
import Link from 'next/link';

/*Someone clicks a button which changes the state of "selectedCountry".
When the "selectedCountry" state changes the component will re-render and if the  useEffect depends on that state it will trigger the useEffect hook to run.
That useEffect could run a fetch request.
Pass the "selectedCountry" state as part of the request so you make a request that asks for data specific to that country.
Once the data returns from fetch - store it in the second bit of state that is meant to hold reviews.
The component will re-render (because you updated that second bit of state) and show the review
  function closeButton() {
        setButtonStatus(false)
    }*/

/*const Reviews = () => {
    const [buttonStatus, setButtonStatus ] = useState(false);
    function handleButtonClick() {
        setButtonStatus(!buttonStatus)
    }
  
    return (
     <div>
    <button onClick={handleButtonClick} {buttonStatus && className = {styles.clickedButton}}>Scotland</button>
    <button onClick={handleButtonClick} {buttonStatus && className = {styles.clickedButton}}>Wales</button> 
    <button onClick={handleButtonClick} {buttonStatus && className = {styles.clickedButton}}>England</button>
    </div>
    ) 
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

    return (
        <div>
            <button
                onClick={() => handleButtonClick('scotland')}
                className={buttonStatuses.scotland ? styles.clickedButton : ''}
            >
                Scotland
            </button>
            <button
                onClick={() => handleButtonClick('wales')}
                className={buttonStatuses.wales ? styles.clickedButton : ''}
            >
                Wales
            </button>
            <button
                onClick={() => handleButtonClick('england')}
                className={buttonStatuses.england ? styles.clickedButton : ''}
            >
                England
            </button>
        </div>
    );
};

export default Reviews;

