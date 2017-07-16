(function () {

  const attributes = ["Year", "Language", "Genre", "Rated", "imdbRating"];

  function loadMovies(cb) {
    //This function keeps track of changes to the xhr request
    function processRequest() {
      if (xhr.readyState === 4) {
        cb(JSON.parse(xhr.response));
      }
    }

    const requestURL = 'http://localhost:3000/movies';
    const xhr = new XMLHttpRequest();

    //Build an XHR request and then send it.
    //Read this for more info: https://www.kirupa.com/html5/making_http_requests_js.htm
    xhr.open('GET', requestURL, true);
    xhr.send();
    xhr.onreadystatechange = processRequest;
  }

  function sortByImdbRating(movies) {
    function compareFunction(a, b) {
      if (a.imdbRating === b.imdbRating) return 0;
      if (a.imdbRating > b.imdbRating) return -1;
      return 1;
    }
    movies.sort(compareFunction);
    return movies;
  }
  function renderAttribute(ul, text) {
    const li = document.createElement('li');
    ul.appendChild(li);
    const textNode = document.createTextNode(text);
    li.appendChild(textNode);
  }

  function renderImage(ul, prop) {
    const img = document.createElement('img');
    img.setAttribute('src', prop);
    img.setAttribute('width', 150);
    const li = document.createElement('li');
    li.appendChild(img);
    ul.appendChild(li);
  }

  function renderMovie(ul, movie) {
    const li = document.createElement('li');
    ul.appendChild(li);
    const title = document.createTextNode(movie.Title);
    li.appendChild(title);
    const ul2 = document.createElement('ul');
    li.appendChild(ul2);

    for (const attr of attributes) {
      const text = attr + ": " + movie[attr]
      renderAttribute(ul2, text);
    }

    renderImage(ul2, movie.Poster);
  }

  // Year, Language, Genre, Poster, Rating
  function handleMovies(movies) {
    movies = sortByImdbRating(movies);
    movies = movies.slice(0, 3);
    const ul = document.getElementById('movies');
    for (let movie of movies) {
      renderMovie(ul, movie);
    }
  }

  loadMovies(handleMovies);

})();
