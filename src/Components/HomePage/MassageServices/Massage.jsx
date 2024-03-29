import { Link } from "react-router-dom";
import "./style.css"
import { useNavigate } from "react-router-dom";
const Massage = () => {
  const navigate = useNavigate();
  const handleNavigation = (path) => {
    navigate(path);
  };

  return (

    <div className="masssageServiceContainer">

      <div className="massageCol" onClick={() => handleNavigation("/Services/6")}>
        <img src="https://res.cloudinary.com/ddeif6hmk/image/upload/v1707685871/stressmassage_qyh0vo.jpg" />

        <div className="massageDescription" >
          <p> Klassig Massage (60min/600kr)</p>
          <ul>
            <li>Effektiv behandling för att frigöra muskelspänningar och förbättra blodcirkulationen </li>

          </ul>
        </div>
      </div>

      <div className="massageCol" onClick={() => handleNavigation("/Services/0")}>
        <img src="https://res.cloudinary.com/ddeif6hmk/image/upload/v1702332898/head_dy3b6d.jpg" />

        <div className="massageDescription" >
          <p> Afrikansk Signatur (60min/600kr)</p>
          <ul>
            <li>
              Djupgående aromatisk massage med ångade örter för ökad cirkulation och lindring av muskelspänningar. Perfekt för vintermånaderna</li>
            <li>Viktigt meddelande: Rådgör alltid med din läkare innan du genomgår en Herbal Compress Massage.</li>


          </ul>
        </div>
      </div>


      <div className="massageCol">
        <img src="https://res.cloudinary.com/ddeif6hmk/image/upload/v1704056190/ook_wqz5hy.jpg" />

        <div className="massageDescription" onClick={() => handleNavigation("/Services/5")}>
          <p> Kalebas Massage (60min/650kr)</p>
          <ul>
            <li>Behandling med 100% torkade pumpafrukter för att frigöra toxiner</li>
            <li>lindra spänningar och förbättra blodcirkulation</li>

          </ul>
        </div>
      </div>

      <div className="massageCol" onClick={() => handleNavigation("/Services/7")}>
        <img src="https://res.cloudinary.com/ddeif6hmk/image/upload/v1707686166/rungu_gxhgpe.png" />
        <div className="massageDescription">
          <p> Rungu Massage (60min/600kr)</p>
          <ul>
            <li>Stimulerande Afrikansk massage med Maasai Rungu </li>
            <li>Lindrar permanent spända muskler </li>
            <li>Stimulerande Afrikansk massage med Maasai Rungu Lindrar permanent spända muskler
              förbättrar blodcirkulation och minskar celluliter </li>

          </ul>
        </div>
      </div>


    </div>
  )
}


export default Massage;
