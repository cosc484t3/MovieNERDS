import React, { Component } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom'
import { MOVIE_NERDS_API_URL } from '../common/App'
import '../../layout/Homepage.css'

export class AllMovies extends Component {
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
      this.setState({movies: res.data, movieThumbnails: res.data})
    })
    .catch(function (error) { 
      console.log(error);
    })
  }

  render() {
    const { movieThumbnails } = this.state
    return (
      <div>
        <>
         <div className="col-gap">
            {movieThumbnails.map(thumbnail => {
              return(
                <div>
                  <Link to={`/${thumbnail.id}`} >
                    <img src={thumbnail.imageURL} alt={thumbnail.title} style={{ width: "250px"}}/>
                  </Link>
                  </div>
              )
            })}
          </div>
          </>
      </div>
    )
  }
}
