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
    case "CHANGE_FORM_DATA":
      return {
        data: {
          ...state.data,
          [action.payload.name]: action.payload.value
        },
        errorStatus: state.error
        };
    default:
      return state;
  }
}

export default function Booking() {

  // passing your initial state object 🙂
  const [ state, dispatch ] = useReducer(reducer, initialState);
  console.log(state)
  function handleChange(event){
      dispatch({
        type: "CHANGE_FORM_DATA",
        payload: {
          name: event.target.name, // name of field
          value: event.target.value // new value
        }
      })
  }

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
                  value={state.data.fullName} //replace fullname
                  onChange={(event)=>handleChange(event)}/>
            </li>
          </ul>
          </fieldset> 
          <fieldset> 
            <h1>Contact Information:</h1>
            <ul>
            </ul>
            </fieldset>  
            {state.errorStatus && <p> Value entered are not correct</p>} 
            <button>Request Design Consultation</button>     
            </form>
       <h1>Booking</h1>
      </main>
    );
  }
