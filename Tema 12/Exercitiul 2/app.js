const express = require("express");

const path = require("path");
const app = express();
const hostname = '127.0.0.1';
const port = 3000;


app.set('view engine', 'ejs');
app.use("/static", express.static("./static"));
app.use(express.json());



let Orase = 
[
    {
        nume: "Bucuresti",
        populatie: 1900000,
        capitala: "true"
    }
]


//rute pt paginile web
app.get("/", (req,res) => {
    res.render("index");
});

app.get("/adaugare", (req,res) => {
    res.render("adaugare");
});

app.get("/vizualizare", (req,res) => {
    res.render("vizualizare");
});



//ruta pentru adaugarea unui oras
app.post("/updateData/:nume/:populatie/:capitala", (req,res) => {
    const oras = {
        nume : req.params.nume,
        populatie : parseInt(req.params.populatie),
        capitala : req.params.capitala
    }

    Orase.push(oras);
    res.send();
});



//ruta pentru vizualizare
app.get("/getData", (req,res) => {
    let formData = req.query;
    let oraseBune = []
    
    Orase.forEach(oras =>{
        if ((formData.capitala === '1' && oras.capitala === "true") || (formData.capitala === '0' && oras.capitala === "false")) //test capitala
            if ((formData.marime === "mic" && oras.populatie < 10000) || (formData.marime === "mare" && oras.populatie >= 10000)) //test oras mic/mare
                oraseBune.push(oras);
    })

    res.send(oraseBune);
});





app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});