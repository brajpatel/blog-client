import './Home.css';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div className="home">
            <div>
                <h2>Home</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, quae.</p>
                <p>Some stuff</p>
            </div>

            <div>
                <h2>Top Posts</h2>
                <div className='top-posts'>
                    <Link to="/posts/post-one">
                        <div className='post-thumbnail'>
                            <p>thumbnail</p>
                            <p>post one title</p>
                        </div>
                    </Link>
 
                    <Link to="/posts/post-two">
                        <div className='post-thumbnail'>
                            <p>thumbnail</p>
                            <p>post two title</p>
                        </div>
                    </Link>

                    <Link to="/posts/post-three">
                        <div className='post-thumbnail'>
                            <p>thumbnail</p>
                            <p>post three title</p>
                        </div>
                    </Link>
                </div>
            </div>

        </div>
    )
}

export default Home;