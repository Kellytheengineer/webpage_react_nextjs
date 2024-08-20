

export default function Booking() {
    return (
      <main>
        <form>
        <fieldset>
        <label for="fullName">Full Name</label>
            <input type="text" id="fullName" name="fullName"></input>
        <label for="postCode">Post Code</label>
            <input type="text" id="postCode" name="postCode"></input>           
        <label for="houseNumber">House/Flat Number and Street Name</label>
            <input type="text" id="houseNumber" name="houseNumber"></input>    
            </fieldset>              
    
            </form>
       <h1>Booking</h1>
      </main>
    );
  }

