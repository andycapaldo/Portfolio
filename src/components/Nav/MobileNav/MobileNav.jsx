import './MobileNav.css';
import logo from '../../../assets/logo.png';

function MobileNav({ isOpen, toggleMenu }) {

    const handleScroll = (sectionId) => {
        if(isOpen) toggleMenu();
        document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
      };

    return (
        <>
            <div
                className={`mobile-menu ${isOpen ? "active" : ""}`}
                onClick={toggleMenu}
            >

                <div className="mobile-menu-container">
                    <img className="logo" src={logo} alt="logo" />

                    <ul>
                        <li>
                            <a onClick={()=> handleScroll("hero")} className="menu-item">Home</a>
                        </li>
                        <li>
                            <a onClick={()=> handleScroll("skills")} className="menu-item">Skills</a>
                        </li>
                        <li>
                            <a onClick={()=> handleScroll("work-exp")}className="menu-item">Work Experience</a>
                        </li>
                        <li>
                            <a onClick={()=> handleScroll("contact")}className="menu-item">Contact Me</a>
                        </li>

                        <button className="contact-btn" onClick={() => { } }>
                            Hire Me
                        </button>
                    </ul>
                </div>
            </div>
        </>
    );
}

export default MobileNav