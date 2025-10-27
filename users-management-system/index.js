const express = require("express");
const cors = require("cors")
const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json())

app.get("/", (req, res)=>{
    res.send("Mal sent done")
});



const users = [
    {id: 1, name:"sabana", roll: 85},
    {id: 2, name:"dibabana", roll: 55},
    {id: 3, name:"khabana", roll: 855},
]

app.get('/users', (req, res)=>{
    res.send(users)
})

app.post("/users", (req, res)=>{
    console.log("Post method calling", req.body);
    const newUser = req.body;
    newUser.id = users.length + 1;
    users.push(newUser);
    res.send(newUser)
})

app.listen(port, ()=>{
    console.log(`This is server port : ${port}`)
})