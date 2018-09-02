import React from "react";
import Book from "./Book";
import PropTypes from "prop-types";

class Grid extends React.Component {
    render() {
        return (
            <div className={ this.props.grid_full? "grid_layout grid_full" : "grid_layout"}>
                {this.props.books.map( book => {
                    return (<Book key={book.id} book={book
                    } updateShelf={this.props.updateShelf}/>)}
                )}
            </div>
        );
    }
}

Grid.propTypes = {
    books: PropTypes.arrayOf(PropTypes.object).isRequired,
    updateShelf: PropTypes.func.isRequired,
    grid_full: PropTypes.bool.isRequired,
};

export default Grid;
