$(document).ready(function () {
    $('#search-term').submit(function (event) {
        event.preventDefault();
        var movieName = $('#query').val();
        var movieURL = "https://www.omdbapi.com/?apikey=dcf79638&t=" + movieName;
        var movieOptions = {
            s: "",
        };

        function displayMovies(data) {
            console.log(data);
            console.log(data.Title);
            console.log(data.Genre);
            console.log(data.Runtime);
            console.log(data.Plot);
            var movieHTML = '<ul>';
            movieHTML += '<li>' + data.Title + "</li>";
            movieHTML += '<li>' + data.Genre + "</li>";
            movieHTML += '<li>' + data.Runtime + "</li>";
            movieHTML += '<li>' + data.Plot + "</li>";
            movieHTML += '</ul>'


            $('#search-results').html(movieHTML);
        }
    
    $.getJSON(movieURL, movieOptions, displayMovies);
    
    });
});

