const express = require('express');
const bodyparser = require('body-parser');
const { randomBytes } = require('crypto'); 
const axios = require('axios');




const app = express();
const posts = {};
const cors = require('cors');
app.use(bodyparser.json())
app.use(cors())

app.get("/posts", (req, res) => {
    res.send(posts);
})

app.post("/posts", async (req, res) => {
    const {title} = req.body;
    const id = randomBytes(4).toString("hex");
    posts[id] = {id, title};

    await axios.post('http://localhost:4005/events', {type : "PostCreated", data : {id, title}})

    res.status(201).json(posts[id]);
})


app.post("/events", (req, res) => {
    console.log("Received Event", req.body.type);
    res.send({})
})


app.listen(4000, ()=> {
    console.log("Listening port:4000");
})