import './Posts.css';
import { Link } from 'react-router-dom';
import Loader from './Loader';
import PostCard from './PostCard';

function Posts(props) {

    return (
        <div className="all-posts">
            <h2>All Posts</h2>
                {displayLoader && <Loader/>}

                {posts && (
                    <div className="posts">
                        {posts.map((post) => {
                            return (
                                <Link to={`/posts/${post._id}`} key={post._id} className="link post-link posts-page">
                                    <PostCard title={post.title} image={post.image}/>
                                </Link>
                            )
                        })}
                    </div>
                )}
        </div>
    )
}

export default Posts;