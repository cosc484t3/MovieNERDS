import axios from 'axios';
import { MOVIE_NERDS_API_URL } from './index'
import * as actionTypes from './constants'

export function getAllMovies(){
    return dispatch => {
        return axios.get(`${MOVIE_NERDS_API_URL}/movies`)
        .then(response => {
            if(response.status === 200){
                dispatch({
                    type: actionTypes.GET_MOVIES_SUCCESS,
                    allMovies: response.data
                })
            }
            else{
                dispatch({
                    type: actionTypes.GET_MOVIES_FAILURE,
                    allMovies: null,
                    errorMessage: `Response status ${response.status}: No movies returned.`
                })
            }
        })
        .catch(error => {
            let errorMsg = `getAllMovies API call was unsuccessful: ${error}`
            dispatch({
                type: actionTypes.GET_MOVIES_FAILURE,
                allMovies: null,
                errorMessage: errorMsg
            })
        })
    }
}

export function getAllSearchableMovies(){
    return dispatch => {
        return axios.get(`${MOVIE_NERDS_API_URL}/movies`)
        .then(response => {
            if(response.status === 200){
                dispatch({
                    type: actionTypes.GET_SEARCHABLE_MOVIES_SUCCESS,
                    searchableMovies: response.data
                })
            }
            else{
                dispatch({
                    type: actionTypes.GET_SEARCHABLE_MOVIES_FAILURE,
                    searchableMovies: null,
                    errorMessage: `Response status ${response.status}: No searchable movies returned.`
                })
            }
        })
        .catch(error => {
            let errorMsg = `getSearchableMovies API call was unsuccessful: ${error}`
            dispatch({
                type: actionTypes.GET_SEARCHABLE_MOVIES_FAILURE,
                searchableMovies: null,
                errorMessage: errorMsg
            })
        })
    }
}

export function getRecentMovies(){
    return dispatch => {
        return axios.get(`${MOVIE_NERDS_API_URL}/movies/recent`)
        .then(response => {
            if(response.status === 200){
                dispatch({
                    type: actionTypes.GET_RECENT_MOVIES_SUCCESS,
                    recentMovies: response.data
                })
            }
            else{
                dispatch({
                    type: actionTypes.GET_RECENT_MOVIES_FAILURE,
                    recentMovies: null,
                    errorMessage: `Response status ${response.status}: No recent movies returned.`
                })
            }
        })
        .catch(error => {
            let errorMsg = `getRecentMovies API call was unsuccessful: ${error}`
            dispatch({
                type: actionTypes.GET_RECENT_MOVIES_FAILURE,
                recentMovies: null,
                errorMessage: errorMsg
            })
        })
    }
}

export function updateCurrentMovie(movieID){
    return dispatch => {
        return axios.get(`${MOVIE_NERDS_API_URL}/movies/${movieID}`)
        .then(response => {
            if(response.status === 200){
                dispatch({
                    type: actionTypes.UPDATE_CURRENT_MOVIE_SUCCESS,
                    currentMovie: response.data[0]
                })
            }
            else{
                dispatch({
                    type: actionTypes.UPDATE_CURRENT_MOVIE_FAILURE,
                    currentMovie: null,
                    errorMessage: `Response status ${response.status}: The current movie was not updated.`
                })
            }
        })
        .catch(error => {
            let errorMsg = `updateCurrentMovie API call was unsuccessful: ${error}`
            dispatch({
                type: actionTypes.UPDATE_CURRENT_MOVIE_FAILURE,
                currentMovie: null,
                errorMessage: errorMsg
            })
        })
    }
}

export function postComment(movie){
    return dispatch => {
        return axios.post(`${MOVIE_NERDS_API_URL}/update/${movie.id}`, movie)
        .then(response => {
            if(response.status === 200){
                console.log("Movie with id: ", movie.id, " has been successfully updated with your comment.")
                dispatch(updateCurrentMovie(movie.id))
            }
            else {
                console.log("Posting your comment was unsuccessful for movie with id ", movie.id);
            }
        })
        .catch(error => {
            console.log("This route hates you: ", error)
        })
    }
}