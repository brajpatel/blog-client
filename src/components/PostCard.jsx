import './PostCard.css';

function PostCard(props) {
    const { title, image } = props;

    return (
        <div className='post-card'>
            <img src={image} alt={title}/>
            <div className='overlay'></div>
            <p className='thumbnail-title'>{title}</p>
        </div>
    )
}

export default PostCard;