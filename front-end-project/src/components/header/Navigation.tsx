import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { SetPage, toggleNav, toggleTheme } from "../../redux/actions/actions";
import { RootState } from "../../typescript/redux/store";
import moon from "../../assets/icons8-fog.gif";
import sun from "../../assets/icons8-sun.gif";

export default function Navigation() {
  const dispatch = useDispatch();
  const { lamp } = useSelector((state: RootState) => state.themeState);
  const { page } = useSelector((state: RootState) => state.navState);
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
            <Link
              to={"/"}
              className='nav__link'
              onClick={() => dispatch(SetPage("/"))}>
              Home
            </Link>
          </li>
          {page === "/" ? (
            <li className='nav__item'>
              <a href='#about' className='nav__link'>
                About me
              </a>
            </li>
          ) : (
            <Link
              to={"/"}
              className='nav__link'
              onClick={() => dispatch(SetPage("/"))}>
              About me
            </Link>
          )}

          {page === "/" ? (
            <li className='nav__item'>
              <a href='#skills' className='nav__link'>
                Skills
              </a>
            </li>
          ) : (
            <Link
              to={"/"}
              className='nav__link'
              onClick={() => dispatch(SetPage("/"))}>
              About me
            </Link>
          )}
          {page === "/" ? (
            <li className='nav__item'>
              <a href='#contact' className='nav__link'>
                Contact
              </a>
            </li>
          ) : (
            <Link
              to={"/"}
              className='nav__link'
              onClick={() => dispatch(SetPage("/"))}>
              About me
            </Link>
          )}
          <li>
            <Link
              to={"/playground"}
              className='nav__link'
              onClick={() => dispatch(SetPage("/playground"))}>
              Playground
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
