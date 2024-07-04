import './Header.css';
import Logo from '../Logo/Logo';
import NavLinks from '../NavLink/NavLink';

const Header = () => {
    return (
        <div className="header">
            <div className="logo-heading-container">
                <Logo />
                <h2 className='heading'>SVY BIOTECH</h2>
            </div>
            <NavLinks className="nav-links" />
        </div>
    );
}

export default Header;
