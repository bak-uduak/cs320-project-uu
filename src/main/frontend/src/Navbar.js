import React from 'react';
import {Link} from 'react-router-dom';

const Navbar = () => {
    return (
        <nav>
            <div>
                <Link to="/">Home</Link>
                <span> </span>
                <span></span>
                <Link to="/page2"> Page2</Link>
            </div>
        </nav>
    );
};

export default Navbar;