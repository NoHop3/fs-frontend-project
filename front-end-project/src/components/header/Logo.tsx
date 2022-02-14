import logo__png from '../../assets/stgdev__logo.png'

export default function Logo() {
  return (
    <div className='logo__container'>
      <img className='logo--png' src={logo__png} alt='Logo' />
    </div>
  );
}
