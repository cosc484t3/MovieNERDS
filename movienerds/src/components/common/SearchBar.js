import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Autosuggest from 'react-autosuggest'
import '../../layout/search-bar.css'
import { Link } from 'react-router-dom'
import * as actions from '../../actions'


class SearchBar extends Component {
    
    state = {
        searchInput: "",
        movieSearchResults: []
    }
    
    async componentDidMount(){
        const { actions, searchableMovies } = this.props
        {!searchableMovies && actions.getAllSearchableMovies()}
    }

    getSuggestions = (movies, value) => {
        const inputValue = value.trim().toLowerCase();
        const inputLength = inputValue.length;
    
        return inputLength === 0 ? [] : movies.filter(movie => {
            return movie.title.toLowerCase().slice(0, inputLength) === inputValue
        });
    };

    getSuggestionValue = movieSuggestion => movieSuggestion.title

    renderSuggestion = movieSuggestion => { 
        return (
            <div style={{height: "50px", display: "inline-block"}}>
                <Link to={`/movie/${movieSuggestion.id}`}>
                    <img 
                        src={movieSuggestion.imageURL} 
                        style={{width: "40px", height: "auto", marginRight: "15px", float: "left"}} 
                        alt={movieSuggestion.title}
                    />
                    {movieSuggestion.title}
                </Link>
            </div>
        );
    }

    onSuggestionsFetchRequested = ({value}) => {
        const { searchableMovies } = this.props;

        this.setState({
            movieSearchResults: this.getSuggestions(searchableMovies, value)
        })
    }

    onSuggestionsClearRequested = () => {
        this.setState({
            movieSearchResults: []
        })
    }

    onSuggestionSelected = (event, { suggestion, suggestionValue, suggestionIndex, sectionIndex, method }) => {
        const { actions } = this.props
        actions.updateCurrentMovie(suggestion.id)
    }

    onChange = (event, { newValue }) => {
        this.setState({
            searchInput: newValue
        })
    }

    render() {
        const { searchableMovies } = this.props
        let { searchInput, movieSearchResults } = this.state

        const inputProps = {
            placeholder: 'Search movie title...',
            value: searchInput,
            onChange: this.onChange
        }

        if(!searchableMovies) return null

        return (
            <div className="search-container">
                <Autosuggest 
                    suggestions={movieSearchResults}
                    onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
                    onSuggestionsClearRequested={this.onSuggestionsClearRequested}
                    getSuggestionValue={this.getSuggestionValue}
                    renderSuggestion={this.renderSuggestion}
                    inputProps={inputProps}
                    onSuggestionSelected={this.onSuggestionSelected}
                />
            </div>
        );
    }
}

const mapStateToProps = store => {
    return {
        currentMovie: store.currentMovie,
        searchableMovies: store.searchableMovies
    }
}

const mapDispatchToProps = dispatch => {
    return {
        actions: bindActionCreators(actions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar)