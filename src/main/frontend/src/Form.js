// Form.js
import React, { useState } from 'react';
import './Form.css';

const Form = ({ onAccountCreate }) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [comment, setComment] = useState('');
    const [recipe, setRecipe] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        // Validation checks
        if (firstName.length < 2) {
            setErrorMessage("First name must be at least 2 characters.");
            return;
        }
        if (lastName.length < 2) {
            setErrorMessage("Last name must be at least 2 characters.");
            return;
        }
        if (comment.length < 50) {
            setErrorMessage("Comment must be at least 50 characters.");
            return;
        }
        if (recipe.length < 50) {
            setErrorMessage("Recipe description must be at least 50 characters.");
            return;
        }

        // If all checks pass, submit the data and clear the error message
        setErrorMessage('');
        alert("Form submitted successfully!");

        // Pass firstName and lastName to the parent component (App.js)
        onAccountCreate({ firstName, lastName });

        // Reset form fields after submission
        setFirstName('');
        setLastName('');
        setComment('');
        setRecipe('');
    };

    return (
        <div className="form-container">
            <h2>Submit Your Information</h2>
            <form onSubmit={handleSubmit}>
                {/* First Name Field */}
                <label>
                    First Name:
                    <input
                        type="text"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        required
                    />
                </label>

                {/* Last Name Field */}
                <label>
                    Last Name:
                    <input
                        type="text"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        required
                    />
                </label>

                {/* Comment Field */}
                <label>
                    Comment (min 50 characters):
                    <textarea
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                        required
                    />
                </label>

                {/* Recipe Field */}
                <label>
                    Recipe (min 50 characters):
                    <textarea
                        value={recipe}
                        onChange={(e) => setRecipe(e.target.value)}
                        required
                    />
                </label>

                {/* Error Message */}
                {errorMessage && <p className="error-message">{errorMessage}</p>}

                {/* Submit Button */}
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default Form;






























// import React, { useState } from 'react';
// import './Form.css';
//
// const Form = ({ onAccountCreate }) => {
//     const [firstName, setFirstName] = useState('');
//     const [lastName, setLastName] = useState('');
//     const [comment, setComment] = useState('');
//     const [recipe, setRecipe] = useState('');
//     const [errorMessage, setErrorMessage] = useState('');
//
//     const handleSubmit = (e) => {
//         e.preventDefault();
//
//         // Validation checks
//         if (name.length < 8) {
//             setErrorMessage("Name must be at least 8 characters.");
//             return;
//         }
//         if (comment.length < 50) {
//             setErrorMessage("Comment must be at least 50 characters.");
//             return;
//         }
//         if (recipe.length < 50) {
//             setErrorMessage("Recipe description must be at least 50 characters.");
//             return;
//         }
//
//         // If all checks pass, clear the error message and submit the data
//         setErrorMessage('');
//         alert("Form submitted successfully!");
//
//         // Reset form fields after submission
//         setName('');
//         setComment('');
//         setRecipe('');
//     };
//
//     return (
//         <div className="form-container">
//             <h2>Submit Your Information</h2>
//             <form onSubmit={handleSubmit}>
//                 {/* Name Field */}
//                 <label>
//                     Name (min 8 characters):
//                     <input
//                         type="text"
//                         value={name}
//                         onChange={(e) => setName(e.target.value)}
//                         required
//                     />
//                 </label>
//
//                 {/* Comment Field */}
//                 <label>
//                     Comment (min 50 characters):
//                     <textarea
//                         value={comment}
//                         onChange={(e) => setComment(e.target.value)}
//                         required
//                     />
//                 </label>
//
//                 {/* Recipe Field */}
//                 <label>
//                     Recipe (min 50 characters):
//                     <textarea
//                         value={recipe}
//                         onChange={(e) => setRecipe(e.target.value)}
//                         required
//                     />
//                 </label>
//
//                 {/* Error Message */}
//                 {errorMessage && <p className="error-message">{errorMessage}</p>}
//
//                 {/* Submit Button */}
//                 <button type="submit">Submit</button>
//             </form>
//         </div>
//     );
// };
//
// export default Form;
