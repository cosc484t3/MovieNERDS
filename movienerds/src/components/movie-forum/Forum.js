import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { MOVIE_NERDS_API_URL } from '../common/App'

export class Forum extends Component {
  state = {
    movie: {}
  }

  async componentDidMount(){
    try {
      // retrieving the id from the url pathname and slicing it to ignore the / in the pathname
      let movieID = window.location.pathname.slice(1) 
      const response = await fetch(`${MOVIE_NERDS_API_URL}/movies/${movieID}`) //calling the API to get one specific movie object
      const movie = await response.json()

      this.setState({movie: movie}) // setting the state with the one movie object we received
    } catch(e) {
      console.log(e)
    }
  }
  
  render() {
    const { movie } = this.state

    if(!movie) return null;

    return (
        <div className="body">
            <h1>{movie.title}</h1>
        </div>
    )
  }
}

//   var CommentForum = React.createClass({
//     getInitialState: function() {
//       return {author: '', text: ''};
//     },
//     handleAuthorChange: function(e) {
//       this.setState({author: e.target.value});
//     },
//     handleTextChange: function(e) {
//       this.setState({text: e.target.value});
//     },
//     handleSubmit: function(e) {
//       e.preventDefault();
//       var author = this.state.author.trim();
//       var text = this.state.text.trim();
//       if (!text || !author) {
//         return;
//       }
//       this.props.onCommentSubmit({author: author, text: text});
//       this.setState({author: '', text: ''});
//     },
//     render: function() {
//       return (
//         <form className="CommentForum" onSubmit={this.handleSubmit}>
//           <input
//             type="text"
//             placeholder="Name"
//             value={this.state.author}
//             onChange={this.handleAuthorChange}
//           />
//           <input
//             type="text"
//             placeholder="Comment"
//             value={this.state.text}
//             onChange={this.handleTextChange}
//           />
//           <input type="submit" value="Post" />
//         </form>
//       );
//     }
//   });
//   var CommentBox = React.createClass({
//     /* loadCommentsFromServer: function() {
//       $.ajax({
//         url: this.props.url,
//         dataType: 'json',
//         cache: false,
//         success: function(data) {
//           this.setState({data: data});
//         }.bind(this),
//         error: function(i, status, err) {
//           console.error(this.props.url, status, err.toString());
//         }.bind(this)
//       });
//     },
//     handleCommentSubmit: function(comment) {
//       var comments = this.state.data;
//       comment.id = Date.now();
//       var newComments = comments.concat([comment]);
//       this.setState({data: newComments});
//       $.ajax({
//         url: this.props.url,
//         dataType: 'json',
//         type: 'POST',
//         data: comment,
//         success: function(data) {
//           this.setState({data: data});
//         }.bind(this),
//         error: function(i, status, err) {
//           this.setState({data: comments});
//           console.error(this.props.url, status, err.toString());
//         }.bind(this)
//       });
//     }, */
//     getInitialState: function() {
//       return {data: []};
//     },
//     componentDidMount: function() {
//       this.loadCommentsFromServer();
//       setInterval(this.loadCommentsFromServer, this.props.pollInterval);
//     },
//     render: function() {
//       return (
//         <div className="commentBox">
//           <h1>Comments</h1>
//           {/* <CommentList data={this.state.data} />
//           <CommentForum onCommentSubmit={this.handleCommentSubmit} /> */}
//         </div>
//       );
//     }
//   });