import MassageIcon from "../../Assets/AFROICOVN.png"
import { Link } from "react-router-dom";
import "./Nav.css"
import { useState } from "react";
import MenuIcon from "../../Assets/menu.svg";
import XIcon from "../../Assets/x.svg";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { SignOutUser } from "../../Firebase/Firebase";
const Navbar = ()=>{
    const currentUser = useSelector((state)=> state.user.currentUser);
    const [isMenuOn, setIsMenuOn] = useState(false);
    const [isServicesOn, setIsServiceson]= useState(false);
 
    const toggleMenu = ()=>{

        setIsMenuOn(!isMenuOn)
    }

    const setServiceVisbility = ()=>{

        setIsServiceson(!isServicesOn)
    }
    return(
    <>
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
                <Link to={"#"} className="Nav-link" onClick={setServiceVisbility} ><li>Tjänster ↓
                        
                        {isServicesOn &&
                            <ul className="serviceLinks">
                            <li className="serviceItem" onClick={setServiceVisbility}>Afrikaanas</li>
                            <li className="serviceItem" onClick={setServiceVisbility}>Luisana</li>
                            <li className="serviceItem" onClick={setServiceVisbility}>Massage</li>
                        </ul>
                        }
                        
                    </li></Link>
                <Link to={"/"} className="Nav-link"><li>Kontakta Oss</li></Link>
                <li>+46739752503</li>
              {currentUser !=null && currentUser.Admin==true && <button onClick={SignOutUser}>Sign out</button>}  
                </ul>
                    
            </div>

        </div>
        <Outlet/>
        </>
    )


}



export default Navbar;