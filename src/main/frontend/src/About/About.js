import React from 'react';
import './About.css';
export default About;

function About() {
    return (
        <div className="about">
            <h1>About Food Exploration</h1>
            <p>
                Welcome to Food Exploration! Our platform is designed to bring together a community
                of food enthusiasts who love to share and discover diverse recipes from around the world.
                Here, you can submit your own unique recipes, complete with ingredients, preparation steps,
                and images, while exploring dishes created by others. Whether you're a seasoned chef or a
                home cook, Food Exploration is the perfect place to connect, inspire, and be inspired by
                culinary creativity.
            </p>
            <h2>Our Vision</h2>
            <p>
                At Food Exploration, we believe that food is a universal language that brings people together.
                Our goal is to create an engaging, user-friendly platform that celebrates the joy of cooking
                and the art of sharing. Join us on this journey as we explore flavors, techniques, and stories
                behind every dish.
            </p>
            <img src="/WorldFood.jpg" alt="World Food" className="world-food-image"/>
        </div>
    );
}


