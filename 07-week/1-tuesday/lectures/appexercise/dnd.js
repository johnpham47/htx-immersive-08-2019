const express = require("express");
const bodyParser = require('body-parser');
const session = require("express-session");
const database = require("./database");
const accountRouter = require("./routes/account");
const app = express();
const PORT = 3000;

// app.get("/", async function(req, res) {
//     try {
//         let jokes = await database.getJokes();
//         console.log(jokes);
//         res.json(jokes);
//     } catch(e) {
//         console.error(e)
//         res.send(e)
//     }
// })

app.use(express.static("public"));

app.use(
    session({
        secret: "La li lu le lo",
        resave: false,
        saveUninitialized: true
    })
);

app.get("/classes", async function(req, res) {
    let data = {};
    data.classes = await database.getClasses();
    res.render("classes", data);
})

app.set("view engine", "pug");

app.use(bodyParser.urlencoded({extended: false}));

app.use("/account", accountRouter);

app.get("/", (req, res) => {
    res.render("index")
})

app.get("/classes", (req, res) => {
    res.render("classes")
})

app.get("/login", function (req, res) {
    res.render("login");
})

app.get("/account", function (req, res) {
    res.render("account")
})

// app.get("/account/dashboard", function (req, res) {
//     res.render("dashboard");
// })

app.get("/account/mybuilds", function(req, res) {
    res.render("mybuilds");
})

app.post("/login", function (req, res) {
    console.log(req.body);
    // check if user's email and password are valid
    // save login state for browser
    res.redirect("account/dashboard");
})


// app.post("/classes/roles", (req, res) => {
//     console.log(req.body)
//     res.send("Checks out")
    
// })

// app.post("/classes/roles/martial/barbarian", (req, res) => {
//     console.log(req.body)
//     res.send("Success!")
// })


// app.get("/classes", (req, res) => {
//     res.json(
//         {"roles": ["Martial", "Caster", "Utility"]}
    // )     
    
//     console.log(req.query.sort);
//     console.log(req.query["sort-by"]);

// });

// app.get("/classes/roles", (req, res) => {
//     res.json(
//         {"Martial": ["Barbarian", "Fighter", "Monk", "Paladin", "Ranger"],
//         "Caster": ["Bard", "Cleric", "Druid", "Sorcerer", "Wizard"],
//         "Utility": ["Bard", "Rogue"]}
//     )
//     });

// app.get("/classes/roles/martial", (req, res) => {
//     res.json(
//         {"Martial": ["Barbarian", "Fighter", "Monk", "Paladin", "Ranger"]}
//     )
//     res.send(`${req.params.role}`);
// });

// app.get("/classes/roles/martial/barbarian", (req, res) => {
//     res.json(
//         {
//         "Hit Die": "d12",
//         "BAB": "Full",
//         "Skills Ranks Per Level": "4 + Int modifier",
//         "Fortitude": "Good",
//         "Reflex": "Bad",
//         "Will": "Bad",
//         "Abilities": ["Rage", "Damage Reduction", "Rage Powers"]
// })
// });

// app.get("/classes/roles/martial/barbarian/rage", (req, res) => {
//     res.json(
//         {
//         "Strength": "+4 morale bonus",
//         "Constitution": "+4 morale bonus",
//         "Will": "+2 morale bonus",
//         "Armor Class": "-2 penalty",
//         "Rounds Per Day": "4 + Con modifier + (2 x (level -1))"
//         }
//     )
// })

// app.get("/classes/roles/martial/barbarian/damage-reduction", (req, res) => {
//     res.json({
//         "Lvl 7": "Damage Reduction 1/-",
//         "Lvl 10": "Damage Reduction 2/-",
//         "Level 13": "Damage Reduction 3/-",
//         "Level 16": "Damage Reduction 4/-",
//         "Level 19": "Damage Reduction 5/-"
//     }
//     )
// });
// app.get("/classes/:classes/levels" , (req, res) => {

// })
// Query Selectors
// url: /movies?sort=desc&sort-by=year
// url: /movies?sort=asc&sort-by=title
// url: /movies?sort=asc&sort-by=id
// url: /movies?sort=asc&sort-by=genre

// app.get("/movies/year/:year", (req, res) => {
// res.send(`${req.params.year} movies`);
// });

// app.get("/movies/action", (req, res) => {
// res.send("Action Movies");
// });

// app.get("/movies/horror", (req, res) => {
// res.send("Horror Movies");
// });


app.listen(PORT, () =>{
   console.log(`Express application is running on port ${PORT}`);
});


