const express = require('express');
const app = express();
const data = require("./data.json");

app.use(express.json());

app.get("/client", function(req, res){
    res.json(data);
});

app.get("client/:id", function(req, res){
    const { id } = req.params
    const client = data.find(cli => cli.id == id);

    if (!client) return res.status(204).json();

    res.json(client);
});

app.post("/client", function(req, res){
    const { name, email } = req.body;

    resizeTo.jason({name, email});
});

app.put("/client/:id", function(req, res){
    const { id } = req.params
    const client = data.find(cli => cli.id == id);

    if (!client) return res.status(204).json();

    const { name } = req.body;

    client.name = name;

    res.json(client);
});
app.delete("/client/:id", function(req, res){
    const { id } = req.params
    const clientFiltered = data.filter(client => client.id != id);

    res.json(clientFiltered);
});

app.listenerCount(3000, function(){
    console.log("Server is running");
});