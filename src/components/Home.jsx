import './Home.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function Home() {
    const [topPicks, setTopPicks] = useState([
        {
            title: "Post One Title",
            content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus eligendi corrupti consequuntur eius non autem, doloremque amet tenetur dolorem, nisi placeat nemo numquam. Ab dolores sed nisi, dolorum aliquam quibusdam eaque repellat enim sequi assumenda. Aut incidunt ex autem est, cumque nostrum saepe minus nesciunt blanditiis quas, beatae quis, delectus accusantium nisi molestiae adipisci laboriosam cupiditate totam accusamus. Impedit illo debitis dolorum blanditiis reprehenderit quia mollitia laborum temporibus neque unde. Consectetur dicta quibusdam aut, ad repudiandae earum minus. Expedita, dignissimos.",
            image: "https://c4.wallpaperflare.com/wallpaper/175/524/956/digital-digital-art-artwork-fantasy-art-drawing-hd-wallpaper-preview.jpg",
        },
        {
            title: "Post Two Title",
            content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti cupiditate praesentium aliquid iusto saepe eum iste exercitationem numquam laborum, quod optio. Aspernatur voluptas expedita odio dignissimos recusandae, tempore molestiae veritatis aliquid iure quibusdam placeat error incidunt itaque cumque quia quae saepe debitis vitae, nemo officia, non dolore voluptates. Sit, qui necessitatibus minima porro, quis ullam nesciunt, tempore numquam maxime alias fuga minus? Quo optio, architecto omnis porro repellat, voluptatum odit placeat asperiores reiciendis, exercitationem praesentium!",
            image: "https://c4.wallpaperflare.com/wallpaper/184/515/626/digital-digital-art-artwork-illustration-drawing-hd-wallpaper-preview.jpg"
        },
        {
            title: "Post Three Title",
            content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed optio illum quasi, quae provident magni laborum deleniti nam vel sunt reprehenderit nostrum odio omnis vitae sapiente itaque minus ad natus nesciunt repudiandae minima quaerat. Fugiat labore enim nam dolor itaque deserunt omnis, maiores, quisquam culpa tenetur tempora repudiandae ut quo ratione odio veniam possimus est voluptatem a dolores. Placeat, sapiente quod? Sint minima voluptatum nulla, provident reprehenderit illum suscipit illo pariatur totam hic, ipsam incidunt fuga. Sapiente dolorem voluptatibus similique architecto dolore labore est nostrum omnis cum doloremque distinctio id aperiam laborum, eius quis nobis mollitia laudantium blanditiis, numquam quisquam maxime, consequatur culpa! Deserunt culpa aliquam eius expedita quae magnam numquam! Officia molestiae quaerat quo hic porro atque, libero delectus.",
            image: "https://c4.wallpaperflare.com/wallpaper/767/612/930/nature-landscape-trees-digital-art-wallpaper-preview.jpg"
        }
    ])

    return (
        <div className="home">
            <div>
                <h2>Home</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, quae.</p>
                <p>Some stuff</p>
            </div>

            <div>
                <h2>Top Picks</h2>
                <div className='top-picks'>
                    {topPicks.map((post, index) => {
                        return (
                            <Link to={`/posts/${index + 186 * 49}`} className='link'>
                                <div className='home-post-thumbnail'>
                                    <img src={post.image} alt="sample-image"/>
                                    <div className='home-post-info'>
                                        <p className='thumbnail-title'>{post.title}</p>
                                        <p>{post.content.split(' ').slice(0, 25).join(' ')}...</p>
                                    </div>
                                </div>
                            </Link>
                        )
                    })}
                </div>
            </div>

        </div>
    )
}

export default Home;