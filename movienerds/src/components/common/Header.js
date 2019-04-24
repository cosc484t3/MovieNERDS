import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../../layout/header.css'
import { NavBar } from './NavBar'
const logo = require('../../images/movieNerdsLogo.png')

export class Header extends Component{
  render() {
    return (
      <div className = "header">
        <div className = "siteHeader">
          <Link to ="/" style={{textDecoration: 'none', color: 'white', alignContent: 'center', justifyContent: 'center', float: 'middle'}} className="homeLink">
            <img src={logo} id="homepage-logo" alt="movie nerds logo"/>
            <label id="siteTitle"><b>MOVIE NERDS</b></label>
          </Link>
        </div>
        <NavBar />
      </div>
    )
  }
}
