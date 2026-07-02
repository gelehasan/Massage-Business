import { Link } from "react-router-dom";
import "./Nav.css";
import { useState } from "react";
import MenuIcon from "../../Assets/align-left.svg";
import XIcon from "../../Assets/x.svg";
import Logo from "../../Assets/Afroroot.png";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { SignOutUser } from "../../Firebase/Firebase";
import { useNavigate } from "react-router-dom";
import { Titles } from "../../Store/services/serviceSelector";
import Footer from "../../Components/Footer/Footer";

const Navbar = () => {
  const currentUser = useSelector((state) => state.user.currentUser);
  const serviceTitles = useSelector(Titles);
  const navigate = useNavigate();

  const [isMenuOn, setIsMenuOn] = useState(false);
  const [isServicesOn, setIsServicesOn] = useState(false);

  const toggleMenu = () => setIsMenuOn(!isMenuOn);

  const handleServiceClick = (index) => {
    navigate(`Services/${index}`);
    window.location.reload();
  };

  return (
    <>
      <div className="navContainer">
        <div className="navInner">
          <div className="navLogo">
            <Link to={"/"} className="Nav-link">
              <div className="logoImage">
                <img src={Logo} alt="Afro Roots of Sweden" />
              </div>
            </Link>
            <img
              src={isMenuOn ? XIcon : MenuIcon}
              onClick={toggleMenu}
              className="Menus"
              alt="Menu"
            />
          </div>

          <div className={isMenuOn ? "navLinks openMenu" : "navLinks"}>
            <ul>
              <Link to={"/"} className="Nav-link">
                <li>Våra butiker</li>
              </Link>
              <Link to={"/OmOss"} className="Nav-link">
                <li>Om Oss</li>
              </Link>
              <Link
                to={"#"}
                className="Nav-link"
                onClick={() => setIsServicesOn(!isServicesOn)}
              >
                <li style={{ position: "relative" }}>
                  Tjänster ↓
                  {isServicesOn && (
                    <ul className="serviceLinks">
                      {serviceTitles.map((service, index) => (
                        <Link
                          key={index}
                          to={"#"}
                          className="Nav-link"
                          onClick={() => handleServiceClick(index)}
                        >
                          <li className="serviceItem">{service}</li>
                        </Link>
                      ))}
                    </ul>
                  )}
                </li>
              </Link>
              <Link to={"/KontaktaOss"} className="Nav-link">
                <li>Kontakta Oss</li>
              </Link>
              {currentUser != null && currentUser.Admin === true && (
                <Link to={"/DashboardLinks"} className="Nav-link">
                  <li>Admin Dashboard</li>
                </Link>
              )}
              <li>+46 739 752 503</li>
              {currentUser != null && currentUser.Admin === true && (
                <button className="signOut" onClick={SignOutUser}>
                  Sign out
                </button>
              )}
            </ul>
          </div>
        </div>
      </div>

      <Outlet />
    </>
  );
};

export default Navbar;
