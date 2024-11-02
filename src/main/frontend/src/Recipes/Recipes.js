import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './Recipes.css';

function Recipes() {
    const navigate = useNavigate();
    const location = useLocation();
    const [recipeData, setRecipeData] = useState({
        recipeId: '',
        userId: '',
        title: '',
        ingredients: '',
        imageUrl: '',
        dateAdded: new Date().toISOString().slice(0, 10), // Sets today's date by default
        categoryId: '',
        description: ''
    });

    const [selectedCategory, setSelectedCategory] = useState('');

    // Function to parse the query string
    const getCategoryFromQuery = () => {
        const params = new URLSearchParams(location.search);
        return params.get('category');
    };

    useEffect(() => {
        const category = getCategoryFromQuery();
        if (category) {
            setSelectedCategory(category);
        }
    }, [location.search]);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(recipeData);
        // To save the recipe data to the database
        navigateToRecipesList();
    };

    const navigateToRecipesList = () => {
        navigate('/recipes-list', { state: { newRecipe: recipeData } });
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setRecipeData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    return (
        <div className="recipes">
            <h1>Share Your Recipe</h1>
            {selectedCategory && <p>Category: <strong>{selectedCategory}</strong></p>}
            <img src="/Healthy.png" alt="Healthy Food" className="healthy-food-image"/>
            <form onSubmit={handleSubmit}>
                <label>
                    Recipe ID:
                    <input
                        type="text"
                        name="recipeId"
                        value={recipeData.recipeId}
                        onChange={handleInputChange}
                        required
                    />
                </label>
                <label>
                    User ID:
                    <input
                        type="text"
                        name="userId"
                        value={recipeData.userId}
                        onChange={handleInputChange}
                        required
                    />
                </label>
                <label>
                    Title:
                    <input
                        type="text"
                        name="title"
                        value={recipeData.title}
                        onChange={handleInputChange}
                        required
                    />
                </label>
                <label>
                    Ingredients:
                    <textarea
                        name="ingredients"
                        value={recipeData.ingredients}
                        onChange={handleInputChange}
                        required
                    />
                </label>
                <label>
                    Image URL:
                    <input
                        type="url"
                        name="imageUrl"
                        value={recipeData.imageUrl}
                        onChange={handleInputChange}
                    />
                </label>
                <label>
                    Date Added:
                    <input
                        type="date"
                        name="dateAdded"
                        value={recipeData.dateAdded}
                        onChange={handleInputChange}
                        required
                    />
                </label>
                <label>
                    Category ID:
                    <input
                        type="text"
                        name="categoryId"
                        value={recipeData.categoryId}
                        onChange={handleInputChange}
                        required
                    />
                </label>
                <label>
                    Description:
                    <textarea
                        name="description"
                        value={recipeData.description}
                        onChange={handleInputChange}
                        required
                    />
                </label>
                <button type="submit">Add Recipe</button>
            </form>
        </div>
    );
}

export default Recipes;




















// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import './Recipes.css';
//
// function Recipes() {
//     const navigate = useNavigate();
//     const [recipeData, setRecipeData] = useState({
//         recipeId: '',
//         userId: '',
//         title: '',
//         ingredients: '',
//         imageUrl: '',
//         dateAdded: new Date().toISOString().slice(0, 10), // Sets today's date by default
//         categoryId: '',
//         description: ''
//     });
//
//     const handleSubmit = (e) => {
//         e.preventDefault();
//         console.log(recipeData);
//         // To save the recipe data to the database
//         navigateToRecipesList();
//     };
//
//     const navigateToRecipesList = () => {
//         navigate('/recipes-list', { state: { newRecipe: recipeData } });
//     };
//
//     const handleInputChange = (e) => {
//         const { name, value } = e.target;
//         setRecipeData((prevData) => ({
//             ...prevData,
//             [name]: value
//         }));
//     };
//
//     return (
//         <div className="recipes">
//             <h1>Share Your Recipe</h1>
//             <img src="/Healthy.png" alt="Healthy Food" className="healthy-food-image"/>
//             <form onSubmit={handleSubmit}>
//                 <label>
//                     Recipe ID:
//                     <input
//                         type="text"
//                         name="recipeId"
//                         value={recipeData.recipeId}
//                         onChange={handleInputChange}
//                         required
//                     />
//                 </label>
//                 <label>
//                     User ID:
//                     <input
//                         type="text"
//                         name="userId"
//                         value={recipeData.userId}
//                         onChange={handleInputChange}
//                         required
//                     />
//                 </label>
//                 <label>
//                     Title:
//                     <input
//                         type="text"
//                         name="title"
//                         value={recipeData.title}
//                         onChange={handleInputChange}
//                         required
//                     />
//                 </label>
//                 <label>
//                     Ingredients:
//                     <textarea
//                         name="ingredients"
//                         value={recipeData.ingredients}
//                         onChange={handleInputChange}
//                         required
//                     />
//                 </label>
//                 <label>
//                     Image URL:
//                     <input
//                         type="url"
//                         name="imageUrl"
//                         value={recipeData.imageUrl}
//                         onChange={handleInputChange}
//                     />
//                 </label>
//                 <label>
//                     Date Added:
//                     <input
//                         type="date"
//                         name="dateAdded"
//                         value={recipeData.dateAdded}
//                         onChange={handleInputChange}
//                         required
//                     />
//                 </label>
//                 <label>
//                     Category ID:
//                     <input
//                         type="text"
//                         name="categoryId"
//                         value={recipeData.categoryId}
//                         onChange={handleInputChange}
//                         required
//                     />
//                 </label>
//                 <label>
//                     Description:
//                     <textarea
//                         name="description"
//                         value={recipeData.description}
//                         onChange={handleInputChange}
//                         required
//                     />
//                 </label>
//                 <button type="submit">Add Recipe</button>
//             </form>
//         </div>
//     );
// }
//
// export default Recipes;
