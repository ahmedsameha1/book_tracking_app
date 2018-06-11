import React from "react";
import Grid from "./Grid";
import * as API from "../BooksAPI.js";
import { Link } from "react-router-dom";

class Shelves extends React.Component {
    constructor(props) {
        super(props);
        this.state = { books: []};
    }
    componentDidMount() {
        API.getAll().then( books => this.setState({books}));
    }
    render() {
        return (
            <div>
                <header className="shelf_header">
                    <h2 className="shelf_name">Currently Reading</h2>
                </header>
                <Grid books={this.state.books.filter( book => {
                    return book.shelf === "currentlyReading";
                })} updateShelf={this.updateShelf}/>
                <header className="shelf_header">
                    <h2 className="shelf_name">Want to Read</h2>
                </header>
                <Grid books={this.state.books.filter( book => {
                    return book.shelf === "wantToRead";
                })} updateShelf={this.updateShelf}/>
                <header className="shelf_header">
                    <h2 className="shelf_name">Read</h2>
                </header>
                <Grid books={this.state.books.filter( book => {
                    return book.shelf === "read";
                })} updateShelf={this.updateShelf}/>
                <Link to="search">
                    <button className="search_button">+</button>
                </Link>
            </div>
        );
    }

    updateShelf = (id, newShelf) => {
        (this.state.books.find( book => id === book.id )).shelf = newShelf;
        this.setState(this.state.books);
        API.update({id: id}, newShelf);
    }
}

export default Shelves;
