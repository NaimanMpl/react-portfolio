import { Link } from 'react-router-dom';
import burgerIcon from '../assets/burger.svg';
const Header = () => {
  return (
    <header>
      <Link to='/'>Naïman</Link>
      <img src={burgerIcon} alt="Menu" />
    </header>
  )
}

export default Header;