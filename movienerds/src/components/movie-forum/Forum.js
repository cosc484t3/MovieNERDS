import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { CommentBox } from './comments/CommentBox'
import * as actions from '../../actions'

import '../../layout/forum.css'

class Forum extends Component {
  async componentDidMount(){
    const { actions } = this.props
      let movieID = this.props.match.params.id
      actions.updateCurrentMovie(movieID)
  }
  
  render() {
    const { currentMovie } = this.props
    var commentData = [
      { 
        user:"Admin", 
        out:"Please be respectful!"
      },
    ];

    if(!currentMovie) return null;

    return (
        <div className="body">
            <h1>{currentMovie.title}</h1>
            <img src={currentMovie.bannerURL} alt={currentMovie.title} style={{textAlign: "center"}}/>
            <br />
            <strong>Description: </strong><p>{currentMovie.synopsis}</p>
            <Link to={`/character-details/${currentMovie.id}`}>Character Details</Link>
            <CommentBox data={commentData} />
        </div>
    )
  }
}

const mapStateToProps = store => {
  return{
    currentMovie: store.currentMovie
  }
}

const mapDispatchToProps = dispatch => {
  return{
    actions: bindActionCreators(actions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Forum)