import React from "react";
import Grid from "./Grid";
import * as API from "../BooksAPI.js";
import { Link } from "react-router-dom";

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            results: [],
            search_string: "",
            grid_full: true,
        }
        this.value = "";
    }

    render() {
        return(
            <div>
            <div className="search_bar">
            <Link to="/"><div>❰</div></Link>
            <input value={this.state.search_string} placeholder="Search books" onChange={this.handle_change}/>
            </div>
            <Grid books={this.state.results} updateShelf={this.props.update_shelf} grid_full={this.state.grid_full}/>
            </div>
        );
    }

    // https://stackoverflow.com/a/32912570 by: thefourtheye
    handle_result = (query, results) => {
        if ( !results.hasOwnProperty("error") ) {
            results.forEach((result) => {
                const obj = this.props.books.find((book) => book.id === result.id);
                if ( obj ) {
                    result.shelf = obj.shelf;
                } else {
                    result.shelf = "none";
                }
            });
            if ( this.value === query ) {
                this.setState({results});
            }
        } else {
            this.setState({results: []});
        }
    }

    handle_change = (event) => {
        this.value = event.target.value;
        this.setState({search_string: event.target.value,});
        if ( this.value ) {
            // https://stackoverflow.com/a/32912570 by: thefourtheye
            API.search(this.value).then(this.handle_result.bind(null, this.value))
        } else {
            this.setState({results: []});
        }
    }
}

export default Search;
