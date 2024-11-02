// import React from 'react';
// import './App.css';
// import { useNavigate, NavLink, BrowserRouter as Router, Routes, Route } from "react-router-dom";
//
// import About from "./About";
// import Categories from "./Categories";
// import Recipes from "./Recipes";
// import Comments from "./Comments";
// import Users from "./Users";
// import Home from "./Home";
//
// const App = () => {
//     const navigate = useNavigate();
//
//     const navigateToDashboard = () => {
//         navigate('/dashboard');
//     };
//
//     return (
//         <Router>
//             <div className='App'>
//                 <header>
//                     {/* Display main welcome message */}
//                     <h1>Welcome to Food Exploration Page</h1>
//                 </header>
//
//                 {/* Centered navigation links with NavLink for routing */}
//                 <nav className="navbar">
//                     <NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>Home</NavLink>
//                     <NavLink to="/about" className={({ isActive }) => isActive ? "active" : ""}>About</NavLink>
//                     <NavLink to="/categories" className={({ isActive }) => isActive ? "active" : ""}>Categories</NavLink>
//                     <NavLink to="/recipes" className={({ isActive }) => isActive ? "active" : ""}>Recipes</NavLink>
//                     <NavLink to="/comments" className={({ isActive }) => isActive ? "active" : ""}>Comments</NavLink>
//                     <NavLink to="/users" className={({ isActive }) => isActive ? "active" : ""}>Users</NavLink>
//                 </nav>
//
//                 {/* Dashboard navigation button */}
//                 <button onClick={navigateToDashboard} className="dashboard-button">Go to the Recipe Dashboard</button>
//
//                 {/* Define Routes for each component */}
//                 <Routes>
//                     <Route path="/" element={<Home />} />
//                     <Route path="/about" element={<About />} />
//                     <Route path="/categories" element={<Categories />} />
//                     <Route path="/recipes" element={<Recipes />} />
//                     <Route path="/comments" element={<Comments />} />
//                     <Route path="/users" element={<Users />} />
//                 </Routes>
//             </div>
//         </Router>
//     );
// }
//
// export default App;
//




// //Just updated
import React, {useState} from 'react';
import './App.css';
import { useNavigate, Link } from "react-router-dom";
import './index.js';
import Form from "./Form";
import About from "./About/About";

const App = () => {
    const navigate = useNavigate();

    // State to store user's first and last names
    const [user, setUser] = useState({
        firstName: '',
        lastName: '',
    });

    // Function to handle account creation or user login
    const handleAccountCreation = (newUserData) => {
        setUser({
            firstName: newUserData.firstName,
            lastName: newUserData.lastName,
        });
    };

    const navigateToDashboard = () => {
        navigate('/dashboard');
    };

    return (
        <div className='App'>
            <header>
                {/* Display a personalized welcome message if user information is available */}
                <h1>
                    {user.firstName && user.lastName
                        ? `Hello ${user.firstName} ${user.lastName}, your account has been created successfully!`
                        : `Welcome to Food Exploration Page`}
                </h1>
            </header>

            {/* Centered navigation links */}
            <nav className="navbar">
                <Link to="/home">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/categories">Categories</Link>
                <Link to="/recipes">Recipes</Link>
                <Link to="/comments">Comments</Link>
                <Link to="/users">Users</Link>
            </nav>

            {/* Dashboard navigation button */}
            <button onClick={navigateToDashboard} className="dashboard-button">Go to the Recipe Dashboard</button>
            {/* Form component to handle user information submission */}
            <Form onAccountCreate={handleAccountCreation} />
        </div>
    );
}

export default App;



