import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../../layout/homepage.css'
import { MOVIE_NERDS_API_URL } from '../common/App'
// eslint-disable-next-line
import { RecentMoviesSlideshow } from './RecentMoviesSlideshow'
import axios from 'axios';

export class Homepage extends Component {
  constructor(props){
    super(props)
    this.state = {
      movies: [],
      movieThumbnails: []
    }
  }

  async componentDidMount(){
    axios.get(`${MOVIE_NERDS_API_URL}/movies`)
    .then(res => { 
      this.setState({movies: res.data, movieThumbnails: [res.data[0], res.data[1], res.data[2]]})
    })
    .catch(function (error) { 
      console.log(error);
    })
  }

  chooseAQuote(){
    return Math.floor(Math.random() * 2)
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
                <p>{movie.quotes[quoteIndex]}</p>
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
                  <Link to={`/${thumbnail.id}`} >
                    <img src={thumbnail.imageURL} alt={thumbnail.title} style={{width: "250px"}}/>
                  </Link>
                  <br />
                  <h3>{thumbnail.title}</h3>
                  <div>{thumbnail.synopsis}</div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    )
  }
}
