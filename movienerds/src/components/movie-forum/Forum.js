import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
// import { CommentBox } from './comments/CommentBox'
import CommentForm from './comments/CommentForm'
import * as actions from '../../actions'

import '../../layout/forum.css'
import '../../layout/comment-box.css'


function CommentBox(props) {
  if(props.comments.length === 0){
    return (
      <>
      <h5>Comments</h5>
        <div className="comment-box">
          <p>No comments to display.</p>
        </div>
      </>
    );
  }

  return (
    <div className="comment-box">
      {props.comments.map(comment => {
        return(
          <div className="comment-box">
            <h6>{comment.username}</h6>
            <p>{comment.text}</p>
          </div>
        );
      })}
    </div>
  );
}


class Forum extends Component {
  async componentDidMount(){
    const { actions, currentMovie } = this.props
      let movieID = this.props.match.params.id
      if(!currentMovie || currentMovie.id !== movieID){
        actions.updateCurrentMovie(movieID)
      }
  }
  
  render() {
    const { currentMovie } = this.props

    if(!currentMovie) return null;

    return (
        <div className="body">
            <h1>{currentMovie.title}</h1>
            <img src={currentMovie.bannerURL} alt={currentMovie.title} style={{textAlign: "center"}}/>
            <br />
            <strong>Description: </strong><p>{currentMovie.synopsis}</p>
            <Link to={`/character-details/${currentMovie.id}`}>Character Details</Link>
            <CommentBox comments={currentMovie.comments}/>
            <br />
            <CommentForm currentMovie={currentMovie}/>
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