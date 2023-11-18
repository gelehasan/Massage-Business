import MassageIcon from "../../Assets/AFROICOVN.png"
import { Link } from "react-router-dom";
import "./Nav.css"
import { useState } from "react";
import MenuIcon from "../../Assets/menu.svg";
import XIcon from "../../Assets/x.svg";
const Navbar = ()=>{
    const [isMenuOn, setIsMenuOn] = useState(false);

    const toggleMenu = ()=>{

        setIsMenuOn(!isMenuOn)
    }
    return(
        <div className="navContainer">
            
            
            <div className="navLogo">
                <img src={MassageIcon} className="Logo"/>

                <img src={isMenuOn ?  XIcon : MenuIcon} onClick={toggleMenu} 
                    className="Menus"
                />
            </div>

            <div className={isMenuOn ? "navLinks openMenu" : "navLinks"}>

                <ul>
                <Link to={"/"} className="Nav-link"><li>Våra butiker</li></Link>
                <Link to={"/"} className="Nav-link"><li>Om Oss</li></Link>
                <Link to={"/"} className="Nav-link"><li>Tjänster</li></Link>
                <Link to={"/"} className="Nav-link"><li>Kontakta Oss</li></Link>
                <li>+46739752503</li>

                </ul>

            </div>
        </div>
    )


}



export default Navbar;