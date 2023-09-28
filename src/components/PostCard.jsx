import './PostCard.css';

function PostCard() {
    return (
        <div className='post-thumbnail'>
            <img src="https://c4.wallpaperflare.com/wallpaper/175/524/956/digital-digital-art-artwork-fantasy-art-drawing-hd-wallpaper-preview.jpg" alt="sample-image"/>
            <div className='overlay'></div>
            <p className='thumbnail-title'>post one title</p>
        </div>
    )
}

export default PostCard;