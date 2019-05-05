import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import '../../layout/Homepage.css'
// eslint-disable-next-line
import RecentMoviesSlideshow from './RecentMoviesSlideshow'
import * as actions from '../../actions'

class Homepage extends Component {
  constructor(props){
    super(props)
    this.state = {
      movies: [],
      movieThumbnails: []
    }
  }

  async componentDidMount(){
    const { actions } = this.props

    actions.getAllMovies()
    actions.getRecentMovies()
  }

  chooseAQuote(){
    return Math.floor(Math.random() * 2)
  }

  render() {
    const { movies, recentMovies } = this.props
    const { updateCurrentMovie } = this.props.actions
    let quoteIndex = this.chooseAQuote()

    if(!movies) return null;

    let movieThumbnails = [movies[23], movies[1], movies[2]]

    return (
      <div className="body">
        <h2 style={{paddingLeft: "15px"}}>Recent Movies</h2>
        <div id="recently-uploaded-movies">
          {recentMovies && <RecentMoviesSlideshow recentMovies={recentMovies}/>}
        </div>
        <div id="movie-quotes-display" style={{paddingLeft: "16px"}}>
          <Link to="/movie-quotes" style={{textDecoration: "none", color: "white"}}>
            <h2 style={{color: "black"}}>Random Movie Quotes</h2>
          </Link>
          {movies.map(movie => {
            return(
              <div>
                <p>{movie.quotes[quoteIndex]}</p>
                <strong><p>{movie.title}</p></strong>
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
                    <img src={thumbnail.imageURL} alt={thumbnail.title} style={{ width: "250px"}}/>
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

const mapStateToProps = store => {
  return{
    movies: store.allMovies,
    recentMovies: store.recentMovies,
    currentMovie: store.currentMovie
  }
}

const mapDispatchToProps = dispatch => {
  return{
    actions: bindActionCreators(actions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Homepage);