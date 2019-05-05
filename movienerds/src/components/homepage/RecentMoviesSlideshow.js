import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import '../../layout/recent-movies.css';

class RecentMoviesSlideshow extends Component {

  constructor(props){
    super(props)
    this.state = {
      localCurrentMovie: props.recentMovies[0]
    }
  }

  nextSlide(index){
    let { recentMovies } = this.props
    let nextSlide;

    if(index >= recentMovies.length){
      nextSlide = 0;
    }
    else{
      nextSlide = index + 1;
    }
    this.setState({ localCurrentMovie: recentMovies[nextSlide] })
    console.log(`Right arrow navigated to ${this.state.localCurrentMovie.title}`)
    return nextSlide;
  }

  previousSlide(index) {
    let { recentMovies } = this.props;
    let previousSlide;

    if(index === 0){
      previousSlide = recentMovies.length - 1;
    }
    else{
      previousSlide = index - 1;
    }
    this.setState({ localCurrentMovie: recentMovies[previousSlide] })
    console.log(`Left arrow navigated to ${this.state.localCurrentMovie.title}`)
  }

  render() {
    let { localCurrentMovie } = this.state;
    let { recentMovies } = this.props;
    
    if(!recentMovies) return null;
    else if(!localCurrentMovie) return null;

    let slideIndex = recentMovies.findIndex(movie => movie.id === localCurrentMovie.id)
    return (
      <div className="slideshow">
        <div className="slide">
          <Link to={`/movie/${localCurrentMovie.id}`}>
            <img className="recent-movie-banner" src={localCurrentMovie.bannerURL} alt={localCurrentMovie.title}/>
          </Link>
        </div>
        <div className="left-arrow" onClick={() => this.previousSlide(slideIndex)}>&#9664;</div>
        <div className="right-arrow" onClick={() => this.nextSlide(slideIndex + 1)}>&#9654;</div>
      </div>
    )
  }
}

export default connect()(RecentMoviesSlideshow)