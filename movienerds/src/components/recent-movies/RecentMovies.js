import React, { Component } from 'react'
import { MOVIE_NERDS_API_URL } from '../common/App'
import axios from 'axios';
import { Link } from 'react-router-dom'
import '../../layout/Homepage.css'

export class RecentMovies extends Component {
  constructor(props){
    super(props)
    this.state = {
      movies: [],
      movieThumbnails: []
    }
  }

  async componentDidMount(){
    axios.get(`${MOVIE_NERDS_API_URL}/movies/recent`)
    .then(res => { 
      this.setState({movies: res.data})
    })
    .catch(function (error) { 
      console.log(error);
    })
  }
  render() {
    const { movies, movieThumbnails } = this.state
    return (
      <div>
       <div id="movie thumbnail display" style={{paddingLeft: "15px"}}>
          <h2>Featured Movies & Descriptions</h2>
          <div className="movie-grid">
            {movies.map(thumbnail => {
              return(
                <>
                  <div className="movie-grid-item">
                  <Link to={`/${thumbnail.id}`} >
                    <img src={thumbnail.imageURL} alt={thumbnail.title} style={{width: "250px"}}/>
                  </Link>
                  <br />
                  <h3>{thumbnail.title}</h3>
                  <strong>Release Year: {thumbnail.year}</strong>
                  <div>{thumbnail.synopsis}</div>
                </div>
                <br />
                </>
              )
            })}
          </div>
        </div>
      </div>
    )
  }
}
