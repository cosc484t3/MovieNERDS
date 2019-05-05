import React, { Component } from 'react'

export class Comment extends Component {

    render() {
      return (
        <div className="comment">
          <br></br>
          <h4 className="user">{this.props.user}</h4>
          {this.props.out}
        </div>
  
      );
    }
  }