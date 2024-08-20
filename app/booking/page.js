"use client";
import { useState  } from 'react';

export default function Booking() {

    const [ fullName, setFirstName ] = useState("");
    const [ postCode, setPostCode ] = useState("");
    const [ houseNumber, setHouseNumber ] = useState("");
    const [ city, setCity ] = useState("");

    function handleChange(event){
      if (event.target.name==="fullName"){
        setFirstName(event.target.value)
      }
      if (event.target.name==="postCode"){
        setPostCode(event.target.value)
      }
      if (event.target.name==="houseNumber"){
        setHouseNumber(event.target.value)
      }
      if (event.target.name==="city"){
        setCity(event.target.value)
      }
    }



    console.log(fullName, postCode,houseNumber)

    return (
      <main>
        <form>
        <fieldset>
          <ul>
             <li>
                <label for="fullName">Full Name</label>
                <input 
                  type="text" 
                  id="fullName" 
                  name="fullName" 
                  value={fullName} 
                  onChange={(event)=>handleChange(event)}/>
            </li>
            <li>
                <label for="postCode">Post Code</label>
                <input 
                  type="text" 
                  id="postCode" 
                  name="postCode"
                  value={postCode}
                  onChange={(event)=>handleChange(event)}
                  />
                             
            </li>
            <li>
                <label for="houseNumber">House/Flat Number and Street Name</label>
                <input 
                type="text" 
                id="houseNumber" 
                name="houseNumber" 
                value={houseNumber}
                onChange={(event)=>handleChange(event)}/>  
            </li>
            <li>
                <label for="city">City</label>
                <input 
                type="text" 
                id="city" 
                name="city"
                value={city}
                onChange={(event)=>handleChange(event)}/>  
            </li>
            </ul>
            </fieldset> 
            <fieldset> 
            <h1>Contact Information:</h1>
            <ul>
            <li>
        <label for="phoneNumber">Phone number</label>
            <input type="text" id="phoneNumber" name="phoneNumber"></input>    
            </li>  
            <li>
        <label for="email">Email Address</label>
            <input type="email" id="email" name="email"></input>    
            </li>  
            </ul>
            </fieldset>  
            <button>Request Design Consultation</button>     
            </form>
       <h1>Booking</h1>
      </main>
    );
  }

