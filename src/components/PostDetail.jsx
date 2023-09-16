import './PostDetail.css';

function PostDetail() {
    return (
        <div className='post-detail-container'>
            <img src="https://c4.wallpaperflare.com/wallpaper/767/612/930/nature-landscape-trees-digital-art-wallpaper-preview.jpg" alt="sample-image"/>
            <div className='post-detail'>
                <h2>Post Title - 23/04/09 - 10:38:08</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic fugit sed ut accusamus nobis. Dignissimos excepturi eius illo nulla perferendis!
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere sint aliquid cumque, fuga, officia libero cum modi iusto harum suscipit veniam quas, numquam quos aperiam distinctio eum! Quas, quia inventore.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum sapiente necessitatibus nihil eum quis sunt saepe, nulla culpa expedita soluta eligendi libero vel qui animi illo porro. Dolore at libero cumque aliquid natus quisquam vel recusandae, maxime mollitia porro dolorum iste, suscipit itaque. Non minus repudiandae quos voluptatibus, asperiores obcaecati!
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda, quam?
                </p>
            </div>

            <div className='comments'>
                <h2>Comments</h2>
                <div className='comment'>
                    <p>Name - date</p>
                    <p>Comment text</p>
                </div>

                <p className='no-comments'>This post has no comments</p>
            </div>

            <div className='add-comment-container'>
                <h2>Add a comment</h2>
                <form action="">
                    <div className='input-container'>
                        <label htmlFor="name">Name</label>
                        <input id='name' type="text" required/>
                    </div>

                    <div className='input-container'>
                        <label htmlFor="message">Message</label>
                        <input id='message' type="text" required/>
                    </div>
                    
                    <button className='add-comment-btn'>Add Comment</button>
                </form>
            </div>
        </div>
    )
}

export default PostDetail;