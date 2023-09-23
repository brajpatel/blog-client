import './Posts.css';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Posts() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        (async function() {
            const req = await fetch('');

            if(req.status !== 200) {
                setPosts(null);
            }
            else {
                const postsData = await req.json();
                setPosts(postsData);
            }
        })();
    }, [])

    return (
        <div className="all-posts">
            <h2>All Posts</h2>
            <div className="posts">
                <Link to="/posts/post-one" className='link post-link'>
                    <div className='post-thumbnail'>
                        <img src="https://c4.wallpaperflare.com/wallpaper/175/524/956/digital-digital-art-artwork-fantasy-art-drawing-hd-wallpaper-preview.jpg" alt="sample-image"/>
                        <div className='post-info'>
                            <p className='thumbnail-title'>post one title</p>
                        </div>
                    </div>
                </Link>

                <Link to="/posts/post-one" className='link post-link'>
                    <div className='post-thumbnail'>
                        <img src="https://c4.wallpaperflare.com/wallpaper/184/515/626/digital-digital-art-artwork-illustration-drawing-hd-wallpaper-preview.jpg" alt="sample-image"/>
                        <div className='post-info'>
                            <p className='thumbnail-title'>post one title</p>
                        </div>
                    </div>
                </Link>

                <Link to="/posts/post-one" className='link post-link'>
                    <div className='post-thumbnail'>
                        <img src="https://c4.wallpaperflare.com/wallpaper/767/612/930/nature-landscape-trees-digital-art-wallpaper-preview.jpg" alt="sample-image"/>
                        <div className='post-info'>
                            <p className='thumbnail-title'>post one title</p>
                        </div>
                    </div>
                </Link>

                <Link to="/posts/post-one" className='link post-link'>
                    <div className='post-thumbnail'>
                        <img src="https://c4.wallpaperflare.com/wallpaper/175/524/956/digital-digital-art-artwork-fantasy-art-drawing-hd-wallpaper-preview.jpg" alt="sample-image"/>
                        <div className='post-info'>
                            <p className='thumbnail-title'>post one title</p>
                        </div>
                    </div>
                </Link>

                <Link to="/posts/post-one" className='link post-link'>
                    <div className='post-thumbnail'>
                        <img src="https://c4.wallpaperflare.com/wallpaper/184/515/626/digital-digital-art-artwork-illustration-drawing-hd-wallpaper-preview.jpg" alt="sample-image"/>
                        <div className='post-info'>
                            <p className='thumbnail-title'>post one title</p>
                        </div>
                    </div>
                </Link>

                <Link to="/posts/post-one" className='link post-link'>
                    <div className='post-thumbnail'>
                        <img src="https://c4.wallpaperflare.com/wallpaper/767/612/930/nature-landscape-trees-digital-art-wallpaper-preview.jpg" alt="sample-image"/>
                        <div className='post-info'>
                            <p className='thumbnail-title'>post one title</p>
                        </div>
                    </div>
                </Link>

                <Link to="/posts/post-one" className='link post-link'>
                    <div className='post-thumbnail'>
                        <img src="https://c4.wallpaperflare.com/wallpaper/175/524/956/digital-digital-art-artwork-fantasy-art-drawing-hd-wallpaper-preview.jpg" alt="sample-image"/>
                        <div className='post-info'>
                            <p className='thumbnail-title'>post one title</p>
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Posts;