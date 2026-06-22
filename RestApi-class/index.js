const express = require('express');
const path = require('path');
const { v4: uuidv4 } = require('uuid');
const methodOverride = require('method-override'); // Method override import kiya

const app = express();
const port = 3000;

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method')); // Query string ke liye middleware setup
app.use(express.static(path.join(__dirname, "public")));

// Template Engine Setup
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Dummy Data
let posts = [
    { id: uuidv4(), username: "Amritesh Raj", content: "I love Coding" },
    { id: uuidv4(), username: "Shyam", content: "I love Coding too" },
    { id: uuidv4(), username: "Ayushi", content: "I love watching movies" },
    { id: uuidv4(), username: "Aman Raj", content: "I love Coding and watch cricket matches" }
];

// 1. INDEX ROUTE: Saare posts dekhne ke liye
app.get('/posts', (req, res) => {
   res.render("index.ejs", { posts });
});

// 2. NEW ROUTE: Naya post banane ka form dikhane ke liye
app.get("/posts/news", (req, res) => {
    res.render("news.ejs");
});

// 3. CREATE ROUTE: Naye post ko database/array mein save karne ke liye
app.post("/posts", (req, res) => {
    let { username, content } = req.body;
    let id = uuidv4();
    posts.push({ id, username, content });
    res.redirect("/posts");
});

// 4. SHOW ROUTE: Ek specific post ko poori detail mein dekhne ke liye
app.get("/posts/:id", (req, res) => {
    let { id } = req.params;
    let post = posts.find((p) => p.id === id);
    if (!post) return res.send("Post not found");
    res.render("show.ejs", { post });
});

// 5. EDIT ROUTE: Edit karne ka form dikhane ke liye
app.get("/posts/:id/edit", (req, res) => {
    let { id } = req.params;
    let post = posts.find((p) => p.id === id);
    if (!post) return res.send("Post not found");
    res.render("edit.ejs", { post });
});

// 6. UPDATE ROUTE: Post ko actual mein update karne ke liye
app.patch("/posts/:id", (req, res) => {
    let { id } = req.params;
    let newContent = req.body.content;
    let post = posts.find((p) => p.id === id);
    if (post) {
        post.content = newContent;
    }
    res.redirect("/posts"); // Update hone ke baad main page par bhej diya
});

// 7. DESTROY ROUTE: Post ko delete karne ke liye
app.delete("/posts/:id", (req, res) => {
    let { id } = req.params;
    posts = posts.filter((p) => p.id !== id); // Uss id ko chhodkar baaki saari posts rakh li
    res.redirect("/posts");
});

app.listen(port, () => {
    console.log(`Server started at port ${port}`);
});