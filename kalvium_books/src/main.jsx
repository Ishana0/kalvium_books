import React from 'react';
import ReactDOM from 'react-dom/client'; // Importing ReactDOM library for rendering
import App from './App.jsx';  // Importing the main App component
import { BrowserRouter } from 'react-router-dom'; // Importing BrowserRouter for routing


// Rendering the App component wrapped in BrowserRouter
ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
)