const express = require('express');
const router = express.Router();
const movieController = require('../controllers/moviesController');
const Movie = require('../models/Movie');

//Get route for retrieving all of the movies within the database
router.get('/', (err, res) => { 
        Movie.find()
    .sort({Title: 1})
    .then(movies => res.json(movies))
    
});

router.route('/add')
.post(movieController.createMovie);


router.delete('/:id', (req, res) => { 
    Movie.findById(req.params.id)
    .then(movie => movie.remove().then(() => res.json({success: true})))
    .catch(err => res.status(404).json({sucess: false}));
});

module.exports = router;