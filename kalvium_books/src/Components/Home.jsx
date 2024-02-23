import { useState } from "react";
import { Link } from "react-router-dom";
import Books from "./Books";

function Home() {
    const [searchInput, setSearchInput] = useState("");

    const handleSearch = (e) => {
        setSearchInput(e.target.value)
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
                        <Link to="/form">
                            <button>Register</button>
                        </Link>
                    </div>
                </div>
            </nav>
            <Books searchInput={searchInput} />
        </>

    );
};

export default Home;