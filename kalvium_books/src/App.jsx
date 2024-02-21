import React from 'react';
import './App.css';
// import RegistrationForm from "./Components/RegistrationForm";
// import Home from "./Components/Home.jsx";
import { BrowserRouter as Route, Routes } from 'react-router-dom';
import AllRoutes from './Routes/AllRoutes';

function App() {

  return (
    <>
      {/* <RegistrationForm /> */}
      {/* <Home /> */}
      <AllRoutes />
    </>
  )
}

export default App;
