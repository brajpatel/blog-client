import './Posts.css';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Loader from './Loader';
import PostCard from './PostCard';

function Posts() {
    const [displayLoader, setDisplayLoader] = useState(false);
    const [posts, setPosts] = useState(true);
    
    // useEffect(() => {
    //     getPosts();
    // }, [])

    // const getPosts = async () => {
    //     const req = await fetch('https://young-smoke-1917.fly.dev/posts', { mode: 'cors' });

    //     if(req.status !== 200) {
    //         return;
    //     }
    //     else {
    //         const postsData = await req.json();
    //         setFeaturedPosts(postsData);
    //     }
    // }

    return (
        <div className="all-posts">
            <h2>All Posts</h2>
                {displayLoader && <Loader/>}

                {posts && (
                    <div className="posts">
                        <Link to="/posts/post-one" className='link post-link'>
                            <PostCard title="post one title" image="https://c4.wallpaperflare.com/wallpaper/175/524/956/digital-digital-art-artwork-fantasy-art-drawing-hd-wallpaper-preview.jpg"/>
                        </Link>

                        <Link to="/posts/post-one" className='link post-link'>
                            <div className='post-thumbnail'>
                                <img src="https://c4.wallpaperflare.com/wallpaper/184/515/626/digital-digital-art-artwork-illustration-drawing-hd-wallpaper-preview.jpg" alt="sample-image"/>
                                <div className='overlay'></div>
                                    <p className='thumbnail-title'>post two title</p>
                            </div>
                        </Link>

                        <Link to="/posts/post-one" className='link post-link'>
                            <div className='post-thumbnail'>
                                <img src="https://c4.wallpaperflare.com/wallpaper/767/612/930/nature-landscape-trees-digital-art-wallpaper-preview.jpg" alt="sample-image"/>
                                <div className='overlay'></div>
                                    <p className='thumbnail-title'>post three title</p>
                            </div>
                        </Link>

                        <Link to="/posts/post-one" className='link post-link'>
                            <div className='post-thumbnail'>
                                <img src="https://c4.wallpaperflare.com/wallpaper/175/524/956/digital-digital-art-artwork-fantasy-art-drawing-hd-wallpaper-preview.jpg" alt="sample-image"/>
                                <div className='overlay'></div>
                                    <p className='thumbnail-title'>post one title</p>
                            </div>
                        </Link>

                        <Link to="/posts/post-one" className='link post-link'>
                            <div className='post-thumbnail'>
                                <img src="https://c4.wallpaperflare.com/wallpaper/184/515/626/digital-digital-art-artwork-illustration-drawing-hd-wallpaper-preview.jpg" alt="sample-image"/>
                                <div className='overlay'></div>
                                    <p className='thumbnail-title'>post two title</p>
                            </div>
                        </Link>

                        <Link to="/posts/post-one" className='link post-link'>
                            <div className='post-thumbnail'>
                                <img src="https://c4.wallpaperflare.com/wallpaper/767/612/930/nature-landscape-trees-digital-art-wallpaper-preview.jpg" alt="sample-image"/>
                                <div className='overlay'></div>
                                    <p className='thumbnail-title'>post three title</p>
                            </div>
                        </Link>

                        <Link to="/posts/post-one" className='link post-link'>
                            <div className='post-thumbnail'>
                                <img src="https://c4.wallpaperflare.com/wallpaper/175/524/956/digital-digital-art-artwork-fantasy-art-drawing-hd-wallpaper-preview.jpg" alt="sample-image"/>
                                <div className='overlay'></div>
                                    <p className='thumbnail-title'>post one title</p>
                            </div>
                        </Link>
                </div>
            )}
        </div>
    )
}

export default Posts;