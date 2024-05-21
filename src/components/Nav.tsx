import "./Nav.css";
import logo from '../assets/logo.png';
import { useState } from "react";
import MobileNav from "./MobileNav/MobileNav";

function Nav() {

  const [openMenu, setOpenMenu] = useState(false);

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  }

  return (
    <>
    <MobileNav isOpen={openMenu} toggleMenu={toggleMenu} />

    <nav className="nav-wrapper">
      <div className="nav-content">
        <img className="logo" src={logo} alt="logo" />
        <ul>
          <li>
            <a className="menu-item">Home</a>
          </li>
          <li>
            <a className="menu-item">About</a>
          </li>
          <li>
            <a className="menu-item">Projects</a>
          </li>
          <li>
            <a className="menu-item">Contact Me</a>
          </li>
          <button className="contact-btn" onClick={() => {}}>
            Hire Me
          </button>
        </ul>

          <button className="menu-btn" onClick={toggleMenu}>
            <span 
              className="material-symbols-outlined"
              style={{ fontSize: "1.8rem"}}>
            {openMenu ? "close" : "menu"}
            </span>
        </button>
      </div>
    </nav>
  </>
  );
}

export default Nav;