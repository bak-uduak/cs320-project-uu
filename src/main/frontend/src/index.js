import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import About from './About/About';
import Users from './Users/Users';
import Recipes from './Recipes/Recipes';
import Categories from './Categories/Categories';
import Comments from './Comments/Comments';
import Dashboard from './Dashboard/Dashboard';
import Navbar from "./Navbar";
import {BrowserRouter, Routes, Route} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <BrowserRouter>
          <Navbar/>

          <Routes>
              <Route path="/" element={ <App/>}/>
              <Route path="/about" element={<About />} />
              <Route path="/users" element={<Users />} />
              <Route path="/recipes" element={<Recipes />} />
              <Route path="/categories" element={<Categories />} />
              <Route path="/comments" element={<Comments />} />
              <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
      </BrowserRouter>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
