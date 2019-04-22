const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Schema for how we define a movie object 

const MovieSchema = new Schema({ 
    title: { 
        type: String
    }, 
    year: { 
        type: Number
    }, 
    rating: { 
        type: String //(PG, PG-13, R, NR, MA)
    }, 
    cast: { 
        type: [String], //Hold multiple cast members based on how many the user types in
        default: undefined
    }, 
    qoutes: { 
        type: [String],
        default: undefined
    },
    genres: { 
        type: [String],
        default: undefined
    }, 
    description: { 
        type: String
    }, 
    imageURL: { 
        type: String
    },
    bannerURL: { 
        type: String
    }
})

const Movie = mongoose.model('movie', MovieSchema);

module.exports = Movie;