
$(document).ready(function () {
    $('#search-term').submit(function (event) {
        event.preventDefault();
        // Replace var movieName with var searchTerm to merge APIs
        var searchTerm = $('#query').val(); 
        var movieURL = "https://www.omdbapi.com/?apikey=dcf79638&t=" + searchTerm;
        // Searches for movie data by title
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
            movieHTML += '<li>';
            movieHTML += '<img ';
            movieHTML += 'src="' + data.Poster + '" ';
            movieHTML += 'alt="' + data.Title + '" >';
            movieHTML += '</li>';
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

