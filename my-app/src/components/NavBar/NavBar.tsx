import React from 'react';
import { Link } from 'react-router-dom';

import './NavBar.css';

const NavBar: React.FC = () => {
    return (
        <div className='nav-style'>
            <table className='center-table'>
                <thead>
                    <tr>
                        <th><Link to='/'>Home</Link></th>
                        <th><Link to='/photos'>Photos</Link></th>
                        <th><Link to='/posts'>Posts</Link></th>
                        <th><Link to='/create-post'>Create post</Link></th>
                    </tr>
                </thead>
            </table>
        </div>
    );
};

export default NavBar;