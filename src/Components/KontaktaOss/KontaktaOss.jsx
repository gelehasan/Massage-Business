
import "./style.css"
import Footer from "../Footer/Footer"
const KontaktaOssPage = ()=>{
    
    const handleInputChange = ()=>{

  
    }
    return(
        <div className="kontaktaOssContainer">
        <div className="kontaktaOssHeader">
            <img  src="https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>

            <div className="kontaktaOssHeaderdetails">
                <h3>Kontakta Oss</h3>
            <p>Känn dig trygg att ställa vilken fråga du än har och berätta exakt vad du behöver. Vi finns här för att hjälpa dig!</p>
                <span>Home</span> <span>»</span> <span>Tjänster</span> <span>»</span> <span>Kontakta Oss</span>

            </div>
        </div>


        <div className="omOssServiceContainer">

            <div className="kontaktaOssForm">
            <h3>    Skicka Ett Meddelande
Känn dig trygg att ställa vilken fråga du än har och berätta exakt vad du behöver. </h3>
                <form className="KonatkaOssMessage-form">
       
          <input
            type="text"
            name="Namn"
            value={""}
            onChange={(e) =>handleInputChange(e)}
            required
            placeholder="Namn*"
          />

  
    
          
          <input
            type="email"
            name="Melj"
            value={""}
            onChange={(e) =>handleInputChange(e)}
            required
            placeholder="E-post*"
          />

  

       
          <input
            type="tel"
            name="Nummer"
            value={""}
            onChange={(e) =>handleInputChange(e)}
            required
            placeholder=" Titelbeskrivning*"
          />
  
  

          <textarea
            value={""}
            name="Meddelande"
            onChange={(e) =>handleInputChange(e)}
            placeholder="Meddelande"
          />
      
        <button type="submit"> Skicka</button>
                </form>
            </div>

            <div className="omOssDescription">
         
         <h1> Kontakt Information </h1>
        <p> Vällkommen till Afroroots Of Sweden!
        </p>

       <h4>
       Vårt Location
       </h4>
       <p>
       Bromsgatan 4A, 653 41 Karlstad
       </p>

       <h4>
       Kontakt Info
       </h4>
      <p> <b> Mobil : </b>+46739752503</p> 

      <p><b> E-mail : </b>Service@afrootsofsweden.se</p> 

        <h4> Öpettider</h4>
        <p> <b> Måndag - Fredag :</b>09:00 - 19:00</p>
        <p><b>Lördag :</b> 09:00 - 15:00</p>
        <p><b>Söndag : </b>Stängt</p>
        </div>
        </div>
        <Footer/>
        </div>
    )
}


export default KontaktaOssPage;