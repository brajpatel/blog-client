import './PostDetail.css';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Loader from './Loader';
import PostCard from './PostCard';

function PostDetail(props) {
    const { displayLoader, posts } = props;
    const params = useParams();
    const postId = params.id;

    const [suggestedPosts, setSuggestedPosts] = useState(null);

    useEffect(() => {
        let filteredPosts = posts.filter((post) => post._id !== postId);
        setSuggestedPosts(filteredPosts);
    }, [])

    return (
        <div className='post-detail-container'>
            <div className='post-detail'>
                <h2>Post Title - 23/04/09 - 10:38:08</h2>
                <div className='post-image'>
                    <img src="https://r4.wallpaperflare.com/wallpaper/892/692/922/howl-s-moving-castle-studio-ghibli-fantasy-art-clouds-daylight-hd-wallpaper-3be62c2d93012fc995842bf94d4cdc00.jpg" alt="post-image"/>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic fugit sed ut accusamus nobis. Dignissimos excepturi eius illo nulla perferendis!
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere sint aliquid cumque, fuga, officia libero cum modi iusto harum suscipit veniam quas, numquam quos aperiam distinctio eum! Quas, quia inventore.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum sapiente necessitatibus nihil eum quis sunt saepe, nulla culpa expedita soluta eligendi libero vel qui animi illo porro. Dolore at libero cumque aliquid natus quisquam vel recusandae, maxime mollitia porro dolorum iste, suscipit itaque. Non minus repudiandae quos voluptatibus, asperiores obcaecati!
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda, quam?
                </p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic fugit sed ut accusamus nobis. Dignissimos excepturi eius illo nulla perferendis!
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere sint aliquid cumque, fuga, officia libero cum modi iusto harum suscipit veniam quas, numquam quos aperiam distinctio eum! Quas, quia inventore.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum sapiente necessitatibus nihil eum quis sunt saepe, nulla culpa expedita soluta eligendi libero vel qui animi illo porro. Dolore at libero cumque aliquid natus quisquam vel recusandae, maxime mollitia porro dolorum iste, suscipit itaque. Non minus repudiandae quos voluptatibus, asperiores obcaecati!
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda, quam?
                </p>
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

                {displayLoader && <Loader/>}

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
    )
}

export default PostDetail;