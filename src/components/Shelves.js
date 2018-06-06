import React from "react";
import Grid from "./Grid";
import * as API from "../BooksAPI.js";

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
                })}/>
                <header className="shelf_header">
                    <h2 className="shelf_name">Want to Read</h2>
                </header>
                <Grid books={this.state.books.filter( book => {
                    return book.shelf === "wantToRead";
                })}/>
                <header className="shelf_header">
                    <h2 className="shelf_name">Read</h2>
                </header>
                <Grid books={this.state.books.filter( book => {
                    return book.shelf === "read";
                })}/>
            </div>
        );
    }
}

export default Shelves;
