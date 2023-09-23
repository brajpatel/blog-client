import './Home.css';
import { useState, useEffect } from 'react';

function Home() {
    const [topPicks, setTopPicks] = useState([]);

    useEffect(() => {
        (async function() {
            const req = await fetch('');

            if(req.status !== 200) {
                setTopPicks(null);
            }
            else {
                const postsData = await req.json();
                setTopPicks(postsData);
            }
        })();
    }, [])

    return !topPicks ? (
        <div>404 not found</div>
    ) : (
        <div className="home">
            <div>
                <h2>Home</h2>
                <p>Open your mind and explore different perspectives</p>
                <p>Like Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab illum aperiam provident consequatur excepturi nesciunt!</p>
                <p>And Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt ex, quo nam, asperiores dolorum velit esse impedit saepe repellendus porro sint, quidem laborum sapiente amet.</p>
            </div>

            <div>
                <h2>Top Picks</h2>
                <div className='top-picks'>
                    {/* {topPicks.map((post, index) => {
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
                    })} */}
                </div>
            </div>

        </div>
    )
}

export default Home;