const express = require("express");
const path = require("path");

const app = express();
const port = 8080;

// EJS setup
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Route
app.get("/", (req, res) => {
    res.render("home", {
        name: "Amritesh",
        age: 20
    });
});

app.listen(port, () => {
    console.log(`Server started at port ${port}`);
});