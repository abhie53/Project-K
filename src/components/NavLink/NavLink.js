import "./NavLink.css";
import { Link } from "react-router-dom";
const NavLinks = () => {
    return (
        <nav className="nav-links">
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/products">Products</Link>
                </li>
            </ul>
        </nav>
    );
};

export default NavLinks;
