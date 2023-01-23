

const express = require("express");
const path = require("path");
const homepageRouter = express.Router();

// Define home page routes
homepageRouter.get("/", (req, res) => {
    console.log(`Presenting homepage 1`);
    res.sendFile(path.join(__dirname,"../../views", "home.html"));
});

homepageRouter.get("/home", (req, res) => {
    console.log(`Presenting homepage 2`);
    res.sendFile(path.join(__dirname, "../views", "home.html"));
});

module.exports = homepageRouter;