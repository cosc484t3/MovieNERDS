const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Schema for how we define a movie object 

const MovieSchema = new Schema({ 
    id: { 
        type: Number
    },
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
    quotes: { 
        type: [String],
        default: undefined
    },
    genres: { 
        type: [String],
        default: undefined
    }, 
    synopsis: { 
        type: String
    }, 
    imageURL: { 
        type: String
    },
    bannerURL: { 
        type: String
    },
    comments:{ 
        type: [String],
        default: undefined
    },
    characters:{ 
        type:[String],
        default: undefined
    },
    ratings: {
        type:[Number],
        commentID: {type: Number}
    }
})

const Movie = mongoose.model('movies', MovieSchema);

module.exports = Movie;