const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Schema for how we define a movie object 
var commentsBox = new Schema({
    username:{type: String},
        text: {type: String}
})
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
    comments:[commentsBox]
    ,
    characters:{ 
        type:[String],
        default: undefined
    },
    ratings: {
        type:[Number],
        commentID: {type: Number}
    },
    characters: {
        type: [String],
        name: {type: String},
        imageURL: {type: String}
    }
})

const Movie = mongoose.model('movies', MovieSchema);

module.exports = Movie;