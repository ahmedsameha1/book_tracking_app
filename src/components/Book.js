import React from "react";
import PopUp from "./PopUp";
import book_image_placeholder from "../img/book_image_placeholder.png";
import PropTypes from "prop-types";

class Book extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pop_up_shown: false,
        }
    }

    toggle_pop_up = () => {
        this.setState({pop_up_shown: !this.state.pop_up_shown});
    }

    render() {
        const edit_book = {
            image: this.props.book.imageLinks === undefined || this.props.book.imageLinks.smallThumbnail === undefined ?
                book_image_placeholder : this.props.book.imageLinks.smallThumbnail,
            author: this.props.book.authors === undefined || this.props.book.authors[0] === undefined ? "Author" : this.props.book.authors[0],
            title: this.props.book.title ? this.props.book.title : "Title",
        }
        return (
            <div className="book">
                <div className="img_control_container">
                    <img src={edit_book.image} alt={edit_book.title}/>
                    <div className="control" onClick={this.toggle_pop_up}>⋮</div>
                { this.state.pop_up_shown &&
                    <PopUp book={this.props.book}
                    updateShelf={this.props.updateShelf}
                    toggle_pop_up={this.toggle_pop_up}/>
                }
                </div>
                <div>
                    <p>{edit_book.title}</p>
                    <p className="author">{edit_book.author}</p>
                </div>
            </div>
        );
    }
}

Book.propTypes = {
    book: PropTypes.object.isRequired,
    updateShelf: PropTypes.func.isRequired,
};

export default Book;
