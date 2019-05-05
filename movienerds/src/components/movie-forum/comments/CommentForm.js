import React, { Component } from 'react'


export class CommentForm extends Component{

    handleSubmit(i) {
  
      i.preventDefault();
      var userValue = i.target[0].value.trim();
      var outValue = i.target[1].value.trim();
  
      if (!outValue || !userValue) {
  
        return;
  
      }
  
      this.props.onCommentSubmit({user: userValue, out: outValue});
      i.target[0].value = '';
      i.target[1].value = '';
  
      return;
  
    }
  
    render() {
      return(
        <form className="forumGroup" onSubmit={this.handleSubmit}>
          <div className="inputGroup">
            <span className="addition"><h4>Name: </h4> </span>
            <input type="text" placeholder="Type your name" className="ctrl" />
          </div>
  
          <div className="inputGroup">
            <span className="addition"><h4>Comment: </h4></span>
            <input type="text" placeholder="Type your message" className="ctrl" />
          </div>
  
          <input type="submit" value="Post" className="button" />
  
        </form>
  
      );
    }
}