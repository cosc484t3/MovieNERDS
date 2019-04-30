// const fileName = '../data/movies-list.json';
const path = require('path');
const fileName = path.resolve(__dirname, '../data/movies-list.json');
let MovieData = require(fileName)
const helper = require('../helpers/helper')
const Movie = require('../../Backend/models/Movie');
const moviesController = require('../../Backend/controllers/moviesController');

function getMovies(){
    console.log(Movie)
    return new Promise((resolve, reject) => {
        if(Movie.length === 0){
            reject({
                message: 'No movies available',
                status: 202
            })
        }
        resolve(Movie)
    })
}

function getRecentMovies(){
    return new Promise((resolve, reject) => {
        const minRecentYear = 2016
        console.log("Movie: ", Movie)
        let recentMovies = Movie.movies.filter(movie => movie.year >= minRecentYear)
        if(recentMovies.length === 0){
            reject({
                message: 'No recent movies available',
                status: 202
            })
        }
        resolve(recentMovies)
    })
}
function getMovie(){
    return new Promise((resolve, reject) => {
        helper.mustBeInArray(Movie.movies)
        .then(movie => resolve(movie))
        .catch(err => reject(err))
    })
}

function insertMovie(newMovie){
    return new Promise((resolve, reject) => {
        const id = { id: helper.getNewId(Movie.movies) }
        newMovie = {...id, ...newMovie}
        Movie.movies.push(newMovie)
        helper.incrementMovieCount(Movie)
        moviesController.createMovie
        resolve(newMovie)
    })
}

function updateMovie(id, newMovie){
    return new Promise((resolve, reject) => {
        helper.mustBeInArray(Movie.movies, id)
        .then(movie => {
            const index = Movie.movies.findIndex(m => m.id == movie.id)
            id = { id: movie.id }
            Movie.movies[index] = { ...id, ...newMovie }
            moviesController.updateMovie
            resolve(Movie.movies[index])
        })
        .catch(err => reject(err))
    })
}

function deleteMovie(id){
    return new Promise((resolve, reject) => {
        helper.mustBeInArray(id)
        .then(() => {
            Movie.movies = Movie.movies.filter(m => m.id !== id)
            helper.writeJSONFile(fileName, Movie)
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