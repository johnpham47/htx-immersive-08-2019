const express = require("express");
const router = express.Router();

// routes

function loginRedirect( req, res, next) {
    if (req.session.name) {
        res.redirect('/dashboard');
    }
}

function authenticate(req, res, next) {
    // If not logged in, go to login page
    if (req.session.name) {
        next();
    } else {
        res.redirect('/account/login');
    }
    // otherwise, continue
}



// Root URL: /account/
router.get("/", authenticate, (req, res) => {
    res.render("account/account");
});

// URL: /account/dashboard
router.get('/dashboard', authenticate, (req, res) => {
    res.render("account/dashboard", {
        name: req.session.name || "buddy"
        favMovies: req.session.favMovies
    });
});

router.get("/settings", authenticate, (req, res) => {
    res.render("account/settings");
});

// Logout
router.get("/logout", function(req, res) {
    req.session.destroy();
    res.redirect('/account/login');
})

// Add Movies
router.post('/add', authenticate, (req, res) => {
    // save to session
    if (req.session) {
        if (!req.session.favMovies) req.session.favmMovies = []; 
        req.session.favMovies.push({ title: req.body.title});
    }
    // load saved information from session to template
    res.redirect('/account/dashboard');
})
module.export = router;