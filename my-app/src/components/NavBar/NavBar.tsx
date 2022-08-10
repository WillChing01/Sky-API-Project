import React from 'react';
import { Link } from 'react-router-dom';

import './NavBar.css';

const NavBar: React.FC = () => {
    return (
        <div className='nav-style'>
            <table className='center-table'>
                <thead>
                    <tr>
                        <th><Link to='/' className='link-style'>Home</Link></th>
                        <th><Link to='/photos' className='link-style'>Photos</Link></th>
                        <th><Link to='/posts' className='link-style'>Posts</Link></th>
                        <th><Link to='/create-post' className='link-style'>Create post</Link></th>
                    </tr>
                </thead>
            </table>
        </div>
    );
};

export default NavBar;