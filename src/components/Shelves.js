import React from "react";
import Grid from "./Grid";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

class Shelves extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            grid_full: false,
        };
    }

    render() {
        return (
            <div className="shelves">
                <header className="shelf_header">
                    <h2 className="shelf_name">Currently Reading</h2>
                </header>
                <Grid books={this.props.books.filter( book => {
                    return book.shelf === "currentlyReading";
                })} updateShelf={this.props.update_shelf} grid_full={this.state.grid_full}/>
                <header className="shelf_header">
                    <h2 className="shelf_name">Want to Read</h2>
                </header>
                <Grid books={this.props.books.filter( book => {
                    return book.shelf === "wantToRead";
                })} updateShelf={this.props.update_shelf} grid_full={this.state.grid_full}/>
                <header className="shelf_header">
                    <h2 className="shelf_name">Read</h2>
                </header>
                <Grid books={this.props.books.filter( book => {
                    return book.shelf === "read";
                })} updateShelf={this.props.update_shelf} grid_full={this.state.grid_full}/>
                <Link to="search">
                    <div className="search_button">+</div>
                </Link>
            </div>
        );
    }

}

Shelves.propTypes = {
    books: PropTypes.arrayOf(PropTypes.object).isRequired,
    update_shelf: PropTypes.func.isRequired,
}

export default Shelves;
