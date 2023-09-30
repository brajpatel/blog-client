import './Home.css';
import { Link } from 'react-router-dom';
import Loader from './Loader';
import PostCard from './PostCard';

function Home(props) {
    const { displayLoader, posts } = props;

    return (
        <div className="home">
            <div>
                <h2>Home</h2>
                <p>Open your mind and explore different perspectives</p>
                <p>Like Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab illum aperiam provident consequatur excepturi nesciunt!</p>
                <p>And Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt ex, quo nam, asperiores dolorum velit esse impedit saepe repellendus porro sint, quidem laborum sapiente amet.</p>
            </div>

            <div>
                <h2>Featured</h2>
                {displayLoader && <Loader/>}

                {posts && (
                    <div className="featured-posts">
                        {posts.map((post) => {
                            return (
                                <Link to={`/posts/${post._id}`} key={post._id} className="link post-link">
                                    <PostCard title={post.title} image={post.image}/>
                                </Link>
                            )
                        })}
                    </div>
                )}
            </div>

        </div>
    )
}

export default Home;