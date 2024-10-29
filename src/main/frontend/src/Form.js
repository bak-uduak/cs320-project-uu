import React, { useState } from 'react';
import './Form.css';

const Form = () => {
    const [name, setName] = useState('');
    const [comment, setComment] = useState('');
    const [recipe, setRecipe] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        // Validation checks
        if (name.length < 8) {
            setErrorMessage("Name must be at least 8 characters.");
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

        // If all checks pass, clear the error message and submit the data
        setErrorMessage('');
        alert("Form submitted successfully!");

        // Reset form fields after submission
        setName('');
        setComment('');
        setRecipe('');
    };

    return (
        <div className="form-container">
            <h2>Submit Your Information</h2>
            <form onSubmit={handleSubmit}>
                {/* Name Field */}
                <label>
                    Name (min 8 characters):
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
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
