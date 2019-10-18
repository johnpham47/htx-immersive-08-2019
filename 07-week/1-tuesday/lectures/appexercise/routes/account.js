const express = require("express");
const router = express.Router();

// router.get("/", (req, res) => {
//     console.log(req.session.email);
//     if (req.session)
// })

router.get("/login", function (req, res) {
    res.render("login");
});

router.post("/login", function (req, res) {
    console.log(req.body);
    console.log(req.session)
    if (req.session) {
        console.log("Session is working!")
        req.session.name = req.body.email;
        res.redirect('/account/dashboard');
    }
    else {res.redirect("/login")}
});

router.get("/dashboard", (req, res) => {
    console.log(req.session)
    res.render("dashboard", {
        name: req.session.name || "ya dingus!"
    })
})

router.get("account/mybuilds"), function (req, res) {
    res.render("mybuilds")
}

router.get("/logout", function(req, res) {
    req.session.destroy();
    res.redirect("/login");
})
module.exports = router;