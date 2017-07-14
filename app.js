(function () {

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

  function callback(movies) {
    // add code here create HTML from movie data
  }

  loadMovies(callback);

})();
