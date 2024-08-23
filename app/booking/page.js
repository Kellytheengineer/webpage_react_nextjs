"use client";

import { useReducer } from "react";
import "./page.css";

//defining the states required for the reducer
const initialState = {
  data: {
    fullName: "",
    postcode: "",
    houseNumber: "",
    city: "",
    email:"",
    phoneNumber:""
  },
  status: "editing",
  errormessage: "",
  errorfield: ""
};

//create a reducer function
function reducer(state, action) {
  switch (action.type) {
    case "CHANGE_FORM_DATA":
      return {
        ...state,
        data: {
          ...state.data,
          [action.payload.name]: action.payload.value,
        },
      };
    case "ERROR":
      return {
        ...state,
        status: "error",
        errormessage: action.payload.message,
        errorfield: action.payload.name
      };
    case "SUBMITTING":
      return {
        ...state,
        status: "submitting",
      };
    case "FORM_SUCCESS":
      return {
        ...state,
        status: "success",
      };
    case "ERROR_FULLNAME":
    return {
      ...state,

    };
    default:
      return state;
  }
}
export default function Booking() {
  const [state, dispatch] = useReducer(reducer, initialState);

  console.log(state);

  function handleChange(event) {
    dispatch({
      type: "CHANGE_FORM_DATA",
      payload: {
        name: event.target.name, //fullName
        value: event.target.value, //defined by user
      },
    });
  }

  function handleSubmit(event) {
    event.preventDefault();

    dispatch({
      type: "SUBMITTING",
    });

    setTimeout(() => { 
      let fields=[{name:"fullName" ,value: state.data.fullName},{name:"postcode" ,value: state.data.postcode} ,{name:"houseNumber" ,value: state.data.houseNumber},{name:"city" ,value: state.data.city},{name:"email" ,value: state.data.email},{name:"phoneNumber" ,value: state.data.phoneNumber}]
      let invalidField = fields.find(field => field.value === "");
      if (invalidField){
        dispatch({
          type:"ERROR",
          payload: {
            name: invalidField.name,
            message: `${invalidField.name} cannot be empty`
        }
      });
    } else {
      dispatch({
        type: "FORM_SUCCESS",
      });
    }
    
      
    }, 3000);
  }


  return (
    <main>
      <form onSubmit={(event) => handleSubmit(event)} className="form">
        <fieldset className="group">
          {state.status === "success" && (
            <p className="succesPage"> Thank you for the submission!</p>
          )}
          <legend className="groupTitle">Personal Info:</legend>
          <ul>
            <label className="inputGroup" for="fullName">
              Full Name
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={state.data.fullName}
              onChange={(event) => handleChange(event)}
              className="input"
            />
            {/* error message for fullName */}
            {state.status === "error" && <p className="error"> Full name error</p>}
            <label className="inputGroup" for="postcode">
              Post Code
            </label>
            <input
              type="text"
              id="postcode"
              name="postcode"
              value={state.data.postcode}
              onChange={(event) => handleChange(event)}
              className="input"
            />
            <label className="inputGroup" for="houseNumber">
              House/Flat Number and Street Name
            </label>
            <input
              type="text"
              id="houseNumber"
              name="houseNumber"
              value={state.data.houseNumber}
              onChange={(event) => handleChange(event)}
              className="input"
            />
            <label className="inputGroup" for="city">
              City
            </label>
            <input
              type="text"
              id="city"
              name="city"
              value={state.data.city}
              onChange={(event) => handleChange(event)}
              className="input"
            />
          </ul>
        </fieldset>
        <fieldset className="group">
          <legend className="groupTitle">Contact Info:</legend>
          <label for="email">Email Address</label>
          <input 
          type="email" 
          id="email" 
          name="email"
          value={state.data.email}
          onChange={(event) => handleChange (event)}
          />
            <label for="phoneNumber">Phone number</label>
            <input 
            type="text"  
            id="phoneNumber" 
            name="phoneNumber"
            value={state.data.phoneNumber}
            onChange={(event) => handleChange(event)}
            ></input>    

          <ul></ul>
        </fieldset>
        {state.status === "error" && (
          <p className="error">Value entered are not correct</p>
        )}
        {state.status}
        {state.status === "submitting" || (
          <button className="button">Request Design Consultation</button>
        )}
      </form>
      <h1>Booking</h1>
    </main>
  );
}
