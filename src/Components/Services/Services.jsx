import serviceBackGround from "../../Assets/massageimg.png";
import "./serviceStyle.css";

//Needs the html code broken down into pieces
//move right section to their own component
// ALso left one to their own component
const Services = ()=>{

    return(
        <div className="serviceContainer">
            <div className="serviceHeader">
                <img src={serviceBackGround}/>

                <div className="details">
                    <h3>AFRIKANSK SIGNATUR</h3>
                    <p>Vårt uppdrag är att vägleda dig på denna resa av självförverkligande, hjälpa dig att bryta dig fri från begränsningar och ge dig möjlighet att omfamna ditt sanna jag</p>

                    <span>Home</span> <span>»</span> <span>Tjänster</span> <span>»</span> <span>Afrikansk Signatur</span>

                </div>
            </div>

 <div className="serviceContent">
      
      <div className="contetLeft">
        <h2> Vad är AFROROOTS SPECIAL? </h2>
        
        <p>
          Förbättrar blodcirkulationen, minskar högt blodtryck och hjälper till med sömnstörningar. Massagen består av flödande slag över hela kroppens längd, passiva ledrörelser och djupt strukturellt arbete på muskler och leder. 
 </p>
        <p>
Genom medveten beröring skärps den sensoriska uppfattningen av kroppen och en harmonisk balans skapas. På detta sätt kan fysiska eller energiska blockeringar av klienterna släppas. 
        </p>
        
        
        <h2>
          Hur verkar AFROROOTS SPECIAL? 
        </h2>
        
        <p>
          AfroRoots Signaturmassage erbjuder den ultimata   upplevelsen för att höja humöret och bekämpa jetlag, dålig cirkulation, utbrändhet och trötthet. 
        </p>
        
        <ul>
          
          <li> Särskilt utformad för resenärer, är detta en perfekt kombination av östliga och västerländska tekniker som maximerar din komfortnivå. </li>
          
          <li> Genom användning av stretching och palming-tekniker lyfts och återupplivas kroppen</li>
          <li>
            Vi använder noggrant utvalda ekologiska oljor från Afrika som ger antingen en lugnande eller föryngrande effekt. Denna unika blandning tillför fördelarna med djupvävnadsmassage, aromaterapimassage och inkluderar även inslag av Rungu-massage. Resultatet är ökad energinivå, återställd smidighet, lindrade muskelspänningar och minskad stress
          </li>
        </ul>
        
        
        <img className="servicePicture" src="https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
      <p>
          AfroRoots Signaturmassage erbjuder den ultimata   upplevelsen för att höja humöret och bekämpa jetlag, dålig cirkulation, utbrändhet och trötthet. 
        </p>
        
        <ul>
          
          <li> Särskilt utformad för resenärer, är detta en perfekt kombination av östliga och västerländska tekniker som maximerar din komfortnivå. </li>
          
          <li> Genom användning av stretching och palming-tekniker lyfts och återupplivas kroppen</li>
          <li>
            Vi använder noggrant utvalda ekologiska oljor från Afrika som ger antingen en lugnande eller föryngrande effekt. Denna unika blandning tillför fördelarna med djupvävnadsmassage, aromaterapimassage och inkluderar även inslag av Rungu-massage. Resultatet är ökad energinivå, återställd smidighet, lindrade muskelspänningar och minskad stress
          </li>
        </ul>
      </div>
      
      <div class="contentRight">
        
        <div className="timeBooking">
    <h2> Afrikansk Signatur</h2>
<p>Boka din tid nu hos Aforoots of Sweden Massage & Cosmetics </p>
<b> 60 min - 650kr</b>
<button className="bokanNu">Boka Nu</button>
        </div>
        <h3>Arbetstid</h3>
        <div className="timeSheet">
            
            <div className="daysOpen">
                <div>
                Måndag -Fredag
                </div>
                <div> 
                09:00 - 19:00
                </div>
            </div>
--------------------------------------------
            <div> 
Lördag 09:00 - 19:00 09:00 - 15:00 Söndag är stängt
            </div>

        </div>


        <div className="serviceExample Picture">

            <h2>Bild på tjänsten</h2>
            <img className="servicePicture" src="https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>

        </div>
      </div>
    </div>
            



        </div>
    )
}


export default Services;
