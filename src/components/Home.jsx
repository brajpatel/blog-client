import './Home.css';
import { useState, useEffect } from 'react';
import Loader from './Loader';

function Home() {
    const [displayLoader, setDisplayLoader] = useState(true);
    const [featuredPosts, setFeaturedPosts] = useState(null);

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
    //         setDisplayLoader(false);
    //     }
    // }

    return (
        <div className="home">
            <div>
                <h2>Home</h2>
                <p>Open your mind and explore different perspectives</p>
                <p>Like Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab illum aperiam provident consequatur excepturi nesciunt!</p>
                <p>And Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt ex, quo nam, asperiores dolorum velit esse impedit saepe repellendus porro sint, quidem laborum sapiente amet.</p>
            </div>

            <div>
                <h2>Featured</h2>
                {displayLoader && <Loader/>}

                {featuredPosts && (
                    <>
                        <div className='featured'>
                            {featuredPosts.map((post) => {
                                return (
                                    <Link to={`/posts/${post.id}`} key={post.id} className='link'>
                                        <div className='home-post-thumbnail'>
                                            <img src={post.image} alt="sample-image"/>
                                            <div className='home-post-info'>
                                                <p className='thumbnail-title'>{post.title}</p>
                                                <p>{post.content.split(' ').slice(0, 25).join(' ')}...</p>
                                                <h2>THESE CARDS NEEDS CHANGING</h2>
                                            </div>
                                        </div>
                                    </Link>
                                )
                            })}
                        </div>
                    </>
                )}
            </div>

        </div>
    )
}

export default Home;