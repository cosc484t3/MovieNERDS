import React, { Component } from 'react'
import { Modal, Form, Button } from 'react-bootstrap'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as actions from '../../../actions'

class CommentForm extends Component{
  
  constructor(props){
    super(props)
    this.state = {
      show: false,
      error: null
    }

    this.postComment = this.postComment.bind(this)
  }

  showModal = () => {
    this.setState({show: true})
  }

  hideModal = () => {
    this.setState({show: false})
  }

  postComment = () => {
    const { actions, currentMovie } = this.props
    const username = document.getElementById("username").value.trim()
    const userInput = document.getElementById("comment").value.trim()

    const comment = {username: username, text: userInput}

    let movieWithNewComment = {
      ...currentMovie,
      comments: [...currentMovie.comments, comment]
    }

    if(username && userInput){
      actions.postComment(movieWithNewComment)
    }
    else {
      alert("Please fill out all fields in the form.")
    }
  }
  
  render() {
    const { show } = this.state

    return (
      <div className="commBox">
        {show && 
          <Modal show={true} onHide={this.hideModal}>
            <Modal.Header closeButton>
              <Modal.Title>Add New Comment</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form>
                <Form.Group>
                  <Form.Label>Name</Form.Label>
                  <Form.Control 
                    name="username" 
                    placeholder="Enter name here..." 
                    id="username" 
                    required 
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Comment</Form.Label>
                  <Form.Control as="textarea" placeholder="Type comment here..." id="comment" required></Form.Control>
                </Form.Group>
              </Form>
              <p>* By posting this comment to the MovieNERDS site, I acknowledge that this comment adheres to the site's code of conduct.</p>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={this.hideModal}>Cancel</Button>
              <Button variant="primary" onClick={this.postComment}>Post Comment</Button>
            </Modal.Footer>
          </Modal>
        }
        <Button type="button" onClick={this.showModal}>Add Comment</Button>
      </div>
    );
  }
}

const mapStateToProps = store => {
  return {
    currentMovie: store.currentMovie
  }
}

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentForm)