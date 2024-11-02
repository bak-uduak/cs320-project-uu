import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Users.css';

function Users() {
    const navigate = useNavigate();

    const [isNewUser, setIsNewUser] = useState(true);  // Toggle between 'Sign In' and 'Create Account'
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        dateJoined: new Date().toISOString().slice(0, 10)
    });

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            // Corrected fetch URL to include quotes around the URL
            const response = await fetch('/hello/personalized', { // Added quotes
                method: 'POST',
                headers: { // Changed 'header' to 'headers'
                    'Content-Type': 'application/json', // Corrected 'content-Type' to 'Content-Type'
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                const data = await response.text(); // Corrected 'date' to 'data'
                alert(data);
                navigateToDashboard();
            } else {
                alert('Account creation failed. Please try again.'); // Handles failed 'create account'
            }
        } catch (error) {
            console.error('Error during submission:', error);
            alert('An error occurred. Please try again.'); // Corrected spelling of 'occurred'
        }
    };

    const navigateToDashboard = () => {
        navigate('/dashboard', { state: { userData: formData } });
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const toggleForm = () => {
        setIsNewUser(!isNewUser);
        setFormData({ email: '', password: '', firstName: '', lastName: '' });  // Reset form fields
    };

    return (
        <div className="users">
            <h1>{isNewUser ? 'Create Your Account' : 'Sign In'}</h1>
            <form onSubmit={handleSubmit}>
                {isNewUser && (
                    <>
                        <label>
                            First Name:
                            <input
                                type="text"
                                name="firstName"
                                value={formData.firstName}
                                onChange={handleInputChange}
                                required
                            />
                        </label>
                        <label>
                            Last Name:
                            <input
                                type="text"
                                name="lastName"
                                value={formData.lastName}
                                onChange={handleInputChange}
                                required
                            />
                        </label>
                    </>
                )}
                <label>
                    Email:
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                    />
                </label>
                <label>
                    Password:
                    <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleInputChange}
                        required
                    />
                </label>
                <button type="submit">{isNewUser ? 'Create Account' : 'Sign In'}</button>
            </form>
            <p className="toggle-text" onClick={toggleForm}>
                {isNewUser ? 'Already have an account? Sign in' : 'New here? Create an account'}
            </p>
        </div>
    );
}

export default Users;























//Just updated
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import './Users.css';
// import {defaultMethod} from "react-router-dom/dist/dom";
//
// function Users() {
//     const navigate = useNavigate();
//
//     const [isNewUser, setIsNewUser] = useState(true);  // Toggle between 'Sign In' and 'Create Account'
//     const [formData, setFormData] = useState({
//         firstName: '',
//         lastName: '',
//         email: '',
//         password: '',
//         dateJoined: new Date().toISOString().slice(0, 10)
//     });
//
//     const handleSubmit = async (e) => {
//         e.preventDefault();
//
//         try {
//             const response = await fetch(http://localhost:8080/hello/personalized', {
//             method: 'POST',
//                 header: {
//                 'content-Type': 'application/json',
//             },
//             body:JSON.stringify(formData),
//         });
//
//             if (response.ok) {
//                 const date = await response.text();
//                 alert(date);
//                 navigateToDashboard();
//             } else {
//                 alert('Account creation failed. Please try again.'); //Handles failed 'create account'
//             }
//         } catch (error) {
//             console.error('Error during submission:', error);
//             alert('An error occured. Please try again.');
//         }
//     };
//
//     const navigateToDashboard = () => {
//         navigate('/dashboard', { state: { userData: formData } });
//     };
//
//     const handleInputChange = (e) => {
//         const { name, value } = e.target;
//         setFormData((prevData) => ({
//             ...prevData,
//             [name]: value
//         }));
//     };
//
//     const toggleForm = () => {
//         setIsNewUser(!isNewUser);
//         setFormData({ email: '', password: '', firstName: '', lastName: '' });  // Reset form fields
//     };
//
//     return (
//         <div className="users">
//             <h1>{isNewUser ? 'Create Your Account' : 'Sign In'}</h1>
//             <form onSubmit={handleSubmit}>
//                 {isNewUser && (
//                     <>
//                         <label>
//                             First Name:
//                             <input
//                                 type="text"
//                                 name="firstName"
//                                 value={formData.firstName}
//                                 onChange={handleInputChange}
//                                 required
//                             />
//                         </label>
//                         <label>
//                             Last Name:
//                             <input
//                                 type="text"
//                                 name="lastName"
//                                 value={formData.lastName}
//                                 onChange={handleInputChange}
//                                 required
//                             />
//                         </label>
//                     </>
//                 )}
//                 <label>
//                     Email:
//                     <input
//                         type="email"
//                         name="email"
//                         value={formData.email}
//                         onChange={handleInputChange}
//                         required
//                     />
//                 </label>
//                 <label>
//                     Password:
//                     <input
//                         type="password"
//                         name="password"
//                         value={formData.password}
//                         onChange={handleInputChange}
//                         required
//                     />
//                 </label>
//                 <button type="submit">{isNewUser ? 'Create Account' : 'Sign In'}</button>
//             </form>
//             <p className="toggle-text" onClick={toggleForm}>
//                 {isNewUser ? 'Already have an account? Sign in' : 'New here? Create an account'}
//             </p>
//         </div>
//     );
// }
//
// export default Users;
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// // import React, { useState } from 'react';
// // import { useNavigate } from 'react-router-dom';
// // import './Users.css';
// // //import Dashboard from '../Dashboard/Dashboard';
// //
// // function Users() {
// //     const navigate = useNavigate();
// //
// //     const [isNewUser, setIsNewUser] = useState(true);
// //     const [formData, setFormData] = useState({
// //         firstName: '',
// //         lastName: '',
// //         email: '',
// //         password: '',
// //         dateJoined: new Date().toISOString().slice(0, 10)  // Automatically sets the day's date
// //     });
// //
// //     const handleSubmit = (e) => {
// //         e.preventDefault();
// //         console.log(formData);
// //         //  To save the form data to the database
// //         navigateToDashboard();
// //     };
// //
// //     const navigateToDashboard = () => {
// //         navigate('/dashboard', { state: { userData: formData } });
// //     };
// //
// //     const handleInputChange = (e) => {
// //         const { name, value } = e.target;
// //         setFormData((prevData) => ({
// //             ...prevData,
// //             [name]: value
// //         }));
// //     };
// //
// //     return (
// //         <div className="users">
// //             <h1>Create Your Account</h1>
// //             <form onSubmit={handleSubmit}>
// //                 <label className="label">
// //                     First Name:
// //                     <input
// //                         type="text"
// //                         name="firstName"
// //                         value={formData.firstName}
// //                         onChange={handleInputChange}
// //                         required
// //                     />
// //                 </label>
// //                 <label>
// //                     Last Name:
// //                     <input
// //                         type="text"
// //                         name="lastName"
// //                         value={formData.lastName}
// //                         onChange={handleInputChange}
// //                         required
// //                     />
// //                 </label>
// //                 <label>
// //                     Email:
// //                     <input
// //                         type="email"
// //                         name="email"
// //                         value={formData.email}
// //                         onChange={handleInputChange}
// //                         required
// //                     />
// //                 </label>
// //                 <label>
// //                     Password:
// //                     <input
// //                         type="password"
// //                         name="password"
// //                         value={formData.password}
// //                         onChange={handleInputChange}
// //                         required
// //                     />
// //                 </label>
// //                 <button type="submit">Create Account</button>
// //             </form>
// //         </div>
// //     );
// // }
// //
// // export default Users;
