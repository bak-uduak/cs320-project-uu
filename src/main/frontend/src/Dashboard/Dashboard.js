import React from 'react';
import { Link } from 'react-router-dom';
import './Dashboard.css';
//import './index.js' from

function Dashboard() {
    return (
        <div className="dashboard">
            <h1>Food Exploration Dashboard</h1>
            <nav className="nav-menu">
                <ul>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/users">Users</Link>
                    </li>
                    <li>
                        <Link to="/recipes">Recipes</Link>
                    </li>
                    <li>
                        <Link to="/categories">Categories</Link>
                    </li>
                    <li>
                        <Link to="/comments">Comments</Link>
                    </li>
                </ul>
            </nav>
            <div className="content">
                <p>Welcome to the Food Exploration Dashboard! Use the menu above to navigate through the different sections.</p>
            </div>
        </div>
    );
}

export default Dashboard;
