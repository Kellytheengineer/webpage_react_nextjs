"use client";

import { useState, useReducer  } from 'react';


//defining the states required for the reducer
const initialState = {
  data: {
      fullName: '',
    },
    errorStatus: false
};

//create a reducer function
function reducer (state, action) {
  switch (action.type) {
    default:
      return state
  }
}




export default function Booking() {

  //old states
  const [ fullName, setFirstName ] = useState("");
  const [ error, setError ] = useState(false);

  // passing your initial state object 🙂
  const [ state, dispatch ] = useReducer(reducer, initialState);
  

  function handleChange(event){
    if (event.target.name==="fullName"){ 
      setFirstName(event.target.value)
      //replace setFirstname
      //replace with dispatch
    }}

    function handleSubmit(event) {
      event.preventDefault();
      if (!fullName){
          setError(true);
      }
      if (error) {
        setError(false)
      }
  }

    return (
      <main>
        <form onSubmit={(event) => handleSubmit(event)}>
        <fieldset>
          <ul>
             <li>
                <label for="fullName">Full Name</label>
                <input 
                  type="text" 
                  id="fullName" 
                  name="fullName" 
                  value={fullName} //replace fullname
                  onChange={(event)=>handleChange(event)}/>
            </li>
            </ul>
            </fieldset> 
            <fieldset> 
            <h1>Contact Information:</h1>
            <ul>
            </ul>
            </fieldset>  
            {error && <p> Value entered are not correct</p>} 
            <button>Request Design Consultation</button>     
            </form>
       <h1>Booking</h1>
      </main>
    );
  }



  // create a variable that holds the states that we previously created
  