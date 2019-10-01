
$.ajax({
    type: "GET",
    url: "http://img.omdbapi.com/?apikey=dcf79638&t=Inception;",
    dataType: "JSON",
    success: function(response) {
        console.log(response);
        showMovieDetails(response.Title, response.Released);
    },
    error: function(error) {
        console.log("Error: " + error);
    }
})


$.ajax({
    type: "GET",
    url: "http://www.omdbapi.com/?apikey=dcf79638&t=Inception;",
    dataType: "JSON",
    success: function(response) {
        console.log(response);
        showMovieDetails(response.Title, response.Released);
    },
    error: function(error) {
        console.log("Error: " + error);
    }
})


function showMoviePoster()

function showMovieDetails(title, released) {
    var heading = $("<h2/>").text(title);
    $("body").append(heading);
    var released = $("<h3/>").text(released);
    $("body").append(released);
}