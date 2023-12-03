import "./style.css";
import { useState } from "react";

const BookingDetails = {
    selectedService:"",
    haveYouVisted:"",
    selectedDate:"",
    name:"",
    email:"",
    phone:"",
    message:""
}
const BookingPage = ()=>{
    const [Bookinginputs, setBookingInputs] = useState(BookingDetails)

    const handleInputChange= (event)=>{
        const {name, value}= event.target;

        console.log(name,value)
        setBookingInputs({...Bookinginputs, [name]:value})
    }

    const handleSubmit = (event)=>{
        event.preventDefault();
        console.log(Bookinginputs)

    
    }
    return(
        <div className="bookingContainer">
        <form className="booking-form" onSubmit={handleSubmit}>
        <label>
        Välj Behandling:
          <select value={Bookinginputs.selectedService} name="selectedService" onChange={(e) =>handleInputChange(e)} required>
            <option value="">Välj</option>
            <option value="massage1">Massage Service 1</option>
            <option value="massage2">Massage Service 2</option>
          </select>
        </label>
  
        <label>
          Har du besökt oss innan?
          <select
            value={Bookinginputs.haveYouVisted}
            name="haveYouVisted"
            onChange={ (e) =>handleInputChange(e)}
            required
          >
            <option value="">Välj</option>
            <option value="yes">Ja</option>
            <option value="no">Nej</option>
          </select>
        </label>
  
        <label>
          Behandlingstid:
          <input
            type="datetime-local"
            name="selectedDate"
            value={Bookinginputs.selectedDate}
            onChange={(e) =>handleInputChange(e)}
          />
        </label>
  
        <label>
          Namn:
          <input
            type="text"
            name="name"
            value={Bookinginputs.name}
            onChange={(e) =>handleInputChange(e)}
            required
          />
        </label>
  
        <label>
          E-post:
          <input
            type="email"
            name="email"
            value={Bookinginputs.email}
            onChange={(e) =>handleInputChange(e)}
            required
          />
        </label>
  
        <label>
         Telefon Nummer:
          <input
            type="tel"
            name="phone"
            value={Bookinginputs.phone}
            onChange={(e) =>handleInputChange(e)}
            required
          />
        </label>
  
        <label>
          Meddelande:
          <textarea
            value={Bookinginputs.message}
            name="message"
            onChange={(e) =>handleInputChange(e)}
            
          />
        </label>
  
        <button type="submit">Submit Booking</button>
      </form>
      </div>
    )
}


export default BookingPage;