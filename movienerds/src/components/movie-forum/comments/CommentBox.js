import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { CommentForm } from './CommentForm'
import { RateMe } from './RateMe'
import {CommentList} from './CommentList'

export class CommentBox extends Component {

    /* getInitialState() {
      return {
        data: commentData
      }
    } */
  
    handleCommentSubmit(comment) {
      this.props.data.push(comment);
      var comments = this.state.data;
      var newComments = comments.concat([comment]);
      this.setState({data: newComments});
    }
  
    render() {
      return (
        <div className="commBox">
          <CommentForm data={this.props.data} onCommentSubmit={this.handleCommentSubmit} />
          <RateMe />
          <CommentList data={this.props.data} />
        </div>
      );
    }
}