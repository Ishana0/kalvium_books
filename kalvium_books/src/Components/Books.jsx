import React, { useEffect, useState } from "react";
import axios from "axios";

function Books({ searchInput }) {
    const [bookData, setBookData] = useState([]);

    const getData = () => {
        axios
            .get("https://reactnd-books-api.udacity.com/books", {
                headers: { 'Authorization': 'whatever-you-want' },
            })
            .then((res) => setBookData(res.data.books))
    };

    useEffect(() => {
        getData();
    }, []);

    const filteredBooks = bookData.filter((book) =>
        book.title.toLowerCase().includes(searchInput.toLowerCase())
    );

    return (
        <>
            <div className="books-container">
                {filteredBooks.map((el, i) => (
                    <div key={i} className="book-card">
                        <img src={el.imageLinks.thumbnail} alt={el.title} />
                        <div className="book-details">
                            <h4 className="book-title">{el.title}</h4>
                            <p>*Free</p>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}
export default Books;