// //Just Updated code
// // import React, {useEffect,  useState } from 'react';
// // import './App.css';
// // import {useNavigate} from "react-router-dom";
// //
// //
// // const App = () => {
// //
// //   const navigate = useNavigate();
// //
// //   const [firstName, setFirstName] = useState('');
// //   const [lastName, setLastName] = useState('');
// //   const [message, setMessage] = useState('');
// //
// //   const navigateToDashboard = () => {
// //     navigate('/dashboard');
// //   };
// //
// //
// //   // Takes a function and a dependency array.
// //   //useEffect(() => { [Will need to confirm if this will need to be removed from the comment]
// //     const fetchMessage = async () => {
// //       try {
// //
// //         // Fetch syntax with method and headers to make a POST request.
// //         const response: Response = await fetch('/hello/personalized', {
// //           method: 'POST', // Use POST method to send data
// //           headers: {
// //             'Content-Type': 'application/json', // Specify JSON content
// //           },
// //           // JSON.stringify usage to convert the body to JSON.
// //           body: JSON.stringify({first:firstName , last:lastName}),
// //         });
// //
// //         // Extract response as plain text and Corrected: Set the response text to the message state variable.
// //         const text: string = await response.text();
// //         setMessage(text);
// //       } catch (error) {
// //         console.error('Error fetching message:', error);
// //       }
// //     };
// //
// //     const handleSubmit = (e: React.FormEvent) => {
// //       e.preventDefault();
// //       fetchMessage();
// //     };
// //
// //     return (
// //         <div className='App'>
// //           <header>
// //           <h1> Welcome to Food Exploration Page </h1>
// //           </header>
// //           <main>
// //
// //           <form onSubmit={handleSubmit}>
// //             <input
// //                 type="text"
// //                // placeholder="First Name"
// //                 placeholder="Enter Your First Name"
// //                 value={firstName}
// //                 onChange={(e) => setFirstName(e.target.value)}
// //                 required
// //             />
// //             <input
// //                 type="text"
// //                 placeholder="Enter Your Last Name"
// //                 value={lastName}
// //                 onChange={(e) => setLastName(e.target.value)}
// //                 required
// //             />
// //   <button type="submit">Submit</button>
// //           <div>
// //           <button onClick={navigateToDashboard}>Go to the Recipe Dashboard </button>
// //           </div>
// // </form>
// //
// //   {message && <p>{message}</p>}
// //           </main>
// // </div>
// //   );
// // }
// //
// // export default App;
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// // {/*    <div>*/}
// // {/*      <label>First Name:</label>*/}
// // {/*      <input*/}
// // {/*        type="text"*/}
// // {/*        value={firstName}*/}
// // {/*        onChange={(e) => setFirstName(e.target.value)}*/}
// // {/*        required*/}
// // {/*        />*/}
// // {/*    </div>*/}
// // {/*    <div>*/}
// // {/*    <label>Last Name:</label>*/}
// // {/*    <input*/}
// // {/*        type="text"*/}
// // {/*        value={lastName}*/}
// // {/*        onChange={(e) => setLastName(e.target.value)} // Update state with input*/}
// // {/*        required*/}
// // {/*    />*/}
// // {/*</div>*/}
// //
// //
// //
// //
// //
// //
// //
// // // import React, { useState } from 'react';
// // // import './App.css';
// // //
// // // function App() {
// // //   const [firstName, setFirstName] = useState('');
// // //   const [lastName, setLastName] = useState('');
// // //   const [message, setMessage] = useState('');
// // //
// // //   const handleSubmit = async (e) => {
// // //     e.preventDefault();
// // //     try {
// // //       const response = await fetch('/hello/personalized', {
// // //         const: response = await fetch("/hello/personalized", {
// // //           method: 'POST',
// // //           headers: {
// // //             'Content-Type': 'application/json',
// // //           },
// // //           body: JSON.stringify({ first:firstName, last:lastName }),
// // //         }),
// // //
// // //         if (!response.ok) {
// // //         throw new Error('Network response was not ok');
// // //       }
// // //
// // //       const text = await response.text();
// // //       setMessage(text);
// // //     } catch (error); {
// // //         console.error('Error fetching message:', error);
// // //         setMessage('Failed to fetch message from server');
// // //       }
// // //     };
// // //
// // //     return (
// // //         <div className="App">
// // //           <header>
// // //             <h1>Personalized Greeting</h1>
// // //           </header>
// // //           <main>
// // //             <form onSubmit={handleSubmit}>
// // //               <input
// // //                   type="text"
// // //                   placeholder="First Name"
// // //                   value={firstName}
// // //                   onChange={(e) => setFirstName(e.target.value)}
// // //                   required
// // //               />
// // //               <input
// // //                   type="text"
// // //                   placeholder="Last Name"
// // //                   value={lastName}
// // //                   onChange={(e) => setLastName(e.target.value)}
// // //                   required
// // //               />
// // //               <button type="submit">Submit</button>
// // //             </form>
// // //             {message && <p className="message">{message}</p>}
// // //           </main>
// // //         </div>
// // //     );
// // //   }
// // // }
// // //
// // //
// // //
// // //
// // //
// // //
// // //
