import './PostDetail.css';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Loader from './Loader';
import PostCard from './PostCard';

function PostDetail(props) {
    const { posts } = props;
    const params = useParams();
    const postId = params.id;

    const [displayLoader, setDisplayLoader] = useState(true);
    const [post, setPost] = useState(null);
    const [comments, setComments] = useState(null);
    const [suggestedPosts, setSuggestedPosts] = useState(null);

    useEffect(() => {
        let filteredPosts = posts.filter((post) => post._id !== postId);
        setSuggestedPosts(filteredPosts);

        fetch(`https://young-smoke-1917.fly.dev/posts/${postId}`)
            .then((response) => {
                if(response.status === 200) {
                    return response.json();
                }
            })
            .then((data) => {
                setPost(data);
                setComments(data.comments);
            })
            .catch((err) => {
                console.error("Error fetching the selected post:", err);
            })
            .finally(() => {
                setDisplayLoader(false);
            })
    }, [])

    return (
        <div>
            {displayLoader && (
                <div className='loader-box'>
                    <Loader/>
                </div>
            )}

            {post && (
                <div className='post-detail-container'>
                    <div className='post-detail'>
                        <h2>{post.title}</h2>
                        <p>{post.date_added}</p>
                        <div className='post-image'>
                            <img src={post.image} alt={post.title}/>
                        </div>
                        <p>{post.content}</p>
                    </div>

                    <div className='comments-section'>
                        <div className='comments'>
                            <h2>Comments</h2>
                            <div className='comment'>
                                <p>Name - date</p>
                                <p>Comment text</p>
                            </div>

                            <p className='no-comments'>This post has no comments</p>
                        </div>

                        <div className='add-comment-container'>
                            <h2>Leave a Reply</h2>
                            <form action="">
                                <div className='input-container'>
                                    <label htmlFor="name">Name</label>
                                    <input id='name' type="text" required/>
                                </div>

                                <div className='input-container'>
                                    <label htmlFor="message">Message</label>
                                    <input id='message' type="text" required/>
                                </div>
                                
                                <button className='add-comment-btn'>Post Comment</button>
                            </form>
                        </div>
                    </div>

                    <div className='suggested-posts'>
                        <h2>Suggested Posts</h2>
                        {suggestedPosts && (
                            <div>
                                {suggestedPosts.map((post) => {
                                    return (
                                        <Link to={`/posts/${post._id}`} key={post._id} className="link post-link posts-page">
                                            <PostCard title={post.title} image={post.image}/>
                                        </Link>
                                    )
                                })}
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    )
}

export default PostDetail;