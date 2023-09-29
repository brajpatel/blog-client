import './Posts.css';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Loader from './Loader';
import PostCard from './PostCard';

function Posts() {
    const [displayLoader, setDisplayLoader] = useState(true);
    const [posts, setPosts] = useState(null);
    
    useEffect(() => {
        fetch('https://young-smoke-1917.fly.dev/posts')
            .then((response) => {
                if(response.status === 200) {
                    return response.json();
                }
            })
            .then((data) => {
                setPosts(data);
            })
            .catch((err) => {
                console.error("Error fetching posts:", err);
            })
            .finally(() => {
                if(posts) {
                    setDisplayLoader(false);                    
                }
            })
    }, [])

    return (
        <div className="all-posts">
            <h2>All Posts</h2>
                {displayLoader && <Loader/>}

                {posts && (
                    <div className="posts">
                        {posts.map((post) => {
                            <Link to={`/posts/${post._id}`} key={post._id}>
                                <PostCard title={post.title} image={post.image}/>
                            </Link>
                        })}
                    </div>
                )}
        </div>
    )
}

export default Posts;