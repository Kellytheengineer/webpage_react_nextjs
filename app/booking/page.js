"use client";

import { useState, useReducer  } from 'react';


//defining the states required for the reducer
const initialState = {
  data: {
      fullName: '',
    },
    status: false
};

//create a reducer function
function reducer (state, action) {
  switch (action.type) {
    case "CHANGE_FIELD":
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
        case "FORM_SUBMITTING":
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
}




export default function Booking() {

  //old states
  const [ fullName, setFirstName ] = useState("");
  const [ error, setError ] = useState(false);

  // passing your initial state object 🙂
  const [ state, dispatch ] = useReducer(reducer, initialState);
  console.log(state)

  function handleChange(event){
    if (event.target.name==="fullName"){ 
        dispatch({
          type:"CHANGE_FORM_DATA",
          payload:{
            name: event.target.name, //fullName
            value: event.target.value //defined by user
          }
        })
    }}

    function handleSubmit(event) {
      event.preventDefault();
      if (!state.data.fullName) //if name and value false return error, return dispatch object with type "ERROR"
     dispatch({
      type:"ERROR",
     })


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
            {state.status === "error" && <p> Value entered are not correct</p>} 
            <button>Request Design Consultation</button>     
            </form>
       <h1>Booking</h1>
      </main>
    );
  }



  // create a variable that holds the states that we previously created
  