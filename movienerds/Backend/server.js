const express = require('express');
const app = express(); //creates new express instance
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const PORT = 3200;
const movieRoutes = express.Router();

let Movie = require('./movie.model');

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://127.0.0.1:27017/movieNerds',{useNewUrlParser: true});
const connection = mongoose.connection;

connection.once('open', function() { 
    console.log("MongoDB database connection established successfully!");
});

movieRoutes.route('/').get(function(req, res) { 
    Movie.find(function(err, movie) { 
        if(err) { 
            console.log(err);
        } else { 
            res.json(movie)
        }
    });
});

movieRoutes.route('/:id').get(function(req, res) { 
    let id = req.params.id
    Movie.findById(id, function(err, movie) { 
        res.json(movie);
    });
});

movieRoutes.route('/add').post(function(req, res) { 
    let movie = new Movie(req.body);
    movie.save()
        .then(movie => { 
            res.status(200).json({'movie': 'movie added successfully'})
        })
        .catch(err => { 
            res.status(400).json.send('adding new movie failed')
        });
});

movieRoutes.route('/update/:id').post(function(req, res){ 
    Movie.findById(req.params.id, function(err, movie) { 
        if(!movie) { 
            res.status(404).send('data is not found');
        } else { 
            movie.movie_title = req.body.movie_title;
            movie.movie_year = req.body.movie_year;
            movie.movie_rating = req.body.movie_rating;
            movie.movie_cast = req.body.movie_cast;
            movie.movie_quotes = req.body.movie_quotes;
            movie.movie_genre = req.body.movie_genre;
            movie.movie_description = req.body.movie_description;

            movie.save().then(movie => { 
                res.json('Movie updated');
            })
            .catch(err => { 
                res.status(400).send("Update not possible");
            });
        }
    })
})

app.use('/movie', movieRoutes);

app.listen(PORT, function() { 
    console.log("Server is running of Port: " + PORT);
});