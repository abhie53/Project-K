import './Header.css'
import Logo from '../Logo/Logo';
import NavLinks from '../NavLink/NavLink';

const Header = () => {
    return (
        <div className="header">
            <Logo />
            <NavLinks />
        </div>
    )
}

export default Header;