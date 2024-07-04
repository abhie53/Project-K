import './NavLink.css';
import { Link } from 'react-router-dom';
const NavLinks = () => {
  return (
    <nav className="nav-links">
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='contact'>Contact</Link></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#about">about</a></li>
      </ul>
    </nav>
  );
};

export default NavLinks;