import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Link } from 'react-router-dom'
import '../../layout/Homepage.css'
import * as actions from '../../actions'

class RecentMovies extends Component {

  async componentDidMount(){
    const { actions } = this.props
    actions.getRecentMovies()
  }
  
  render() {
    const { recentMovies } = this.props

    if(!recentMovies) return null

    return (
      <div>
       <div id="movie thumbnail display" style={{paddingLeft: "15px"}}>
          <h2>Featured Movies & Descriptions</h2>
          <div className="movie-grid">
            {recentMovies.map(thumbnail => {
              return(
                <>
                  <div className="movie-grid-item">
                  <Link to={`/movie/${thumbnail.id}`} >
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

const mapStateToProps = store => {
  return {
    recentMovies: store.recentMovies
  }
}

const mapDispatchToProps = dispatch => {
  return{
    actions: bindActionCreators(actions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RecentMovies);