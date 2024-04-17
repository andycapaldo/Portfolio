import "./Nav.css"

function Nav() {
  return (
    <nav className="nav-wrapper">
      <div className="nav-content">
        <img className="logo" src='/public/images/AC_logo.png' alt="logo" />
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

          <button className="menu-btn" onClick={()=>{}}>
            <span className="material-symbols-outlined">
            menu
            </span>
        </button>
      </div>
    </nav>
  );
}

export default Nav;