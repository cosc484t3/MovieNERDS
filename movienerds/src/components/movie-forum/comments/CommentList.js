import React, { Component } from 'react'
import { Comment } from './Comment'

export class CommentList extends Component{

    render() {
      return (
        <div className="commList">
          {this.props.data.map(function(i){
            return (
              <Comment user={i.user} out={i.out} />
            );
          })}
        </div>
      );
    }
}