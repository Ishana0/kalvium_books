import React from "react";

function Home() {
    return (
        <footer>
            <div className="container">
                <div>
                    <Link to="/">
                        <img src="https://kalvium.community/images/sidebar-3d-logo.svg" alt="logo" />
                    </Link>
                </div>

                <h1>Kalvium Books</h1>
                <div>
                    <p>Home</p>
                    <p>Books</p>
                </div>
            </div>
            <div className="description">
                <p>Indulge in great knowledge with the help of Kalvium Books.</p>
            </div>
        </footer>
    );
};

export default Home;