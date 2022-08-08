import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Posts from './components/Posts/Posts';
import Post from './components/Post/Post';

import './App.css';

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path='/' element={<Posts />} />
                <Route path='/posts/:id' element={<Post />}/>
            </Routes>
        </BrowserRouter>
    );
};

export default App;