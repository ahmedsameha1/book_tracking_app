import React, { Component } from 'react';
import './App.css';
import Header from "./components/Header";
import Shelves from "./components/Shelves";

class App extends Component {
  render() {
    return (
        <div>
            <Header />
            <Shelves />
        </div>
    );
  }
}

export default App;
