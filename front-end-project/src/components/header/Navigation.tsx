import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { toggleNav, toggleTheme } from "../../redux/actions";
import { RootState } from "../../typescript/redux/store";
import moon from "../../assets/icons8-fog.gif";
import sun from "../../assets/icons8-sun.gif";

export default function Navigation() {
  const dispatch = useDispatch();
  const { lamp } = useSelector((state: RootState) => state.themeState);
  return (
    <>
      <button
        onClick={() => dispatch(toggleNav())}
        className={"nav-toggle"}
        aria-label='toggle navigation'>
        <span className='hamburger'></span>
      </button>
      <button className={"themeIcon"} onClick={() => dispatch(toggleTheme())}>
        <img
          className={"themeImage"}
          src={lamp ? moon : sun}
          alt='Theme icon'
        />
      </button>
      <nav className='nav'>
        <ul onClick={() => dispatch(toggleNav())} className='nav__list'>
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
        </ul>
      </nav>
    </>
  );
}
