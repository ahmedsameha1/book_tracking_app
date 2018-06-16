import React, { Component } from 'react';
import './../App.css';
import Header from "./Header";
import Shelves from "./Shelves";
import Search from "./Search";
import {Switch, Route} from "react-router-dom";
import * as API from "../BooksAPI.js";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            books: [],
        };
    }
  render() {
    return (
        <div>
            <Header />
            <Switch>
                <Route exact path="/" render={() => <Shelves books={this.state.books} update_shelf={this.update_shelf} /> }/>
                <Route path="/search" render={()=><Search books={this.state.books} update_shelf={this.update_shelf} /> }/>
            </Switch>
        </div>
    );
  }

  componentDidMount() {
      API.getAll().then( books => this.setState({books}));
  }

  update_shelf = (new_book) => {
        const obj = (this.state.books.find( book => new_book.id === book.id ))
        if ( obj ) {
            obj.shelf = new_book.shelf;
        } else {
            this.state.books.push(new_book);
        }
        this.setState({ books: this.state.books});
        API.update({id: new_book.id}, new_book.shelf);
    }
}

export default App;
