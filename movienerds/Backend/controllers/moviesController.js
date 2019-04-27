const Movie = require('../models/Movie');

exports.createMovie = (req, res) => { 
    let newMovie = new Movie(req.body);
    newMovie.save((err, movie)=> { 
        if(err) { 
            res.status(500).send(err);
        }
        res.status(200).json({
            message: `The movie ${newMovie.title} has been created`,
            content: newMovie
        });
    });
};

exports.updateMovie = (req, res) => { 
    const updateMovie  = req.body;
    Movie.findOneAndUpdate((err, data)=> { 
        if(err) return res.json({sucess: false, error:err});
        return res.json({sucess: true, Movie: updateMovie});
    });
};