const express = require("express");
const models = require("./models");
const app = express();
const bodyParser = require('body-parser');
const session = require("express-session");
const accountRouter = require("./routes/account");

app.use(express.static("public"));
app.set("view engine", "pug");
app.use(bodyParser.urlencoded({extended: false}));
app.use("/account", accountRouter)

app.get('/', function (req, res) {
    res.render("index");
})

app.get("/account/login", function (req, res) {
    res.render("login");
})

app.listen(3000);