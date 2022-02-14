import facebookLogo from "../../assets/icons8-facebook-18.png";
import linkedinLogo from "../../assets/icons8-linkedin-18.png";
import instagramLogo from "../../assets/icons8-instagram-18.png";
import gitHubLogo from "../../assets/icons8-github-18.png";

function Footer() {
  return (
    <footer className='footer'>
      <div className='footer__license'>
        <p className='footer__license--extra-info'>
          Copyright &copy; 2022 Stefan Georgiev
        </p>
      </div>
      <div className='social_media'>
        <ul className='social_media__list'>
          <li className='social_media--item'>
            <a
              target='_blank'
              rel='noopener noreferrer'
              href={"https://www.linkedin.com/in/stefang23/"}>
              <img className='icon' src={linkedinLogo} alt='' />
            </a>
          </li>
          <li className='social_media--item'>
            <a
              target='_blank'
              rel='noopener noreferrer'
              href={"https://www.instagram.com/stefan_g23/"}>
              <img className='icon' src={instagramLogo} alt='' />
            </a>
          </li>
          <li className='social_media--item'>
            <a
              target='_blank'
              rel='noopener noreferrer'
              href={"https://www.facebook.com/stefan.georgievxD/"}>
              <img className='icon' src={facebookLogo} alt='' />
            </a>
          </li>
          <li className='social_media--item'>
            <a
              target='_blank'
              rel='noopener noreferrer'
              href={"https://github.com/NoHop3"}>
              <img className='icon' src={gitHubLogo} alt='' />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
export default Footer;
