import './MobileNav.css';
import logo from '../../../assets/logo.png';

function MobileNav({ isOpen, toggleMenu }) {

    const smoothScroll = (targetY, duration) => {
        const startY = window.scrollY;
        const distance = targetY - startY;
        let startTime = null;

        const step = (currentTime) => {
            if (!startTime) startTime = currentTime;
            const timeElapsed = currentTime - startTime;
            const progress = Math.min(timeElapsed / duration, 1);
            const ease = progress * (2 - progress);

            window.scrollTo(0, startY + distance * ease);

            if (timeElapsed < duration) {
                window.requestAnimationFrame(step);
            }
        };

        window.requestAnimationFrame(step);
    };

    const handleScroll = (sectionId) => {
        if (isOpen) toggleMenu();
        setTimeout(() => {
            const element = document.getElementById(sectionId);
            const yOffset = -240;
            const y = element.getBoundingClientRect().top + window.scrollY + yOffset;

            smoothScroll(y, 1200);
        }, 600);
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
                            <a onClick={()=> handleScroll("projects")}className="menu-item">Projects</a>
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