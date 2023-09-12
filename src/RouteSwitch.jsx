import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Welcome from './components/Welcome';
import Posts from './components/Posts.jsx';

function RouteSwitch() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Welcome/>}/>
        <Route path="/posts" element={<Posts/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default RouteSwitch;
