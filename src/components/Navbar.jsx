import './Navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav>
            <h1>Blog Client</h1>
            <ul>
                <Link to="/">Home</Link>
                <Link to="posts">Posts</Link>
                <Link to="login">Login</Link>
            </ul>
        </nav>
    )
}

export default Navbar;