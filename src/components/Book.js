import React from "react";

class Book extends React.Component {
    render() {
        const book = this.props.book;
        return (
            <div>
                <img src={book.imageLinks.smallThumbnail} alt={book.title}/>
                <p>{book.title}</p>
                <p>{book.authors}</p>
            </div>
        );
    }
}

export default Book;
