import React from "react";
import Book from "./Book";

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

export default Grid;
