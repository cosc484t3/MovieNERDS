import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../../layout/homepage.css'
import { MOVIE_NERDS_API_URL } from '../common/App'
import axios from 'axios';

export class Homepage extends Component {
  state = {
    movies: []
  }

  async componentDidMount(){
    axios.get(`${MOVIE_NERDS_API_URL}/movies`)
    .then(res => { 
      this.setState({movies: res.data})
    })
    .catch(function (error) { 
      console.log(error);
    })
  }

  render() {
    const { movies } = this.state

    if(!movies) return null;

    return (
      <div>
        <p>Image slider of recently uploaded movies</p>
        <div id="recently-uploaded-movies">
          
        </div>
        
        <div id="movie-quotes-display">
          <Link to="/movie-quotes" style={{textDecoration: "none", color: "white"}}>
            <h2>Random Movie Quotes</h2>
          </Link>
          {movies.map(movie => {
            return(
              <div>
                <h3>{movie.title}</h3>
                {movie.quotes.map(quote => <p id="quotes">{quote}</p>)}
              </div>
            )
          })}
        </div>
        <p>First three movies with images and descriptions beneath them</p>
        <div id="movie thumbnail display">
          <h3>Sample Movies and Descriptions</h3>
          {movies.map(movie => {
            return (
              <div>
                <img src={movie.imageURL} alt={movie.title} />
                <h3>{movie.title}</h3>
                <p>{movie.synopsis}</p>
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}
