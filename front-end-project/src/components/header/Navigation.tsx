import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navigation() {
  const [navBarOpen, setNavbarOpen] = useState(false);
  const [themeSwitcher, setThemeSwitcher] = useState(false);
  const toggleNav = () => {
    setNavbarOpen(!navBarOpen);
  };
  const toggleTheme = () => {
    setThemeSwitcher(!themeSwitcher);
  };
  // TODO Redux stuff
  return (
    <>
      <button
        onClick={toggleNav}
        className={"nav-toggle"}
        aria-label='toggle navigation'>
        <span className='hamburger'></span>
      </button>
      <nav className='nav'>
        <ul className='nav__list'>
          <li className='nav__item'>
            <a href='#home' className='nav__link'>
              Home
            </a>
          </li>
          <li className='nav__item'>
            <a href='#about' className='nav__link'>
              About me
            </a>
          </li>
          <li className='nav__item'>
            <a href='#skills' className='nav__link'>
              My skills
            </a>
          </li>
          <li className='nav__item'>
            <a href='#contact' className='nav__link'>
              Contact
            </a>
          </li>
          <li>
            <Link to={"/playground"} className='nav__link'>
              Playground
            </Link>
          </li>
          <li>
            <i
              onClick={toggleTheme}
              className={
                themeSwitcher ? "fa-solid fa-moon" : "fa-solid fa-sun"
              }></i>
          </li>
        </ul>
      </nav>
    </>
  );
}
