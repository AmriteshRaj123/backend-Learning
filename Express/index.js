const express = require('express');
const app = express();

let port = 3000;

app.get('/', (req, res) => {
    res.send('hello , i am amritesh');
});

app.get("/:username/:id", (req, res)=>{
    console.log(req.params);
    // res.send("hello , i am amritesh");
    res.send(`welocome to the page of @${req.params.username} `)
})


app.listen(port, () => {
    console.log(`app is listening on port ${port}`);
});

// Query Strings in Express.js

//Query String URL ke through extra data bhejne ka tarika hai.

app.get('/search', (req, res) => {
    console.log(req.query);
    res.send('Search Route');
});

// Destructuring Query Parameters

app.get('/search', (req, res) => {
    let { q } = req.query;

    res.send(`You searched for: ${q}`);
});

// complete code 

// const express = require('express'); // Express package import kiya
// const app = express(); // Express application create ki

// // Search route
// app.get('/search', (req, res) => {

//     // URL se query parameter nikal rahe hain
//     // Example: /search?q=iphone
//     let { q } = req.query;

//     // Agar user ne query nahi di
//     // Example: /search
//     if (!q) {
//         return res.send('Nothing searched');
//     }

//     // Agar query mili to response bhejo
//     // Example: q = iphone
//     res.send(`Search results for: ${q}`);
// });

// // Server start kar rahe hain port 3000 par
// app.listen(3000, () => {
//     console.log('Server started');
// });



// Routing in Express


// app.get('/', (req, res) => {
//     res.send('Home Page');
// });

// app.get('/about', (req, res) => {
//     res.send('About Page');
// });

// app.get('/contact', (req, res) => {
//     res.send('Contact Page');
// });

// app.listen(3000, () => {
//     console.log('Server started');
// });







