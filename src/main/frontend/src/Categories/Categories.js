import React, { useState } from 'react';
import './Categories.css';

function Categories() {
    const [selectedCategory, setSelectedCategory] = useState('');

    const categories = [
        'Breakfast', 'Lunch', 'Dinner', 'Dessert', 'Side', 'Main Course', 'Appetizer',
        'Snack', 'Beverage', 'Soup', 'Salad', 'Entree', 'Brunch', 'Vegan', 'Vegetarian',
        'Gluten-Free', 'Dairy-Free', 'Low-Carb', 'Keto', 'Paleo', 'Seafood', 'BBQ',
        'Comfort Food', 'Holiday', 'Quick & Easy', 'Healthy'
    ];

    const handleCategoryChange = (event) => {
        const category = event.target.value;
        setSelectedCategory(category);
        console.log(`Selected Category: ${category}`);
        // Additional actions to filter recipes by selected category can be added here
    };

    return (
        <div className="categories">
            <h1>Explore Recipe Categories</h1>
            <div className="dropdown-container">
                <select
                    className="category-dropdown"
                    value={selectedCategory}
                    onChange={handleCategoryChange}
                >
                    <option value="">Select a Category</option>
                    {categories.map((category, index) => (
                        <option key={index} value={category}>
                            {category}
                        </option>
                    ))}
                </select>
            </div>
            {selectedCategory && (
                <p className="selected-info">You have selected: <strong>{selectedCategory}</strong></p>
            )}
        </div>
    );
}

export default Categories;
