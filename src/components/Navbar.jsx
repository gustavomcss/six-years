// Import Style Component
import './Navbar.css';

// Import React Router DOM
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <>
            <div className="Navbar">
                <nav className="navHeader">
                    <NavLink to="/">Início</NavLink>
                    <NavLink to="/letter">Carta</NavLink>
                    <NavLink to="/album">Álbum</NavLink>
                </nav>
            </div>
        </>
    );
};

export default Navbar;