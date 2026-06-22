const express = require('express');
const path = require('path');

const { v4: uuidv4} = require('uuid');

 //uuidv4(); // ⇨ 'b18794e8-5d0d-417c-b361-ba38e78411b4'




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
        id : uuidv4(),
        username: "Amritesh Raj",
        content: "I love Coding"
    },

    {
        id : uuidv4(),
        username: "Shyam",
        content: "I love Coding too"
    },

    {
        id : uuidv4(),
        username: "Ayushi",
        content: "I love watching movies"
    },

    {
        id : uuidv4(),
        username: "Aman Raj",
        content: "I love Coding and watch cricket matches"
    },
]



app.get('/posts', (req, res) => {
   res.render("index.ejs" , {posts});
});



app.post("/posts", (req, res) => {
    let { username, content } = req.body;
    let id = uuidv4();

    posts.push({
        id,
        username,
        content
    });
    res.redirect("/posts");
});



app.get("/posts/news", (req, res) => {
    res.render("news.ejs");
});

app.get("/posts/:id", (req, res) => {
    let { id } = req.params;
    let post = posts.find((post) => post.id === id);

    if (!post) {
        return res.send("Post not found");
    }

    res.render("show.ejs", { post });
});


app.get("/posts/news", (req, res) => {
    res.render("news.ejs");
});


app.patch("/posts/:id", (req, res)=> {
    let { id } = req.params;
    let newContent = req.body.content;
    let post = posts.find((post) => post.id === id);
    post.content = newContent;
    console.log(post);
    res.send("patch request working");
});


app.get("/posts/:id/edit", (req, res) => {
    let { id } = req.params;

    let post = posts.find((post) => post.id === id);

    if (!post) {
        return res.send("Post not found");
    }

    res.render("edit.ejs", { post });
});


app.listen(port, () => {
    console.log(`Server started at port ${port}`);
});