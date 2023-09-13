import './Navbar.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    const [displayNav, setDisplayNav] = useState(false);

    const toggleNav = () => {
        setDisplayNav(!displayNav);
    }

    return (
        <nav>
            <h1>Blog Client</h1>
            <ul className={`nav-links ${displayNav ? 'show' : ''}`}>
                <Link className='nav-link' to="/" onClick={displayNav ? toggleNav : null}>
                    <p>Home</p>
                    <i className="fa-solid fa-house"></i>
                </Link>
                
                <Link className='nav-link' to="posts" onClick={displayNav ? toggleNav : null}>
                    <p>Posts</p>
                    <i className="fa-solid fa-book-open-reader"></i>
                </Link>

                <Link className='nav-link' to="login" onClick={displayNav ? toggleNav : null}>
                    <p>Login</p>
                    <i className="fa-solid fa-right-to-bracket"></i>
                </Link>
            </ul>
            <div className='hamburger' onClick={toggleNav}>
                <i className="fa-solid fa-bars"></i>
            </div>
        </nav>
    )
}

export default Navbar;