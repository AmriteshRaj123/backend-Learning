// Import the Express framework
const express = require('express');

// Create an Express application
const app = express();

// Define the port number on which the server will run
const port = 8000;

// Middleware to parse form data
// Example:
// username=amritesh&password=1234
app.use(express.urlencoded({ extended: true }));

// Middleware to parse JSON data
// Example:
// {
//   "username": "amritesh",
//   "password": "1234"
// }
app.use(express.json());


// ======================
// GET Route
// ======================

// Handles GET requests to /register
// Example URL:
// http://localhost:8000/register?username=amritesh&password=1234

app.get("/register", (req, res) => {

    // Extract username and password from query parameters
    // req.query contains data from URL query strings
    let { username, password } = req.query;

    // Send response back to the client
    res.send(`standard GET response. welcome ${username}!`);

});


// ======================
// POST Route
// ======================

// Handles POST requests to /register
// Data is sent in the request body

app.post("/register", (req, res) => {

    // Extract username and password from request body
    // req.body contains data sent by Postman, forms, or APIs
    let { username, password } = req.body;

    // Send response back to the client
    res.send(`standard POST response. welcome ${username}!`);

});


// ======================
// Start Server
// ======================

// Listen for incoming requests on port 8000
app.listen(port, () => {

    // This message appears in terminal when server starts
    console.log(`Server started on port ${port}`);

});