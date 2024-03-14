import { LOGO_URL } from "../utils/Constants";
import "../css/Header.css";
import { useState } from "react";
import { Link } from "react-router-dom";
const Header = () => {
  const [showDropDown, setshowDropDown] = useState(false);

  const toggleDropDown = () => {
    setshowDropDown(!showDropDown);
  };
  return (
    <div className="main-container">
      <div className="image-container">
        <img src={LOGO_URL} alt="logo" className="logo-container" />
      </div>
      <div className="tag-container">
        <ul className="nav-list">
          <li className="li-list"><Link to="/">Home</Link></li>
          <li className="li-list"><Link to="/about">About Us</Link></li>
          <li className="li-list"><Link to="/menu">Menu</Link></li>
          <li className="li-list"><Link to="/kitchen">Kitchens</Link></li>
          <li className="li-list" onClick={toggleDropDown}>
            Login/SignUp
            {showDropDown && (
              <ul className="dropdown-menu">
                <Link to="/signin"><li>For Users</li></Link>
                <Link to="/signin"><li>For Homechefs</li></Link>
              </ul>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
