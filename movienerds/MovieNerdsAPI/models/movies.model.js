// const fileName = '../data/movies-list.json';
const path = require('path');
const fileName = path.resolve(__dirname, '../data/movies-list.json');
let movieData = require(fileName)
const helper = require('../helpers/helper')

function getMovies(){
    console.log(movieData)
    return new Promise((resolve, reject) => {
        if(movieData.movies.length === 0){
            reject({
                message: 'No movies available',
                status: 202
            })
        }
        resolve(movieData)
    })
}

function getRecentMovies(){
    return new Promise((resolve, reject) => {
        const minRecentYear = 2016
        let recentMovies = movieData.movies.filter(movie => movie.year >= minRecentYear)
        if(recentMovies.length === 0){
            reject({
                message: 'No recent movies available',
                status: 202
            })
        }
        resolve(recentMovies)
    })
}

function getMovie(id){
    return new Promise((resolve, reject) => {
        helper.mustBeInArray(movieData.movies, id)
        .then(movie => resolve(movie))
        .catch(err => reject(err))
    })
}

function insertMovie(newMovie){
    return new Promise((resolve, reject) => {
        const id = { id: helper.getNewId(movieData.movies) }
        newMovie = {...id, ...newMovie}
        movieData.movies.push(newMovie)
        helper.incrementMovieCount(movieData)
        helper.writeJSONFile(fileName, movieData)
        resolve(newMovie)
    })
}

function updateMovie(id, newMovie){
    return new Promise((resolve, reject) => {
        helper.mustBeInArray(movieData.movies, id)
        .then(movie => {
            const index = movieData.movies.findIndex(m => m.id == movie.id)
            id = { id: movie.id }
            movieData.movies[index] = { ...id, ...newMovie }
            helper.writeJSONFile(fileName, movieData)
            resolve(movieData.movies[index])
        })
        .catch(err => reject(err))
    })
}

function deleteMovie(id){
    return new Promise((resolve, reject) => {
        helper.mustBeInArray(id)
        .then(() => {
            movieData.movies = movieData.movies.filter(m => m.id !== id)
            helper.writeJSONFile(fileName, movieData)
            resolve()
        })
        .catch(err => reject(err))
    })
}

module.exports = {
    getMovies,
    getRecentMovies,
    getMovie,
    insertMovie,
    updateMovie,
    deleteMovie
}