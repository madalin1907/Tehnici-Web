const express = require("express");
const path = require("path");
const internal = require("stream");
const app = express();

const hostname = '127.0.0.1';
const port = 3000;


let fructe = ["mere", "pere", "banane", "portocale", "gutui"];


app.get("/", (req,res) => {
    res.send(fructe);
});


app.post("/addProduct/:productName", (req, res) => {
    const name = req.params.productName;
    fructe.push(name)
    res.send(fructe);
});


app.delete("/deleteProduct/:productID", (req, res) => {
    const id = parseInt(req.params.productID);
    const new_list = []
    if (id < fructe.length){
        for (let i = 0; i < fructe.length; i++)
            if (id !== i)
                new_list.push(fructe[i])

        fructe = new_list
        res.send(fructe);
    }
    else
        res.send("Indicele este invalid.")
});


app.delete("/deleteList", (req, res) => {
    fructe = []
    res.send(fructe)
});


app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});