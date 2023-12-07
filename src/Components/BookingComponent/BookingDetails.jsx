import "./style.css";
import { useState } from "react";
import { useSelector } from "react-redux";
import { ServicesBooking } from "../../Store/services/serviceSelector";
const BookingDetails = {
    Behandling:"",
    TidigareBesokt:"",
    Tid:"",
    Namn:"",
    Melj:"",
    Nummer:"",
    Meddelande:""
}

const BookingForm = ()=>{
    const [Bookinginputs, setBookingInputs] = useState(BookingDetails)
    const [isFormSubmited, setFormSubmited] = useState(false);
    const AvaialableServices = useSelector(ServicesBooking);

    const handleInputChange= (event)=>{
        const {name, value}= event.target;

        console.log(name,value)
        setBookingInputs({...Bookinginputs, [name]:value})
    }

    const handleSubmit = async (event)=>{
        event.preventDefault();
        try {
            const response = await fetch('https://formspree.io/f/mpzggebg', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(Bookinginputs),
            });
      
            if (response.ok) {
              console.log('Form submitted successfully!');
              setFormSubmited(true)
              setBookingInputs(BookingDetails);
            } else {
              console.error('Form submission failed.');
            }
          } catch (error) {
            console.error('Error submitting form:', error);
          }
    }
    return(
        <div className="bookingContainer">
            {isFormSubmited &&<p className="submittedForm">Ditt formulär har skickats ✔</p>}
        <form className="booking-form" onSubmit={handleSubmit}>
        <label>
        Välj Behandling:
          <select value={Bookinginputs.Behandling} name="Behandling" onChange={(e) =>handleInputChange(e)} required>
            <option value="">Välj</option>

            {
              AvaialableServices.map((Service)=>{
                return(  <option value={Service} key={Service}>{Service}</option>)
              })
            }
          </select>
        </label>
  
        <label>
          Har du besökt oss innan?
          <select
            value={Bookinginputs.TidigareBesokt}
            name="TidigareBesokt"
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
            name="Tid"
            value={Bookinginputs.Tid}
            onChange={(e) =>handleInputChange(e)}
          />
        </label>
  
        <label>
          Namn:
          <input
            type="text"
            name="Namn"
            value={Bookinginputs.Namn}
            onChange={(e) =>handleInputChange(e)}
            required
          />
        </label>
  
        <label>
          E-post:
          <input
            type="email"
            name="Melj"
            value={Bookinginputs.Melj}
            onChange={(e) =>handleInputChange(e)}
            required
          />
        </label>
  
        <label>
         Telefon Nummer:
          <input
            type="tel"
            name="Nummer"
            value={Bookinginputs.Nummer}
            onChange={(e) =>handleInputChange(e)}
            required
          />
        </label>
  
        <label>
          Meddelande:
          <textarea
            value={Bookinginputs.Meddelande}
            name="Meddelande"
            onChange={(e) =>handleInputChange(e)}
            
          />
        </label>
  
        <button type="submit">Submit Booking</button>
      </form>
      </div>
    )
}


export default BookingForm;