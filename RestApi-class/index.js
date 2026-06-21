const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

// Parse form data
app.use(express.urlencoded({ extended: true }));

// Serve static files
app.use(express.static(path.join(__dirname, "public")));

// Set EJS as template engine
app.set('view engine', 'ejs');

// Set views folder
app.set('views', path.join(__dirname, 'views'));


let posts = [
    {
        username: "Amritesh Raj",
        content: "I love Coding"
    },

    {
        username: "Shyam",
        content: "I love Coding too"
    },

    {
        username: "Ayushi",
        content: "I love watching movies"
    },

    {
        username: "Aman Raj",
        content: "I love Coding and watch cricket matches"
    },
]



app.get('/posts', (req, res) => {
   res.render("index.ejs" , {posts});
});

// app.post('/posts', (req, res) =>{
//     let { username, content} = req.body;

//     posts.push({ username, content});
//     res.send("post request received");
//     res.redirect("/posts");
//      res.redirect("/posts");
// })

app.post("/posts", (req, res) => {
    let { username, content } = req.body;

    posts.push({
        username,
        content
    });

    res.redirect("/posts");
});

app.get("/posts/news", (req, res) => {
    res.render("news.ejs");
});

app.listen(port, () => {
    console.log(`Server started at port ${port}`);
});