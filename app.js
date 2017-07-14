'use strict';
const fs = require('fs');

function loadMovies(cb) {
  fs.readFile('./movies.json', 'utf-8', function(err, data) {
    if (err) {
      console.error('There was an error reading the data: ' + err.message);
      return null;
    }
    const movies = JSON.parse(data);
    cb(movies);
  });
}

function handleMovies(movies) {
  console.log(movies);
}

loadMovies(handleMovies);
