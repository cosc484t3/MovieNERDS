import * as actionTypes from './constants'

const initialState = {
    allMovies: [],
    recentMovies: [],
    currentMovie: null,
    errorMessage: null
}

export default function movieReducer(state = initialState, action){
    switch(action.type){
        case actionTypes.GET_MOVIES_SUCCESS:
            return {
                ...state,
                allMovies: action.allMovies
            };
        case actionTypes.GET_MOVIES_FAILURE:
            return {
                ...state,
                allMovies: action.allMovies,
                errorMessage: action.errorMessage
            };
        case actionTypes.GET_SEARCHABLE_MOVIES_SUCCESS:
            return {
                ...state,
                searchableMovies: action.searchableMovies
            };
        case actionTypes.GET_SEARCHABLE_MOVIES_FAILURE:
            return {
                ...state,
                searchableMovies: action.searchableMovies,
                errorMessage: action.errorMessage
            };
        case actionTypes.GET_RECENT_MOVIES_SUCCESS:
            return {
                ...state,
                recentMovies: action.recentMovies
            };
        case actionTypes.GET_RECENT_MOVIES_FAILURE:
            return {
                ...state,
                recentMovies: action.recentMovies,
                errorMessage: action.errorMessage
            };
        case actionTypes.UPDATE_CURRENT_MOVIE_SUCCESS:
            return {
                ...state,
                currentMovie: action.currentMovie
            };
        case actionTypes.UPDATE_CURRENT_MOVIE_FAILURE:
            return {
                ...state,
                currentMovie: null,
                errorMessage: action.errorMessage
            };
        default:
            return state
    }
}
