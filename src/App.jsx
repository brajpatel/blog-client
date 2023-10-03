import './App.css';
import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Home from './components/Home';
import Posts from './components/Posts.jsx';
import PostDetail from './components/PostDetail';
import Login from './components/Login';

function App() {
    const [displayLoader, setDisplayLoader] = useState(true);
    const [posts, setPosts] = useState(null);
    
    useEffect(() => {
        fetch('https://young-smoke-1917.fly.dev/posts')
            .then((response) => {
                if(response.status === 200) {
                    return response.json();
                }
            })
            .then((data) => {
                setPosts(data);
            })
            .catch((err) => {
                console.error("Error fetching posts:", err);
            })
            .finally(() => {
                setDisplayLoader(false);
            })
    }, [])
    
    return (
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home displayLoader={displayLoader} posts={posts}/>}/>
          <Route path="/posts" element={<Posts displayLoader={displayLoader} posts={posts}/>}/>
          <Route path="/posts/:id" element={<PostDetail posts={posts}/>}/>
          <Route path="/login" element={<Login/>}/>
        </Routes>
      </BrowserRouter>
    )
}

export default App;
