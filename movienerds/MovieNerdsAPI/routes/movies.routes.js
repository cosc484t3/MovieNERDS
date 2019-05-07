const express = require('express')
const router = express.Router()
const data = require('../models/movies.model')
const Movie = require('../models/movie.model')
const mongoose = require('mongoose');
const db = require('../../Backend/config/connection').mongoURI;
const movieController = require('../../Backend/controllers/moviesController');
module.exports = router

// mongoose.connect('mongodb://127.0.0.1:27017/movieNerds', { useNewUrlParser: true });
// const connection = mongoose.connection;

// connection.once('open', function () {
//     console.log("MongoDB database connection established successfully!");
// });
mongoose
    .connect(db, { useNewUrlParser: true })
    .then(() => console.log("MongoDB Connected...."))
    .catch(err => console.log(err));

//get all movies
router.get('/', async (req, res) => {
    await Movie.find()
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
    await Movie.find({year: {$gt: 2015}})
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
    Movie.find({id: id})
    .then(movie => res.json(movie))
    .catch(err => {
        if(err.status){
            res.status(err.status).json({ message: err.message })
        } else {
            res.status(500).json({ message: err.message })
        }
    })
})

//insert a new movie
router.post('/add', async (req, res) => {
    let newMovie = new Movie(req.body);
    newMovie.save((err, newMovie) => {
        if (err) {
            res.status(500).send(err);
        }
        res.status(200).json({
            message: `The movie ${newMovie.title} has been created`,
            content: newMovie
        });
    });
})

//update a movie
router.put('/update/:id', async (req, res) => {
    const id = req.params.id
    Movie.find({id: id}, function (err, movie) {
        if (!movie) {
            res.status(404).send('movie was not found');
        } else {
            movie.id = req.body.id;
            movie.title = req.body.title;
            movie.year = req.body.year;
            movie.rating = req.body.rating;
            movie.cast = req.body.cast;
            movie.quotes = req.body.quotes;
            movie.genres = req.body.genres;
            movie.description = req.body.description;
            movie.imageURL = req.body.imageURL;
            movie.bannerURL = req.body.bannerURL;
            movie.save()
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
        }

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