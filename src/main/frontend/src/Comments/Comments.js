import React, { useState } from 'react';
import './Comments.css';

function Comments() {
    const [comments, setComments] = useState([]);
    const [commentData, setCommentData] = useState({
        commentId: '',
        recipeId: '',
        userId: '',
        commentText: '',
        commentDate: new Date().toISOString().slice(0, 10) // Sets today's date
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setCommentData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setComments([...comments, commentData]);
        setCommentData({
            commentId: '',
            recipeId: '',
            userId: '',
            commentText: '',
            commentDate: new Date().toISOString().slice(0, 10)
        });
    };

    return (
        <div className="comments">
            <h1>Comments</h1>

            <form onSubmit={handleSubmit}>
                <label>
                    Comment ID:
                    <input
                        type="text"
                        name="commentId"
                        value={commentData.commentId}
                        onChange={handleInputChange}
                        required
                    />
                </label>
                <label>
                    Recipe ID:
                    <input
                        type="text"
                        name="recipeId"
                        value={commentData.recipeId}
                        onChange={handleInputChange}
                        required
                    />
                </label>
                <label>
                    User ID:
                    <input
                        type="text"
                        name="userId"
                        value={commentData.userId}
                        onChange={handleInputChange}
                        required
                    />
                </label>
                <label>
                    Comment:
                    <textarea
                        name="commentText"
                        value={commentData.commentText}
                        onChange={handleInputChange}
                        required
                    />
                </label>
                <button type="submit">Post Comment</button>
            </form>

            <h2>All Comments</h2>
            <ul className="comment-list">
                {comments.map((comment, index) => (
                    <li key={index}>
                        <p><strong>User {comment.userId}:</strong> {comment.commentText}</p>
                        <p><em>Posted on: {comment.commentDate}</em></p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Comments;
