import React, { Component } from 'react'
import { Link } from 'react-router-dom'

// Components
import { RecentMoviesSlideshow } from './RecentMoviesSlideshow'

// CSS file
import '../../layout/homepage.css'

// API general route
import { MOVIE_NERDS_API_URL } from '../common/App'

export class Homepage extends Component {
  constructor(props){
    super(props);
    this.state = {
      count: "",
      movies: [],
      movieThumbnails: []
    }

    this.chooseAQuote = this.chooseAQuote.bind(this)
  }

  async componentDidMount(){
    try {
      const response = await fetch(`${MOVIE_NERDS_API_URL}/movies`)
      const movieData = await response.json();
      this.setState({ count: movieData.count, movies: movieData.movies, movieThumbnails: [movieData.movies[0], movieData.movies[1], movieData.movies[2]]})
    } catch(e) {
      console.log(e)
    }
  }

  chooseAQuote(){
    Math.floor(Math.random() * 2)
  }

  render() {
    const { movies, movieThumbnails } = this.state
    let quoteIndex = this.chooseAQuote()

    if(!movies) return null;

    return (
      <div className="body">
        <h2 style={{paddingLeft: "15px"}}>Recent Movies</h2>
        <div id="recently-uploaded-movies">
          <RecentMoviesSlideshow />
        </div>
        <div id="movie-quotes-display" style={{paddingLeft: "16px"}}>
          <Link to="/movie-quotes" style={{textDecoration: "none", color: "white"}}>
            <h2 style={{color: "black"}}>Random Movie Quotes</h2>
          </Link>
          {movies.map(movie => {
            return(
              <div>
                <p>{movie.quotes[this.chooseAQuote()]}</p>
                <p>{movie.title}</p>
              </div>
            )
          })}
        </div>
        <div id="movie thumbnail display" style={{paddingLeft: "15px"}}>
          <h2>Featured Movies & Descriptions</h2>
          <div className="movie-grid">
            {movieThumbnails.map(thumbnail => {
              return(
                <div className="movie-grid-item">
                  <img src={thumbnail.imageURL} alt={thumbnail.title} style={{width: "250px"}}/>
                  <br />
                  <h3>{thumbnail.title}</h3>
                  <div>{thumbnail.description}</div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    )
  }
}
