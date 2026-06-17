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

# Interview Revision Questions

1. EJS kya hai?
2. Template Engine kya hota hai?
3. res.send aur res.render me difference?
4. req.params kya hai?
5. req.query kya hai?
6. Static files kaise serve karte hain?
7. Include ka use kya hai?
8. EJS me loop kaise likhte hain?
9. EJS me condition kaise likhte hain?
10. Dynamic route kya hota hai?

