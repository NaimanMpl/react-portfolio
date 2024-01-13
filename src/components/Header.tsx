import burgerIcon from '../assets/burger.svg';

const Header = () => {
  return (
    <header>
      <a href="/">Naïman</a>
      <img src={burgerIcon} alt="Menu" />
    </header>
  )
}

export default Header;