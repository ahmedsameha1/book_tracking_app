import React, { Component } from 'react';
import './../App.css';
import Header from "./Header";
import Shelves from "./Shelves";
import Search from "./Search";
import {Switch, Route} from "react-router-dom";

class App extends Component {
  render() {
    return (
        <div>
            <Header />
            <Switch>
                <Route exact path="/" component={Shelves} />
                <Route path="/search" component={Search} />
            </Switch>
        </div>
    );
  }
}

export default App;
