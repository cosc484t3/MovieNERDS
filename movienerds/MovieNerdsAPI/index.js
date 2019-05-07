const express = require('express')
const morgan = require('morgan');
var cors = require('cors');

const app = express()

//Fixes CORS issue #FuckCORS
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
    next();
});
app.use(cors());
app.use(morgan('tiny'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(require('./routes/index.routes'))

app.get('/', (req, res) => {
    res.json({ message: 'Welcome to the Movie Nerds API! '})
})

app.listen('5000');