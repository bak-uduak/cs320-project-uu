import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaImages, FaInfoCircle, FaEnvelope } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="nav">
            <div className="logo">
                {/* Directly reference the logo image in the public folder */}
                <img src="/TasteQuestLogo.png" alt="TasteQuest Logo" className="logo-image" />
            </div>
            <div className={`hamburger ${isOpen ? 'active' : ''}`} onClick={toggleMenu}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div className={`nav-links ${isOpen ? 'open' : ''}`}>
                <Link to="/"> Home</Link>
                <Link to="/about "> About</Link>
                <Link to="/categories "> Categories</Link>
                <Link to="/recipes "> Recipes</Link>
                <Link to="/comments "> Comments</Link>
                <Link to="/users "> Users</Link>
            </div>
        </nav>
    );
};

export default Navbar;








































// import React, {useState} from 'react';
// import {Link} from 'react-router-dom';
// import './Navbar.css';
//
// const Navbar = () => {
//     const [isOpen, setIsOpen] = useState(false);
//     const toggleMenu = () => {
//         setIsOpen(!isOpen);
//     };
//
//
//     return (
//         <nav className="nav">
//             <div className="logo"></div>
//
//                 <div className={`hamburger ${isOpen ? 'active' : ''}`} onClick={toggleMenu}>
//
//                 <img src={TasteQuestLogo} alt="TasteQuest Logo" />
//             </div>
//             <div className="nav-links">
//                 <Link to="/">Home</Link>
//                 <Link to="/about">About</Link>
//                 <Link to="/categories">Categories</Link>
//                 <Link to="/recipes">Recipes</Link>
//                 <Link to="/comments">Comments</Link>
//             </div>
//         </nav>
//     );
// };
//
// export default Navbar;
//
//
