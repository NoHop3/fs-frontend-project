import React from "react";
import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <nav className='nav'>
      <ul>
        <li className='nav__item'>
          {/* TODO LINKS */}
          <Link to={"/"} className='nav__link'>
            Home
          </Link>
        </li>
        <li className='nav__item'>
          <Link to={"/"} className='nav__link'>
            About me
          </Link>
        </li>
        <li className='nav__item'>
          <Link to={"/"} className='nav__link'>
            My skills
          </Link>
        </li>
        <li className='nav__item'>
          <Link to={"/"} className='nav__link'>
            Contact
          </Link>
          <Link to={"/"} className='nav__link'>
            Playground
          </Link>
        </li>
      </ul>
    </nav>
  );
}
