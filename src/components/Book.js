import React from "react";
import PopUp from "./PopUp";

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
        const book = this.props.book;
        return (
            <div className="book" >
                <div className="img_control_container">
                    <img src={book.imageLinks.smallThumbnail} alt={book.title}/>
                    <div className="control" onClick={this.toggle_pop_up}>+</div>
                </div>
                <div>
                    <p>{book.title}</p>
                    <p className="author">{book.authors[0]}</p>
                </div>
                { this.state.pop_up_shown &&
                    <PopUp shelf={book.shelf}
                    updateShelf={this.props.updateShelf}
                    id={book.id}
                    toggle_pop_up={this.toggle_pop_up}/>
                }
            </div>
        );
    }
}

export default Book;
