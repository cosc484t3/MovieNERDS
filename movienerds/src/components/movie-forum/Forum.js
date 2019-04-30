import React, { Component } from 'react'
import { MOVIE_NERDS_API_URL } from '../common/App'
import axios from 'axios'

export class Forum extends Component {
  state = {
    movie: {}
  }

  async componentDidMount(){
    try {
      // retrieving the id from the url
      let movieID = this.props.match.params.id
      axios.get(`${MOVIE_NERDS_API_URL}/movies/${movieID}`)
      .then(res => { 
        this.setState({movie: res.data[0]})
      })
      .catch(function (error) { 
        console.log(error);
      })
    } catch(e) {
      console.log(e)
    }
  }
  
  render() {
    const { movie } = this.state

    if(!movie) return null;
    console.log(movie.title)
    return (
        <div className="body">
            <h1>{movie.title}</h1>
            <img src={movie.bannerURL} alt={movie.title} style={{textAlign: "center"}}/>
            Description: <p>{movie.synopsis}</p>
            <a href='/'>Character Details</a>
            <CommentBox data={commentData} />
        </div>
    )
  }
}

var commentData = [

  { 
    user:"Admin", 
    out:"Please be respectful!"
  },
  
];

class CommentBox extends Component {

  getInitialState() {

    return {

      data: commentData

    }

  }

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
        <CommentList data={this.props.data} />
      </div>

    );
  }
}

class CommentList extends Component{

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

class CommentForm extends Component{

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

      //was <form className="comment-form form-group" onSubmit={this.handleSubmit}>
      // <div className="input-group">
      //     <span className="input-group-addon">Name</span>
      //     <input type="text" placeholder="Your name" className="form-control" />
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

class Comment extends Component {

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

// render(

//   ,
//   document.getElementById('app')

// )