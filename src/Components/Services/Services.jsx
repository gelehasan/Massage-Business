import serviceBackGround from "../../Assets/massageimg.png";
import "./serviceStyle.css";
import { useSelector } from "react-redux";
import { getAllServices } from "../../Store/services/serviceSelector";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
const Services = ({AllServices})=>{
  const {serviceId} = useParams();
      const [selectedService, setSelectedService] = useState(AllServices[serviceId])
  
 
    const {data}=selectedService;
  
    console.log(data)
    return(
        <div className="serviceContainer">
            <div className="serviceHeader">
                <img src={serviceBackGround}/>

                <div className="details">
                    <h3>{data.name}</h3>
                <p>{data.serviceBackgrundText}</p>
                    <span>Home</span> <span>»</span> <span>Tjänster</span> <span>»</span> <span>{data.name}</span>

                </div>
            </div>

 <div className="serviceContent">
      
      <div className="contetLeft">
        <h2> {data.rubrik}</h2>
        
        <p>
          {data.info1}
       </p>
        <p>
        {data.info2}
          </p>
        
        
        <h2>
        {data.rubrik2} 
        </h2>
        
        <p>
      {data.info3}
       </p>
        
        <ul>
        {
          data.listor.map((list)=>{
            const {value}= list;
           return( <li>{value}</li>)
          })
        }
        </ul>
        
        
        <img className="servicePicture" src={data.imageOfService}/>
      <p>
        {data.ovrigtInfomation}
      </p>
        
        <ul>
          
        {
          data.otherList.map((list)=>{
            const {value}= list;
           return( <li>{value}</li>)
          })
        }
        </ul>
      </div>
      
      <div class="contentRight">
        
        <div className="timeBooking">
    <h2> Afrikansk Signatur</h2>
<p>Boka din tid nu hos Aforoots of Sweden Massage & Cosmetics </p>
<b>{data.prisOchTid}</b>
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
            <img className="servicePicture" src={data.serviceImage}/>

        </div>
      </div>
    </div>
            



        </div>
    )
}


export default Services;
