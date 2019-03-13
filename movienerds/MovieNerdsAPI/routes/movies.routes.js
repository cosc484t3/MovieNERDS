const express = require('express')
const router = express.Router()
const data = require('../models/movies.model')

module.exports = router

//get all movies
router.get('/', async(req, res) => {
    await data.getMovies()
    .then(movieData => res.json(movieData))
    .catch(err => {
        if(err.status){
            res.status(err.status).json({ message: err.message })
        } else {
            res.status(500).json({ message: err.message })
        }
    })
})

//get all movies released during or after 2016
router.get('/recent', async(req, res) => {
    await data.getRecentMovies()
    .then(movieData => res.json(movieData))
    .catch(err => {
        if(err.status){
            res.status(err.status).json({ message: err.mesage })
        } else {
            res.status(500).json({ message: err.message })
        }
    })
})

//get specific movie by id
router.get('/:id', async(req, res) => {
    const id = req.params.id
    await data.getMovie(id)
    .then(movieData => res.json(movieData))
    .catch(err => {
        if(err.status){
            res.status(err.status).json({ message: err.message })
        } else {
            res.status(500).json({ message: err.message })
        }
    })
})

//insert a new movie
router.post('/', async(req, res) => {
    await data.insertMovie()
    .then(newMovie => res.status(201).json({
        message: `The movie ${newMovie.title} has been created`,
        content: newMovie
    }))
    .catch(err => res.status(500).json({ message: err.message }))
})

//update a movie
router.put('/:id', async(req, res) => {
    const id = req.params.id

    await data.updateMovie(id, req.body)
    .then(movie => res.json({
        message: `The movie ${movie.title} has been updated`,
        content: movie
    }))
    .catch(err => {
        if(err.status){
            res.status(err.status).json({ message: err.message })
        }
        res.status(500).json({ message: err.message })
    })
})

//delete a movie
router.delete('/:id', async(req, res) => {
    const id = req.params.id
    await data.deleteMovie(id)
    .then(movie => res.json({
        message: `The movie ${movie.title} has been successfully deleted`
    }))
    .catch(err => {
        if(err.status){
            res.status(err.status).json({ message: err.message })
        }
        res.status(500).json({ message: err.message })
    })
})