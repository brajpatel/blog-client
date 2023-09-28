import './PostCard.css';

function PostCard(props) {
    const { title, image } = props;

    return (
        <div className='post-thumbnail'>
            <img src={image} alt="sample-image"/>
            <div className='overlay'></div>
            <p className='thumbnail-title'>{title}</p>
        </div>
    )
}

export default PostCard;