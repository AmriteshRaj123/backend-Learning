const express = require('express');
const app = express();
const port = 8000;

app.use(express.urlencoded ({extended: true}))
app.use(express.json());

app.get("/register", (req, res)=>{
    let { username, password } = req.query;

    res.send(`standard GET response. welcome ${username}!`);

})

app.post("/register", (req, res)=>{
    let { username, password } = req.body;
    res.send(`standard POST response. welcome ${username}!`);
})

app.listen(port, ()=>{
    console.log(`Server started on port ${port}`);
});
