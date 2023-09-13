import './Navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav>
            <h1>Blog Client</h1>
            <ul>
                <Link className='nav-link' to="/">
                    <p>Home</p>
                    <i className="fa-solid fa-house"></i>
                </Link>
                <Link className='nav-link' to="posts">
                    <p>Posts</p>
                    <i class="fa-solid fa-book-open-reader"></i>
                </Link>
                <Link className='nav-link' to="login">
                    <p>Login</p>
                    <i className="fa-solid fa-right-to-bracket"></i>
                </Link>
            </ul>
        </nav>
    )
}

export default Navbar;