import { Link } from 'react-router-dom';
import './NotFound.css';

function NotFound() {
    return (
        <div className='not-found'>
            <div>
                <p>Uh oh... It looks like you're lost.</p>
                <p>
                    Head back to safety by clicking
                    <Link to='/' className='link'>here</Link>
                </p>
            </div>
            <img src="/not-found.png" alt="not found image"/>
        </div>
    )
}

export default NotFound;
