import './Navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav>
            <h1>Blog Client</h1>
            <ul>
                <Link to="/">Home</Link>
                <Link to="posts">Home</Link>
            </ul>
        </nav>
    )
}

export default Navbar;