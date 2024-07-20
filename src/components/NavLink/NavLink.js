import "./NavLink.css";
import { Link } from "react-router-dom";
const NavLinks = () => {
    return (
        <nav className="nav-links">
            <ul>
                <li className="xd">
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
                <li>
                    <Link to="/services">Services</Link>
                </li>
                <li>
                    <a href="#about">about</a>
                </li>
                <li>
                    <Link to="/products">Products</Link>
                </li>
            </ul>
        </nav>
    );
};

export default NavLinks;
