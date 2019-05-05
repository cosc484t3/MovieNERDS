import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../../actions'
import '../../layout/Homepage.css'

class AllMovies extends Component {

  async componentDidMount(){
    const { actions, allMovies } = this.props
    {!allMovies && actions.getAllMovies()}
  }

  render() {
    const { allMovies } = this.props

    if(!allMovies) return null
    return (
      <div>
        <>
         <div className="col-gap">
            {allMovies.map(movie => {
              return(
                <div>
                  <Link to={`/movie/${movie.id}`} >
                    <img src={movie.imageURL} alt={movie.title} style={{ width: "250px"}}/>
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

const mapStateToProps = store => {
  return {
    allMovies: store.allMovies
  }
}

const mapDispatchToProps = dispatch => {
  return{
    actions: bindActionCreators(actions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AllMovies);