import "./Nav.css";
import logo from '../../assets/logo.png';
import { useState } from "react";
import MobileNav from "./MobileNav/MobileNav";
import { Link } from 'react-scroll';


function Nav() {

  const [openMenu, setOpenMenu] = useState(false);

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  }

  const hireMeClick = () => {
    window.location.href = 'mailto:andrewcapaldo23@gmail.com?subject=Job%20Opportunity&body=I%20would%20like%20to%20discuss%20a%20potential%20job%20opportunity%20with%20you.';
  };

  return (
    <>
    <MobileNav isOpen={openMenu} toggleMenu={toggleMenu} />

    <nav className="nav-wrapper">
      <div className="nav-content">
        <img className="logo" src={logo} alt="logo" />
        <ul>
          <li>
            <Link activeClass="active" to="hero" smooth spy offset={-175} className="menu-item">Home</Link>
          </li>
          <li>
            <Link activeClass="active" to="skills"
            smooth spy offset={-250} className="menu-item">Skills</Link>
          </li>
          <li>
            <Link activeClass="active" to="work-exp"
            smooth spy offset={-250} className="menu-item">Work Experience</Link>
          </li>
          <li>
            <Link activeClass="active" to="projects"
            smooth spy offset={-250} className="menu-item">Projects</Link>
          </li>
          <li>
            <Link activeClass="active" to="contact" smooth spy offset={-100} className="menu-item">Contact Me</Link>
          </li>
          <button className="contact-btn" onClick={hireMeClick}>
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