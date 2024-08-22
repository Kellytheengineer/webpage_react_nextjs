"use client";

import { useReducer  } from 'react';
import "./page.css";

//defining the states required for the reducer
const initialState = {
  data: {
      fullName: '',
    },
    status: 'editing'
};

//create a reducer function
function reducer (state, action) {
  switch (action.type) {
    case "CHANGE_FORM_DATA":
      return{
        ...state,
        data:{
          ...state.data,
          [action.payload.name]:action.payload.value
        }
      };
      case 'ERROR':
        return{
          ...state,
          status:"error"
      };
      case 'SUBMITTING':
        return{
          ...state,
          status:"submitting"
        };
      case "FORM_SUCCESS":
        return{
          ...state,
          status:"success"
        };
    default:
      return state
  }

}export default function Booking() { 
  const [ state, dispatch ] = useReducer(reducer, initialState);

  console.log(state)  

  function handleChange (event){
    dispatch({
      type:"CHANGE_FORM_DATA",
      payload:{
        name: event.target.name, //fullName
        value: event.target.value //defined by user
      }
      })
    }    
    
    function handleSubmit(event) {
    event.preventDefault();
    
    dispatch({
      type:"SUBMITTING",
    })  
    
    setTimeout(() => {
    if (!state.data.fullName) {
     dispatch({
      type:"ERROR",
     })  
    }
    dispatch({
      type:"FORM_SUCCESS",
    })  

    }, 3000);
  }    
     
  
  return (
      <main>
        <form onSubmit={(event) => handleSubmit(event)}>
        <fieldset>
        {state.status === "success" && <p className='succesPage'> Thank you for the submission!</p>}
          <ul>
             <li>
                <label for="fullName">Full Name</label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={state.data.fullName}
                  onChange={(event)=>handleChange(event)}/>
            </li>
            </ul>
            </fieldset>
            <fieldset>
            <h1>Contact Information:</h1>
            <ul>
            </ul>
            </fieldset>
            {state.status === "error" && <p> Value entered are not correct</p>}
            {state.status}
            {state.status === "submitting" || <button>Request Design Consultation</button>}
            </form>
       <h1>Booking</h1>
      </main>
    );
  }  
  