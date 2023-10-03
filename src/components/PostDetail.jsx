import './PostDetail.css';
import { useEffect, useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import Loader from './Loader';
import PostCard from './PostCard';

function PostDetail(props) {
    const { posts } = props;
    const params = useParams();
    const postId = params.id;
    const navigate = useNavigate();

    const [displayLoader, setDisplayLoader] = useState(true);
    const [post, setPost] = useState(null);
    const [comments, setComments] = useState(null);
    const [commentName, setCommentName] = useState('');
    const [commentMessage, setCommentMessage] = useState('');
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

    const handleCommentName = (e) => {
        setCommentName(e.target.value);
    }

    const handleCommentMessage = (e) => {
        setCommentMessage(e.target.value);
    }

    const submitComment = () => {
        if(commentName === '' || commentMessage === '') return;

        fetch(`https://young-smoke-1917.fly.dev/posts/${postId}`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: commentName,
                message: commentMessage
            })
        })

        navigate(`/posts/${postId}`);
    }

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
                        <p className='post-date'>{post.date_added}</p>
                        <div className='post-image'>
                            <img src={post.image} alt={post.title}/>
                        </div>
                        <p className='post-content'>{post.content}</p>
                    </div>

                    <div className='comments-section'>
                        <div>
                            <h2>Comments</h2>
                            {comments.length ? (
                                <div className='comments'>
                                    {comments.map((comment) => {
                                        return (
                                            <div className='comment' key={comment._id}>
                                                <p>{comment.name}</p>
                                                <p>{comment.message}</p>
                                            </div>
                                        )
                                    })}
                                </div>
                            ) : (
                                <p className='no-comments'>This post has no comments</p>
                            )}

                        </div>

                        <div className='add-comment-container'>
                            <h2>Leave a Reply</h2>
                            <form className='comment-form'>
                                <div className='input-container'>
                                    <label htmlFor="name">Name</label>
                                    <input id='name' onInput={handleCommentName} type="text" required/>
                                </div>

                                <div className='input-container'>
                                    <label htmlFor="message">Message</label>
                                    <input id='message' onInput={handleCommentMessage} type="text" required/>
                                </div>
                                
                                <button className='add-comment-btn' onClick={submitComment} type='button'>Post Comment</button>
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