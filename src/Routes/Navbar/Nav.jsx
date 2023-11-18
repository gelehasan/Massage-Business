import MassageIcon from "../../Assets/AFROICOVN.png"
import { Link } from "react-router-dom";
import "./Nav.css"

const Navbar = ()=>{


    return(
        <div className="navContainer">
            
            
            <div className="navLogo">
                <img src={MassageIcon} />
            </div>

            <div className="navLinks">

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