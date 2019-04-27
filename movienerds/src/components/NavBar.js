import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../layout/NavBar.css'
import {Button} from 'react-bootstrap'

export class NavBar extends Component {
  render() {
    return (
      <div className = "navbar">
        <div className = "menu-container">
          <ul className="menu">
            <Link to="/all-movies">
              <li className="menu-options">All Movies</li>
            </Link>
            <Link to="/recent-movies">
              <li className="menu-options">Most Recent Movies</li>
            </Link>
            <Link to="/movie-quotes">
              <li className="menu-options">Movie Quotes</li>
            </Link>
            <Link to="/new-movie">
              <li className="menu-options">Insert New Movie</li>
            </Link>
            <Link to="/movieforum">
              <li className="forum">Forum</li>
            </Link>
          </ul>
          <input type="text" placeholder="Search Movie..." id="search"/>
        </div>
      </div>
    )
  }
}
