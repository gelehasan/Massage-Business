import serviceBackGround from "../../Assets/massageimg.png";
import "./serviceStyle.css";


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
            

        </div>
    )
}


export default Services;