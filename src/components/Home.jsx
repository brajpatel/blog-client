import './Home.css';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Loader from './Loader';
import PostCard from './PostCard';

function Home() {
    const [displayLoader, setDisplayLoader] = useState(true);
    const [featuredPosts, setFeaturedPosts] = useState(null);

    useEffect(() => {
        fetch('https://young-smoke-1917.fly.dev/posts')
            .then((response) => {
                if(response.status === 200) {
                    return response.json();
                }
            })
            .then((data) => {
                setFeaturedPosts(data);
            })
            .catch((err) => {
                console.error("Error fetching posts:", err);
            })
            .finally(() => {
                setDisplayLoader(false);
            })
    }, [])

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

                {featuredPosts && (
                    <div className="featured-posts">
                        {featuredPosts.map((post) => {
                            return (
                                <Link to={`/posts/${post._id}`} key={post._id} className="link post-link">
                                    <PostCard title={post.title} image={post.image} page="home"/>
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