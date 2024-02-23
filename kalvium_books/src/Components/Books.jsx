import React, { useEffect, useState } from "react";
import axios from "axios"; // Importing axios for API requests

function Books({ searchInput }) {
    const [bookData, setBookData] = useState([]); // State to store book data

    // Function to fetch book data from the API
    const getData = () => {
        axios
            .get("https://reactnd-books-api.udacity.com/books", {
                headers: { 'Authorization': 'whatever-you-want' },
            })
            .then((res) => setBookData(res.data.books)); // Setting fetched data to state
    };

    useEffect(() => {
        getData();
    }, []);

    // Filtering books based on search input
    const filteredBooks = bookData.filter((book) =>
        book.title.toLowerCase().includes(searchInput.toLowerCase())
    );

    return (
        <>
            <div className="books-container">
                {filteredBooks.map((el, i) => (
                    <div key={i} className="book-card"> {/* Rendering each book as a card */}
                        <img src={el.imageLinks.thumbnail} alt={el.title} />
                        <div className="book-details">
                            <h4 className="book-title">{el.title}</h4>
                            <p>*Free</p>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};
export default Books;