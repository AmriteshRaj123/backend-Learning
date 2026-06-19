# Instagram Clone using Express + EJS

## Project Overview

Ye project Express.js aur EJS ka use karke ek simple Instagram-style profile viewer banata hai.

User browser me URL open karta hai:

```text
http://localhost:8080/cats
```

ya

```text
http://localhost:8080/dogs
```

Express data.json se data read karta hai aur EJS template ke through browser me show karta hai.

---

# What is Express?

Express Node.js ka web framework hai.

Express ki help se hum:

* Server bana sakte hain
* Routes bana sakte hain
* Request handle kar sakte hain
* Response bhej sakte hain
* Templates render kar sakte hain

Example:

```js
app.get("/", (req, res) => {
    res.send("Hello World");
});
```

Jab user "/" route visit karega tab browser me "Hello World" dikhega.

---

# What is EJS?

EJS ka full form:

Embedded JavaScript Templates

EJS ek template engine hai.

Template engine ka kaam:

Dynamic HTML generate karna.

Normal HTML:

```html
<h1>Hello Amritesh</h1>
```

EJS:

```ejs
<h1>Hello <%= name %></h1>
```

Agar:

```js
res.render("home", { name: "Amritesh" });
```

to output hoga:

```html
<h1>Hello Amritesh</h1>
```

---

# Why EJS?

Without EJS:

Har user ke liye alag HTML file banana padega.

With EJS:

Ek hi template se dynamic pages generate kar sakte hain.

Example:

```text
/cats
/dogs
/lion
```

Sab ek hi template use kar sakte hain.

---

# Project Flow

Step 1

User browser me URL enter karta hai:

```text
http://localhost:8080/cats
```

↓

Step 2

Express route hit hota hai.

```js
app.get("/:animal", ...)
```

↓

Step 3

req.params se animal milta hai.

```js
let { animal } = req.params;
```

Output:

```js
animal = "cats"
```

↓

Step 4

data.json se profile nikala jata hai.

```js
let profile = data[animal];
```

↓

Step 5

Profile EJS ko bheja jata hai.

```js
res.render("profile", { profile });
```

↓

Step 6

EJS HTML generate karta hai.

↓

Step 7

Browser final page display karta hai.

---

# Folder Structure

```text
EJS-Project
│
├── index.js
├── data.json
│
├── public
│   └── style.css
│
└── views
    │
    ├── home.ejs
    ├── profile.ejs
    │
    └── includes
        ├── navbar.ejs
        └── footer.ejs
```

---

# What is data.json?

Ye fake database hai.

Example:

```json
{
  "cats": {
    "followers": 25000
  }
}
```

Express data yahin se read karta hai.

Import:

```js
const data = require("./data.json");
```

---

# What is app.set("view engine", "ejs") ?

```js
app.set("view engine", "ejs");
```

Express ko batata hai:

"EJS template engine use karna hai."

Ab:

```js
res.render("home");
```

likhne par Express automatically:

```text
home.ejs
```

file search karega.

---

# What is views Folder?

EJS files rakhne ke liye standard folder.

Example:

```text
views/
    home.ejs
    profile.ejs
```

Express default yahin templates dhoondhta hai.

---

# What is res.render() ?

Render ka matlab:

HTML generate karna.

Example:

```js
res.render("profile");
```

Express:

1. profile.ejs read karega
2. HTML generate karega
3. Browser ko bhej dega

---

# Passing Data to EJS

Server:

```js
res.render("home", {
    name: "Amritesh",
    age: 20
});
```

EJS:

```ejs
<h1><%= name %></h1>
<h2><%= age %></h2>
```

Output:

```html
<h1>Amritesh</h1>
<h2>20</h2>
```

---

# EJS Tags

## 1. Output Tag

```ejs
<%= name %>
```

Value display karta hai.

Example:

```ejs
<h1><%= username %></h1>
```

---

## 2. Logic Tag

```ejs
<% %>
```

Logic execute karta hai.

Example:

```ejs
<% console.log("hello") %>
```

Browser me show nahi hota.

---

## 3. Include Tag

```ejs
<%- include("includes/navbar") %>
```

Dusri EJS file import karta hai.

---

# Condition Statements

Example:

