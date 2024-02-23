import Home from "../Components/Home.jsx";
import Registrationform from "../Components/Registrationform.jsx";
import { Route, Routes } from "react-router-dom";

function AllRoutes() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} /> {/* Defining a route for the Home component */}
                <Route path="/form" element={<Registrationform />} /> {/* Defining a route for the Registrationform component */}
            </Routes>
        </>
    );
};

export default AllRoutes;