const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const movies = require('./routes/movies');

const app = express();

app.use(bodyParser.json());


const db = require('./config/connection').mongoURI;

mongoose
    .connect(db, { useNewUrlParser: true })
    .then(() => console.log("MongoDB Connected...."))
    .catch(err => console.log(err));



app.use('/movies', movies);

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));