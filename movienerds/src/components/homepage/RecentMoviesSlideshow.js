import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { MOVIE_NERDS_API_URL } from '../common/App'
import '../../layout/recent-movies.css';
import axios from 'axios'

export class RecentMoviesSlideshow extends Component {

  constructor(props){
    super(props)
    this.state = {
      recentMovies: null,
      currentMovie: {}
    }
  }

  async componentDidMount(){
    try{
      axios.get(`${MOVIE_NERDS_API_URL}/movies/recent`)
      .then(res => { 
        this.setState({
          recentMovies: res.data, 
          currentMovie: res.data[0]
        })
      })
      .catch(function (error) { 
        console.log(error);
      })
    }
    catch(e){
      console.log("Fetching recent movies error: ", e)
    }
  }

  nextSlide(index){
    let { recentMovies } = this.state
    let nextSlide;

    if(index >= recentMovies.length){
      nextSlide = 0;
    }
    else{
      nextSlide = index + 1;
    }
    this.setState({ currentMovie: recentMovies[nextSlide] })
    return nextSlide;
  }

  previousSlide(index) {
    let { recentMovies } = this.state;
    let previousSlide;

    if(index === 0){
      previousSlide = recentMovies.length - 1;
    }
    else{
      previousSlide = index - 1;
    }
    this.setState({ currentMovie: recentMovies[previousSlide] })
  }

  render() {
    let { currentMovie, recentMovies } = this.state;
    
    if(!recentMovies) return null

    let slideIndex = recentMovies.findIndex(movie => movie.id === currentMovie.id)
    console.log('Current movie id: ', currentMovie.id)
    return (
      <div className="slideshow">
        <div className="slide">
          <Link to={`/${currentMovie.id}`}>
            <img className="recent-movie-banner" src={currentMovie.bannerURL} alt={currentMovie.title}/>
          </Link>
        </div>
        <div className="left-arrow" onClick={() => this.previousSlide(slideIndex)}>&#9664;</div>
        <div className="right-arrow" onClick={() => this.nextSlide(slideIndex + 1)}>&#9654;</div>
      </div>
    )
  }
}
