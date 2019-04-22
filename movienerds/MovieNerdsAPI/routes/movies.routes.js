const express = require('express')
const router = express.Router()
const data = require('../models/movies.model')
const Movie = require('../models/movie.model')
const mongoose = require('mongoose');

module.exports = router

mongoose.connect('mongodb://127.0.0.1:27017/movieNerds', { useNewUrlParser: true });
const connection = mongoose.connection;

connection.once('open', function () {
    console.log("MongoDB database connection established successfully!");
});

//get all movies
router.get('/', async (req, res) => {
    await data.getMovies()
        .then(movieData => res.json(movieData))
        .catch(err => {
            if (err.status) {
                res.status(err.status).json({ message: err.message })
            } else {
                res.status(500).json({ message: err.message })
            }
        })
})

//get all movies released during or after 2016
router.get('/recent', async (req, res) => {
    await data.getRecentMovies()
        .then(movieData => res.json(movieData))
        .catch(err => {
            if (err.status) {
                res.status(err.status).json({ message: err.mesage })
            } else {
                res.status(500).json({ message: err.message })
            }
        })
})

//get specific movie by id
router.get('/:id', async (req, res) => {
    const id = req.params.id
    await data.getMovie(id)
        .then(movieData => res.json(movieData))
        .catch(err => {
            if (err.status) {
                res.status(err.status).json({ message: err.message })
            } else {
                res.status(500).json({ message: err.message })
            }
        })
})

//insert a new movie
router.post('/', async (req, res) => {
    await data.insertMovie()
    // Movie.create(req.body)
        .then(newMovie => res.status(201).json({
            message: `The movie ${newMovie.title} has been created`,
            content: newMovie
        }))
        .catch(err => res.status(500).json({ message: err.message }))
})

//update a movie
router.put('/:id', async (req, res) => {
    const id = req.params.id
    // var movie = new Movie(req.body)
    await data.updateMovie(id)
    //       movie.title = req.body.title;
    // movie.year = req.body.year;
    // movie.rating = req.body.rating;
    // movie.cast = req.body.cast;
    // movie.quotes = req.body.quotes;
    // movie.genres = req.body.genres;
    // movie.description = req.body.description;
    // movie.imageURL = req.body.imageURL;
    // movie.bannerURL = req.body.bannerURL;
    // movie.save()
    .then(movie => res.json({
        message: `The movie ${movie.title} has been updated`,
        content: movie
    }))
        .catch(err => {
            if (err.status) {
                res.status(err.status).json({ message: err.message })
            }
            res.status(500).json({ message: err.message })
        })
})

//delete a movie
router.delete('/:id', async (req, res) => {
    const id = req.params.id
    await data.deleteMovie(id)
        .then(movie => res.json({
            message: `The movie ${movie.title} has been successfully deleted`
        }))
        .catch(err => {
            if (err.status) {
                res.status(err.status).json({ message: err.message })
            }
            res.status(500).json({ message: err.message })
        })
})