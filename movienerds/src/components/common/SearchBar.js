import React, { Component } from 'react';
import { MOVIE_NERDS_API_URL } from './App'
import Autosuggest from 'react-autosuggest'
import '../../layout/search-bar.css'
import { Link } from 'react-router-dom'

//

const getSuggestions = (movies, value) => {
    const inputValue = value.trim().toLowerCase();
    const inputLength = inputValue.length;

    return inputLength === 0 ? [] : movies.filter(movie => {
        return movie.title.toLowerCase().slice(0, inputLength) === inputValue
    });
};

//was suggestion.name
const getSuggestionValue = movieSuggestion => movieSuggestion.title

const renderSuggestion = movieSuggestion => ( 
    <Link to={`/${movieSuggestion.id}`}>
        {/* <img src={movieSuggestion.imageURL} /> */}
        {movieSuggestion.title}
    </Link>
  );

export class SearchBar extends Component {
    
    constructor(){
        super()
        this.state = {
            searchInput: "",
            movies: [],
            movieSearchResults: []
        }
    }
    
    async componentDidMount(){
        const response = await fetch(`${MOVIE_NERDS_API_URL}/movies`)
        const movieData = await response.json();
        this.setState({movies: movieData.movies})
    }

    onSuggestionsFetchRequested = ({value}) => {
        console.log("Returned from getSuggestions: ", getSuggestions(this.state.movies, value))

        this.setState({
            movieSearchResults: getSuggestions(this.state.movies, value)
        })
    }

    onSuggestionsClearRequested = () => {
        this.setState({
            movieSearchResults: []
        })
    }

    onChange = (event, { newValue }) => {
        this.setState({
            searchInput: newValue
        })
    }

    render() {
        let {movies, searchInput, movieSearchResults} = this.state;

        const inputProps = {
            placeholder: 'Search movie title...',
            value: searchInput,
            onChange: this.onChange
        }

        return (
            <div className="search-container">
                <Autosuggest 
                    suggestions={movieSearchResults}
                    onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
                    onSuggestionsClearRequested={this.onSuggestionsClearRequested}
                    getSuggestionValue={getSuggestionValue}
                    renderSuggestion={renderSuggestion}
                    inputProps={inputProps}
                />
            </div>
        );
    }
}