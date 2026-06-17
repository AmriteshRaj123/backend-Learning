const express = require("express");
const path = require("path");

const app = express();
const port = 8080;

// JSON Data Import
const data = require("./data.json");

// EJS Setup
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Static Files Setup (CSS, Images)
app.use(express.static(path.join(__dirname, "public")));


// Home Route
app.get("/", (req, res) => {
    res.render("home");
});


// Dynamic Instagram Route
app.get("/:animal", (req, res) => {

    // URL se animal nikala
    let { animal } = req.params;

    // JSON se data nikala
    let profile = data[animal];

    // Agar profile exist nahi karti
    if (!profile) {
        return res.send("Profile Not Found");
    }

    // Data EJS ko bheja
    res.render("profile", { profile });
});


// Server Start
app.listen(port, () => {
    console.log(`Server Started on ${port}`);
});