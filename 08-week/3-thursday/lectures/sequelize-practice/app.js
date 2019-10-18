const express = require("express");
const models = require("./models");
const app = express();
const bodyParser = require('body-parser');

app.use(express.static("public"));
app.set("view engine", "pug");
app.use(bodyParser.urlencoded({extended: false}));

app.get("/", async (req, res) => {
    res.render("index");
});

app.get('/classes', async (req, res) => {
    let data = {};
    data.classes = await models.Classes.findAll()
    res.render("classes", data);
})


app.get("/classes/:className", async (req, res) => {
    let data = {};
    data.classes = await models.Classes.findOne({
        where: {className: req.params.className}
    });
    res.render("class", data);
})
app.listen(3000);