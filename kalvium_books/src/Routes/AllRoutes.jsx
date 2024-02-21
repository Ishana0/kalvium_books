import Home from "../Components/Home.jsx";
import { BrowserRouter as Route, Routes } from "react-router-dom";

function AllRoutes() {
    return (
        <>
            <Routes>
                
                    <Route path="/" element={<Home />} />
                
            </Routes>
        </>
    )
}

export default AllRoutes;