```ejs
<% if(profile.verified){ %>

    <h2>Verified User</h2>

<% } else { %>

    <h2>Not Verified</h2>

<% } %>
```

Agar verified true hai to pehla block chalega.

---

# Loops in EJS

Example:

```ejs
<% for(let post of profile.posts){ %>

    <p><%= post.likes %></p>

<% } %>
```

Har post ko print karega.

---

# What is req.params?

Dynamic URL values.

Route:

```js
app.get("/:animal")
```

URL:

```text
/cats
```

Output:

```js
req.params
```

```js
{
  animal: "cats"
}
```

---

# What is req.query?

Query String read karta hai.

URL:

```text
/search?q=cat
```

Code:

```js
req.query.q
```

Output:

```js
cat
```

---

# Static Files

Static files:

* CSS
* Images
* JavaScript

Serve karne ke liye:

```js
app.use(express.static("public"));
```

Folder:

```text
public
│
└── style.css
```

Use:

```html
<link rel="stylesheet" href="/style.css">
```

---

# Includes

Common code ko reuse karne ke liye.

Example:

Navbar:

```ejs
<h2>Instagram Clone</h2>
```

File:

```text
includes/navbar.ejs
```

Use:

```ejs
<%- include("includes/navbar") %>
```

Benefits:

* Code duplication kam hota hai
* Easy maintenance

---

# Dynamic Route

Route:

```js
app.get("/:animal")
```

Handle karega:

```text
/cats
/dogs
/lion
/tiger
```

Sab same route se.

---

# Complete Learning Summary

Is project me humne seekha:

✓ Express Server

✓ Routing

✓ Dynamic Routing

✓ req.params

✓ req.query

✓ EJS

✓ Template Engine

✓ res.render()

✓ Passing Data

✓ JSON Data

✓ Conditions

✓ Loops

✓ Includes

✓ Static Files

✓ CSS Integration

✓ Dynamic Pages

---

#  Revision Questions

1. What is EJS?

EJS (Embedded JavaScript) is a template engine for Node.js that allows us to create dynamic HTML pages by embedding JavaScript code inside HTML.

Example:

<h1>Welcome <%= username %></h1>
2. What is a Template Engine?

A Template Engine is a tool that generates dynamic HTML by combining templates with data.

Popular template engines:

EJS
Pug
Handlebars
3. Difference between res.send() and res.render()
res.send()	res.render()
Sends plain text, HTML, JSON, etc.	Renders a template file (EJS, Pug, etc.)
No template engine required	Requires a template engine
Direct response to client	Generates dynamic HTML before sending

Example:

res.send("Hello World");
res.render("home", { name: "Amritesh" });
4. What is req.params?

req.params is used to access values from dynamic route parameters.

Example:

app.get("/user/:id", (req, res) => {
    console.log(req.params.id);
});

URL:

/user/101

Output:

101
5. What is req.query?

req.query is used to access values from the query string in the URL.

Example:

app.get("/search", (req, res) => {
    console.log(req.query.q);
});

URL:

/search?q=nodejs

Output:

nodejs
6. How do we serve static files?

We use Express middleware:

app.use(express.static("public"));

Folder structure:

public/
 ├── style.css
 ├── script.js
 └── image.png

Now these files can be accessed directly by the browser.

7. What is the use of Include in EJS?

include is used to reuse common components such as headers, footers, and navigation bars.

Example:

<%- include("partials/header") %>

Benefits:

Code reusability
Easier maintenance
Cleaner templates
8. How do you write a loop in EJS?

Example:

<ul>
    <% fruits.forEach(fruit => { %>
        <li><%= fruit %></li>
    <% }) %>
</ul>

Output:

<ul>
    <li>Apple</li>
    <li>Mango</li>
    <li>Banana</li>
</ul>
9. How do you write conditions in EJS?

Example:

<% if(age >= 18) { %>
    <h2>Adult</h2>
<% } else { %>
    <h2>Minor</h2>
<% } %>
10. What is a Dynamic Route?

A Dynamic Route is a route that accepts variable values through URL parameters.

Example:

app.get("/user/:username", (req, res) => {
    res.send(req.params.username);
});

URL:

/user/amritesh

Output:

amritesh


