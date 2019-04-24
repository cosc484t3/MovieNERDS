import React, { Component } from 'react'

// API general route
import { MOVIE_NERDS_API_URL } from './App'

// CSS file
import '../layout/recent-movies.css';

export class RecentMovies extends Component {

  constructor(props){
    super(props)
    this.state = {
      recentMovies: null,
      currentMovie: {}
    }
  }

  async componentDidMount(){
    try{
      let response = await fetch(`${MOVIE_NERDS_API_URL}/movies/recent`)
      let recentMovies = await response.json()
      this.setState({
        recentMovies: recentMovies.movies,
        currentMovie: recentMovies.movies[0]
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
    console.log("This.state.currentMovie (nextSlide): ", this.state.currentMovie)
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

    console.log("This.state.currentMovie (previousSlide): ", this.state.currentMovie)
  }

  render() {
    let { currentMovie, recentMovies } = this.state;
    
    if(!recentMovies) return null

    let slideIndex = recentMovies.findIndex(movie => movie.id === currentMovie.id)

    //* Error when I click for the 16th time (after The Hate U Give)
    console.log("Slide Index for current movie: ", slideIndex)

    return (
      <div className="slideshow">
        <div className="slide">
          <img className="recent-movie-banner" src={currentMovie.bannerURL} alt={currentMovie.title}/>
          {/* <div className="description">{currentMovie.title}</div> */}
        </div>
        <div className="left-arrow" onClick={() => this.previousSlide(slideIndex)}>&#9664;</div>
        <div className="right-arrow" onClick={() => this.nextSlide(slideIndex)}>&#9654;</div>
      </div>
    )
  }
}
