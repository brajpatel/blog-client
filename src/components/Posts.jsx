import './Posts.css';
import { Link } from 'react-router-dom';

function Posts() {
    return (
        <div className="all-posts">
            <h2>All Posts</h2>
            <div className="posts">
                <Link to="/posts/post-one" className='link'>
                    <div className='post-thumbnail'>
                        <img src="https://c4.wallpaperflare.com/wallpaper/175/524/956/digital-digital-art-artwork-fantasy-art-drawing-hd-wallpaper-preview.jpg" alt="sample-image"/>
                        <div className='post-info'>
                            <p className='thumbnail-title'>post one title</p>
                        </div>
                    </div>
                </Link>

                <Link to="/posts/post-one" className='link'>
                    <div className='post-thumbnail'>
                        <img src="https://c4.wallpaperflare.com/wallpaper/175/524/956/digital-digital-art-artwork-fantasy-art-drawing-hd-wallpaper-preview.jpg" alt="sample-image"/>
                        <div className='post-info'>
                            <p className='thumbnail-title'>post one title</p>
                        </div>
                    </div>
                </Link>

                <Link to="/posts/post-one" className='link'>
                    <div className='post-thumbnail'>
                        <img src="https://c4.wallpaperflare.com/wallpaper/175/524/956/digital-digital-art-artwork-fantasy-art-drawing-hd-wallpaper-preview.jpg" alt="sample-image"/>
                        <div className='post-info'>
                            <p className='thumbnail-title'>post one title</p>
                        </div>
                    </div>
                </Link>

                <Link to="/posts/post-one" className='link'>
                    <div className='post-thumbnail'>
                        <img src="https://c4.wallpaperflare.com/wallpaper/175/524/956/digital-digital-art-artwork-fantasy-art-drawing-hd-wallpaper-preview.jpg" alt="sample-image"/>
                        <div className='post-info'>
                            <p className='thumbnail-title'>post one title</p>
                        </div>
                    </div>
                </Link>

                <Link to="/posts/post-one" className='link'>
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