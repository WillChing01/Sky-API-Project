import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import NavBar from './components/NavBar/NavBar';
import Home from './components/Home/Home';
import Posts from './components/Posts/Posts';
import Post from './components/Post/Post';
import CreatePost from './components/CreatePost/CreatePost';
import Photos from './components/Photos/Photos';

import './App.css';
import ResponsiveAppBar from './components/ResponsiveAppBar/ResponsiveAppBar';

const App: React.FC = () => {
    return (
        <BrowserRouter>
            <ResponsiveAppBar />
            <div>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/posts' element={<Posts />} />
                    <Route path='/posts/:id' element={<Post />}/>
                    <Route path='/create-post' element={<CreatePost />}/>
                    <Route path='/photos' element={<Photos />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
};

export default App;