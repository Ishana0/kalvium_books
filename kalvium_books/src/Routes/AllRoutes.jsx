import Home from "../Components/Home.jsx";
import Registrationform from "../Components/Registrationform.jsx";
import { Route, Routes } from "react-router-dom";

function AllRoutes() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/form" element={<Registrationform />} />
            </Routes>
        </>
    );
};

export default AllRoutes;