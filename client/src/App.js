import React, { useState } from "react";
import { Route, Link, Switch, withRouter } from "react-router-dom";
import SavedList from "./Movies/SavedList";
import axios from 'axios';
import MovieList from "./Movies/MovieList";
import Movie from "./Movies/Movie";

export default class App extends Component {
  constructor(){
    super();
    this.state = {
      savedList: []
    }
  };

  componentDidmount() {}
  addToSavedList = movie => {
    console.log(this.state.savedList);
    const savedList = this.state.savedList;
    savedList.push(movie);
    this.setState({ savedList })
  };
  
  render() {
    return (
      <div>
        <SavedList list={this.state.savedList} />
        <Route exact path="/" component={MovieList} />
        <Route path="/movies/:id"
        render={props => {
          return <Movie {...props} addToSavedList={this.addToSavedList} />;
        }} />
      </div>
    );
  }
}