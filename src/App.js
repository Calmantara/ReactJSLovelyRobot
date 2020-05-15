import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import { CardList } from "./components/card-list/card-list.component.jsx";
import { SearchBox } from "./components/serach-box/search-box.component.jsx";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      monsters: [],
      searchField: ""
    };
    // this.searchHandler() = this.searchHandler.bind(this);
  }

  componentDidMount = () => {
    fetch("http://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(data => this.setState({ monsters: data }));
  };
  searchHandler = text => this.setState({ searchField: text.target.value });

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Lovely Monster</h1>
          <img
            src={logo}
            className="App-logo"
            alt="logo"
            height="200px"
            width="200px"
          />
          <SearchBox
            placeHolder="Search Monster..."
            searchHandler={this.searchHandler}
          />
        </header>
        <body className="App-header">
          <CardList
            monsters={this.state.monsters}
            searchField={this.state.searchField}
          />
        </body>
      </div>
    );
  }
}

export default App;
