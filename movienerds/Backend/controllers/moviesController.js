const Movie = require('../models/Movie');

exports.createMovie = (req, res) => { 
    let newMovie = new Movie(req.body);
    newMovie.save((err, movie)=> { 
        if(err) { 
            res.status(500).send(err);
        }
        res.status(200).json(movie);
    });
};