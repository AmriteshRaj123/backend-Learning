const express = require("express");
const path = require("path");

const app = express();
const port = 8080;

// Import JSON data
const data = require("./data.json");

// EJS Setup
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));


// Home Route
app.get("/", (req, res) => {
    res.render("home", {
        name: "Amritesh",
        age: 20
    });
});


// User Profile Route
app.get("/user", (req, res) => {

    const user = {
        username: "amritesh",
        followers: 500,
        following: 200
    };

    res.render("profile", user);
});


// Roll Dice Route
app.get("/rolldice", (req, res) => {

    let diceVal = Math.floor(Math.random() * 6) + 1;

    res.render("rolldice", { diceVal });
});


// Instagram Dynamic Route
app.get("/:animal", (req, res) => {

    let { animal } = req.params;

    let instaData = data[animal];

    if (!instaData) {
        return res.send("Profile not found");
    }

    res.render("instagram", { instaData });
});


// Start Server
app.listen(port, () => {
    console.log(`Server started at port ${port}`);
});