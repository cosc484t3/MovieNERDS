/* const fs = require('fs')

function getNewId(array){
    if(array.length > 0){
        return array[array.length - 1].id + 1
    }
    return 1;
}

function incrementMovieCount(Movie){
    Movie.count += 1
    return Movie.count;
}

function mustBeInArray(array, id){
    return new Promise((resolve, reject) => {
        const row = array.find(r => r.id == id)
        if(!row){
            reject({
                message: 'ID was not found in the array of movies.',
                status: 404
            })
        }
        resolve(row)
    })
}

function writeJSONFile(fileName, content){
    fs.writeFileSync(fileName, JSON.stringify(content), 'utf8',
    err => {
        if(err){
            console.log('Error when writing to the JSON file: ', err)
        }
    })
}

module.exports = {
    getNewId,
    incrementMovieCount,
    mustBeInArray,
    writeJSONFile
} */