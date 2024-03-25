import React from 'react';
import './Footer.css'; // Create a CSS file for styling
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="top-div">
        <div className="footer-section">
            <h3 className='h3Footer'> Om Oss</h3>
          <p>
            Afroroots of Sweden erbjuder skräddarsydda massagebehandlingar för avkoppling och
            välbefinnande. Vårt utbud inkluderar avstressande massage, indisk huvudmassage, kalebas
            massage, idrottsmassage, aromaterapi massage samt fotmassage. Vi fokuserar på att lindra
            smärta, minska stress och förbättra välbefinnandet. Du kan besöka vår butik eller låta
            oss komma till dig för att uppleva våra skräddarsydda behandlingar. Oavsett om det är i
            vår fridfulla miljö eller i ditt eget hem, är vi här för att ge dig den ultimata
            avslappningsupplevelsen. Välkommen till Afroroots of Sweden!
          </p>
        </div>

        <div className="footer-section kontaktDetails">
          <h3 className='h3Footer'>
            Kontakt information   </h3>
            <br />
            <b>  Address: </b>Bromsgatan 4A, 653 41 Karlstad
            <br />
            <b>E-mail:</b> <a href="mailto:afro.Afroroots@gmail.com">afro.Afroroots@gmail.com</a>
            <br />
            <b> Kontakt: </b>+46739752503
       
        </div>

        <div className="footer-section">
      <h3 className='h3Footer'> Snabba länkar </h3>
           
            <br />
             <Link to={"/OmOss"} className="Nav-link"> OM OSS</Link>
            <br />
            <Link to={"/KontaktaOss"} className="Nav-link"> KONTAKTA OSS</Link>
            <br />
            <Link to={"/Booking"} className="Nav-link"> BOKA TID</Link>
       
        </div>
      </div>

      <div className="bottom-div">
        <p>© 2023 Afroroots of Sweden AB. All Rights Reserved</p>
        <div className="social-icons">
          <h4>  <a href='https://www.instagram.com/afrorootsofsweden_/' className='socialLinks'>Instagram </a> </h4> 
          <h4>Facebook</h4>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
