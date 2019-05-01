const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let MovieSchema = new Schema({
    id: {
        type: Number,
        required: 'Movie must have an id'
    },
    title: { 
        type: String,
        required: 'Movie must have a title'
    }, 
    year: { 
        type: Number
    },
    rating: { 
        type: String
    }, 
    cast: { 
        type: [String],
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
    }
});

module.exports = mongoose.model('movies', MovieSchema);