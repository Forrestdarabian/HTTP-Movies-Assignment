import React from "react";
import axios from "axios";
import MovieCard from "./MovieCard";
import { Link } from 'react-router-dom';


export default class Movie extends React.Component {

  //   this.state = {
  //     movie: null
  //   };
  // }

  // componentDidMount() {
  //   this.fetchMovie(this.props.match.params.id);
  // }

  componentWillReceiveProps(newProps) {
    console.log('newProps', newProps);
    if (this.props.match.params.id !== newProps.match.params.id) {
      this.fetchMovie(newProps.match.params.id);
    }
  
  fetchMovie = id => {
    axios
      .get(`http://localhost:5000/api/movies/${id}`)
      .then(response => {
        this.setState({ movie: response.data });
      })
      .catch(err => {
        console.log(err);
    });
  };


  saveMovie = () => {
    const addToSavedList = this.props.addToSavedList;
    addToSavedList(this.state.movie);
  };

  deleteItem = e => {
    e.preventDefault();
    axios
      .delete(`http://localhost:5000/api/movies/${item.id}`)
      .then(res => {
        props.updateItems(res.data);
        props.history.push('/item-list');
      })
      .catch(err => console.log(err.response));
  };


  render() 
    if (!this.state.movie) {
      return <div>Loading movie information...</div>;
    }
    return (
      <div className="save-wrapper">
        <MovieCard movie={this.state.movie} />
        
        <div className="save-button" onClick={this.saveMovie}>
          Save
        </div>
        <Link to={"/"}>
  <div className="home-button-card">Home</div>
</Link>
      </div>
    );
  }
}






