import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Home from './components/Home';
import Posts from './components/Posts.jsx';
import Login from './components/Login';

function RouteSwitch() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/posts" element={<Posts/>}/>
        <Route path="/posts/:id" element={<PostDetail/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default RouteSwitch;
