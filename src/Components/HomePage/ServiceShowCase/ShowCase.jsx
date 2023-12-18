import "./style.css"
import { useState, useEffect } from "react";
const ShowCase = ()=>{
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const showCase = document.querySelector('.showCaseServiceContent');
            const topPosition = showCase.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            // Check if the element is within the viewport
            if (topPosition < windowHeight) {
                setIsVisible(true);
            }
        };

        // Attach the event listener
        window.addEventListener('scroll', handleScroll);

        // Cleanup the event listener
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    return(
        <div className={`showCaseServiceContent ${isVisible ? 'visible' : ''}`} >
        <div className="showCaseServiceLeft">
            <h1>Upptäck vårt breda
            utbud av skräddarsydda
            massagebehandlingar</h1>
    
            <p>
            Erfarenheter av värk och smärta kan ofta hindra oss från att vara på vår bästa nivå.
            </p>
    
            <ul>
                <li>Perfekt för dig som spenderar långa timmar vid skrivbordet eller bakom ratten. </li>
                <li> Vår avstressande massage fokuserar på att förbättra cirkulation och exibilitet, samtidigt som den minskar smärta och stress.</li>
            </ul>
        </div>
    
        <div className="showCaseServiceImages">
                        <img src="https://images.pexels.com/photos/6629538/pexels-photo-6629538.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"/>
                        <img src="https://images.pexels.com/photos/275768/pexels-photo-275768.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"/>
                        <img src="https://images.pexels.com/photos/10893346/pexels-photo-10893346.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"/>
                        <img src="https://images.pexels.com/photos/6560298/pexels-photo-6560298.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"/>
        </div>
        </div>
    )
}


export default ShowCase;