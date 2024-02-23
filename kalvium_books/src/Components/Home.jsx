import { useState } from "react";
import { Link } from "react-router-dom"; // Importing Link component from react-router-dom
import Books from "./Books";

function Home() {
    const [searchInput, setSearchInput] = useState(""); // State to store search input

    // Function to handle search input change
    const handleSearch = (e) => {
        setSearchInput(e.target.value) // Updating search input state
    };

    return (
        <>
            <nav className="navbar">
                <div className="container">
                    <div className="logo-container">
                            <Link to="/">
                                <img src="https://kalvium.community/images/sidebar-3d-logo.svg" alt="logo" />
                            </Link>
                        <h1 className="title">Kalvium Books</h1>
                    </div>
                    <div className="search">
                        <input type="text" placeholder="Search Books" value={searchInput} onChange={handleSearch} />
                    </div>
                    <div className="register-btn">
                        {/* Link to the registration form */}
                        <Link to="/form">
                            <button>Register</button> {/* Button to navigate to registration form */}
                        </Link>
                    </div>
                </div>
            </nav>
            {/* Displaying books component with search input passed as prop */}
            <Books searchInput={searchInput} />
        </>

    );
};

export default Home;