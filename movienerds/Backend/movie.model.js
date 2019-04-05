const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Movie = new Schema({
    movie_title: { 
        type: String
    }, 
    movie_year: { 
        type: Number
    },
    movie_rating: { 
        type: String
    }, 
    movie_cast: { 
        type: String
    }, 
    movie_quotes: { 
        type: String
    },
    movie_genre: { 
        type: String
    },
    movie_description: { 
        type: String
    }
});

module.exports = mongoose.model('Movie', Movie);