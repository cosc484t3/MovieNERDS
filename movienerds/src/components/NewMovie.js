import React, { Component } from 'react'
import { MOVIE_NERDS_API_URL } from './App'
import '../layout/NewMovie.css'

export class NewMovie extends Component {
  state = {
    count: "",
    movies: []
  }

/*   storeInfo(){
    //these 3 following variables are finding the selected rating from the drop down
    let ratings = document.getElementById("ratings")
    // let chosenIndex = ratings.selectedIndex
    // let selectedRating = ratings.options[chosenIndex]

    //cast members
    let members = document.getElementById("cast").value.split(',')

    //splitting the two quotes into an array of strings
    let quotes = document.getElementById("quotes").value.split(';')

    //splitting the genre(s) into an array of strings
    let genres = document.getElementById("genres").value.split(',')

    let newMovieData = {
      id: document.getElementById("immutable-id").value,
      title: document.getElementById("title").value,
      year: document.getElementById("year").value,
      // rating: selectedRating,
      cast: members,
      quotes: quotes,
      genres: genres,
      description: document.getElementById("description").value,
      imageURL: document.getElementById("image-url").value,
      bannerURL: document.getElementById().value
    }

    this.postToAPI(newMovieData)
  } */

  async componentDidMount (){
    try{
      const res = await fetch(`${MOVIE_NERDS_API_URL}/movies`)
      console.log("Response: ", res)
      const movieData = await res.json();
      console.log("Movies: ", movieData)
      this.setState({ count: movieData.count, movies: movieData.movies})
      console.log("This state: ", this.state)
    }
    catch (e){
      console.log(e)
    }
  }
  
  /* async postToAPI(newMovieData){
    fetch(`${MOVIE_NERDS_API_URL}`, {
      method: 'POST',
      body: JSON.stringify(newMovieData),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(res => res.json())
    .then(response => console.log('Success: ', JSON.stringify(response)))
  } */

  render() {
    const { movies, count } = this.state;

    if(!movies) return null

    return (
      <div class="new-movie-container">
        <h2>Add a new movie</h2>
          <form className="new-movie-form">
            {/* Movie ID */}
            <div class="row">
              <div class="col-25">
                <label for="movie-id" id="movie-id">ID:</label> 
              </div>
              <div class="col-75">
                <input type="text" id="immutable-id" value="1"/>
              </div>
            </div>
            {/* Movie Title */}
            <div class="row">
              <div class="col-25">
                <label for="movie-title">Title:</label> 
              </div>
              <div class="col-75">
                <input type="text" id="title" placeholder="Enter movie title here"/>
              </div>
            </div>
            {/* Movie Year */}
            <div class="row">
              <div class="col-25">
                <label for="movie-year">Year:</label> 
              </div>
              <div class="col-75">
                <input type="text" id="year" placeholder="Enter movie year here"/>
              </div>
            </div>
            {/* Movie Rating */}
            <div class="row">
              <div class="col-25">
                <label for="movie-rating">Rating:</label> 
              </div>
              <div class="col-75">
                <select id="ratings">
                  <option value="" selected disabled hidden>Choose movie rating:</option>
                  <option value="G">G</option>
                  <option value="PG">PG</option>
                  <option value="PG-13">PG-13</option>
                  <option value="R">R</option>
                  <option value="MA">MA</option>
                </select>
              </div>
            </div>
            {/* Movie Cast */}
            <div class="row">
              <div class="col-25">
                <label for="movie-cast">Cast Members:</label> 
              </div>
              <div class="col-75">
                <input type="text" id="cast" placeholder="Enter first and last name of each cast member separated by a comma" />
              </div>
            </div>
            {/* Movie Quotes */}
            <div class="row">
              <div class="col-25">
                <label for="movie-quotes">Two Quotes:</label> 
              </div>
              <div class="col-75">
                <input type="text" id="quotes" placeholder="Enter two quotes separated by a semicolon" />
                <p>Enter two quotes separated by a semicolon</p>
              </div>
            </div>
            {/* Movie Genres */}
            <div class="row">
              <div class="col-25">
                <label for="movie-genres">Genres:</label> 
              </div>
              <div class="col-75">
                <input type="text" id="genres" placeholder="Enter whatever genres apply each separated by a comma" />
                <p>Enter whatever genres apply, each separated by a comma</p>
              </div>
            </div>
            {/* Movie Description */}
            <div class="row">
              <div class="col-25">
                <label for="movie-desc">Description:</label> 
              </div>
              <div class="col-75">
                <textarea id="description" placeholder="Type movie description here..." />
              </div>
            </div>
            {/* Movie Image URL */}
            <div class="row">
              <div class="col-25">
                <label for="movie-img-url">Image URL:</label> 
              </div>
              <div class="col-75">
                <input type="url" id="image-url" placeholder="Enter image URL from IMDb here" />
                <p>Enter image URL from IMDb here</p>
              </div>
            </div>
            {/* Movie Banner URL */}
            <div class="row">
              <div class="col-25">
                <label for="movie-banner-url">Banner URL:</label> 
              </div>
              <div class="col-75">
                <input type="url" id="banner-url" placeholder="Enter image URL from tmdb.com here" />
                <p>Enter image URL from tmdb.com here</p>
              </div>
            </div>
            <div class="row">
              <button onclick={this.storeInfo()}>Submit</button>
            </div>
          </form>
      </div>
    )
  }
}
