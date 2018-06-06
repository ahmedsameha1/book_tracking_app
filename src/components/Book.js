import React from "react";
import PopUp from "./PopUp";

class Book extends React.Component {
    render() {
        const book = this.props.book;
        return (
            <div className="book">
                <img src={book.imageLinks.smallThumbnail} alt={book.title}/>
                <p>{book.title}</p>
                <p className="author">{book.authors[0]}</p>
                <PopUp shelf={book.shelf}/>
            </div>
        );
    }
}

export default Book;
