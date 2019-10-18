const express = require("express");
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;

app.set("view engine", "pug")

app.use(bodyParser.json())

app.post("/movies", (req, res) => {
    console.log(req.body)
    res.send('Ok')
})

app.get("/", function(req, res) {
    res.render("index", {title: "Hey", message: "Hello there!"});
});

app.get("/movies", (req, res) => {
    res.send("Thing")
    console.log(req.query.sort);
    console.log(req.query["sort-by"]);

});

app.get("/movies/:genre", (req, res) => {
res.send(`${req.params.genre} movies`);
});

// Query Selectors
// url: /movies?sort=desc&sort-by=year
// url: /movies?sort=asc&sort-by=title
// url: /movies?sort=asc&sort-by=id
// url: /movies?sort=asc&sort-by=genre

app.get("/movies/year/:year", (req, res) => {
res.send(`${req.params.year} movies`);
});

app.get("/movies/action", (req, res) => {
res.send("Action Movies");
});

app.get("/movies/horror", (req, res) => {
res.send("Horror Movies");
});


app.listen(PORT, () =>{
   console.log(`Express application is running on port ${PORT}`);
});


