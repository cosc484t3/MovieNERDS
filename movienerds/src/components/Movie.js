import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class Movie extends Component {
  render() {
    return (
      <div>
        
      </div>
    )
  }
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    rating: PropTypes.string.isRequired,
    cast: PropTypes.arrayOf(PropTypes.string).isRequired,
    quotes: PropTypes.arrayOf(PropTypes.string).isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
    description: PropTypes.string.isRequired,
    imageURL: PropTypes.string.isRequired
}