import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../../layout/nav-bar.css'

export class NavBar extends Component {
  render() {
    return (
      <div className="navbar">
        <div className="menu-container">
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
            <Link to="/forum">
              <li className="menu-options">Forum</li>
            </Link>
          </ul>
          <input type="text" placeholder="Search Movie..." id="search"/>
        </div>
      </div>
    )
  }
}
