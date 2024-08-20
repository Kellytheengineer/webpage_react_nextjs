

export default function Booking() {
    return (
      <main>
        <form>
        <fieldset>
          <ul>
             <li>
        <label for="fullName">Full Name</label>
            <input type="text" id="fullName" name="fullName"></input>
            </li>
            <li>
        <label for="postCode">Post Code</label>
            <input type="text" id="postCode" name="postCode"></input>           
            </li>
            <li>
        <label for="houseNumber">House/Flat Number and Street Name</label>
            <input type="text" id="houseNumber" name="houseNumber"></input>    
            </li>
            <li>
        <label for="city">City</label>
            <input type="text" id="city" name="city"></input>    
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

