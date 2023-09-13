import './Home.css';
import { Link } from 'react-router-dom';

function Home() {
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
                    <Link to="/posts/post-one" className='link'>
                        <div className='post-thumbnail'>
                            <img src="https://c4.wallpaperflare.com/wallpaper/175/524/956/digital-digital-art-artwork-fantasy-art-drawing-hd-wallpaper-preview.jpg" alt="sample-image"/>
                            <p>post one title</p>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque consectetur maiores tenetur ea animi ipsam...</p>
                        </div>
                    </Link>
 
                    <Link to="/posts/post-two" className='link'>
                        <div className='post-thumbnail'>
                            <img src="https://c4.wallpaperflare.com/wallpaper/184/515/626/digital-digital-art-artwork-illustration-drawing-hd-wallpaper-preview.jpg" alt="sample-image"/>
                            <p>post two title</p>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam vel ipsam quaerat minus, qui labore laborum totam explicabo odit quod quidem ducimus unde modi harum?...</p>
                        </div>
                    </Link>

                    <Link to="/posts/post-three" className='link'>
                        <div className='post-thumbnail'>
                            <img src="https://c4.wallpaperflare.com/wallpaper/767/612/930/nature-landscape-trees-digital-art-wallpaper-preview.jpg" alt="sample-image"/>
                            <p>post three title</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores dolor doloribus temporibus obcaecati corrupti tempora impedit at deserunt!</p>
                        </div>
                    </Link>
                </div>
            </div>

        </div>
    )
}

export default Home;