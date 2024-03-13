import { LOGO_URL } from "../utils/Constants";
import "../css/Header.css";
import { useState } from "react";
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
          <li className="li-list">Home</li>
          <li className="li-list">About Us</li>
          <li className="li-list">Menu</li>
          <li className="li-list">Kitchens</li>
          <li className="li-list" onClick={toggleDropDown}>
            Login/SignUp
            {showDropDown && (
              <ul className="dropdown-menu">
                <li>For Users</li>
                <li>For Homechefs</li>
              </ul>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
