import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from "react-router-dom";
import './Comments.css';

function Comments() {
    const [comments, setComments] = useState([]);
    const [commentData, setCommentData] = useState({
        commentId: '',
        recipeId: '',
        userId: '',
        commentText: '',
        commentDate: new Date().toISOString().slice(0, 10)
    });
    const [isEditing, setIsEditing] = useState(false);

    useEffect(() => {
        fetchComments();
    }, []);

    // Fetch comments from the database
    const fetchComments = async () => {
        try {
            const response = await fetch('/comments'); // Replace with your actual endpoint
            const data = await response.json();
            setComments(data);
        } catch (error) {
            console.error("Error fetching comments:", error);
        }
    };

    // Handle input changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setCommentData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    // Add a new comment
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (isEditing) {
            await updateComment();
        } else {
            try {
                const response = await fetch('/comments', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(commentData)
                });
                if (response.ok) {
                    setCommentData({
                        commentId: '',
                        recipeId: '',
                        userId: '',
                        commentText: '',
                        commentDate: new Date().toISOString().slice(0, 10)
                    });
                    await fetchComments(); // Refresh comments list
                }
            } catch (error) {
                console.error("Error posting comment:", error);
            }
        }
    };

    // Edit a comment
    const handleEdit = (comment) => {
        setCommentData(comment);
        setIsEditing(true);
    };

    // Update a comment
    const updateComment = async () => {
        try {
            const response = await fetch(`comments/${commentData.commentId}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(commentData)
            });
            if (response.ok) {
                setIsEditing(false);
                setCommentData({
                    commentId: '',
                    recipeId: '',
                    userId: '',
                    commentText: '',
                    commentDate: new Date().toISOString().slice(0, 10)
                });
                await fetchComments(); // Refresh comments list
            }
        } catch (error) {
            console.error("Error updating comment:", error);
        }
    };

    // Delete a comment
    const handleDelete = async (commentId) => {
        try {
            const response = await fetch(`/comments/${commentId}`, {
                method: 'DELETE'
            });
            if (response.ok) {
                await fetchComments(); // Refresh comments list
            }
        } catch (error) {
            console.error("Error deleting comment:", error);
        }
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
                        disabled={isEditing} // Disable if editing to prevent changing ID
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
                <button type="submit">{isEditing ? "Update Comment" : "Post Comment"}</button>
            </form>

            <h2>All Comments</h2>
            <ul className="comment-list">
                {comments.map((comment) => (
                    <li key={comment.commentId}>
                        <p><strong>User {comment.userId}:</strong> {comment.commentText}</p>
                        <p><em>Posted on: {comment.commentDate}</em></p>
                        <button onClick={() => handleEdit(comment)}>Edit</button>
                        <button onClick={() => handleDelete(comment.commentId)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Comments;
































// import React, { useState } from 'react';
// import { useNavigate, Link } from "react-router-dom";
// import './Comments.css';
//
// function Comments() {
//     const [comments, setComments] = useState([]);
//     const [commentData, setCommentData] = useState({
//         commentId: '',
//         recipeId: '',
//         userId: '',
//         commentText: '',
//         commentDate: new Date().toISOString().slice(0, 10) // Sets today's date
//     });
//
//     const handleInputChange = (e) => {
//         const { name, value } = e.target;
//         setCommentData((prevData) => ({
//             ...prevData,
//             [name]: value
//         }));
//     };
//
//     const handleSubmit = (e) => {
//         e.preventDefault();
//         setComments([...comments, commentData]);
//         setCommentData({
//             commentId: '',
//             recipeId: '',
//             userId: '',
//             commentText: '',
//             commentDate: new Date().toISOString().slice(0, 10)
//         });
//     };
//
//     return (
//         <div className="comments">
//             <h1>Comments</h1>
//
//             <form onSubmit={handleSubmit}>
//                 <label>
//                     Comment ID:
//                     <input
//                         type="text"
//                         name="commentId"
//                         value={commentData.commentId}
//                         onChange={handleInputChange}
//                         required
//                     />
//                 </label>
//                 <label>
//                     Recipe ID:
//                     <input
//                         type="text"
//                         name="recipeId"
//                         value={commentData.recipeId}
//                         onChange={handleInputChange}
//                         required
//                     />
//                 </label>
//                 <label>
//                     User ID:
//                     <input
//                         type="text"
//                         name="userId"
//                         value={commentData.userId}
//                         onChange={handleInputChange}
//                         required
//                     />
//                 </label>
//                 <label>
//                     Comment:
//                     <textarea
//                         name="commentText"
//                         value={commentData.commentText}
//                         onChange={handleInputChange}
//                         required
//                     />
//                 </label>
//                 <button type="submit">Post Comment</button>
//             </form>
//
//             <h2>All Comments</h2>
//             <ul className="comment-list">
//                 {comments.map((comment, index) => (
//                     <li key={index}>
//                         <p><strong>User {comment.userId}:</strong> {comment.commentText}</p>
//                         <p><em>Posted on: {comment.commentDate}</em></p>
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     );
// }
//
// export default Comments;
