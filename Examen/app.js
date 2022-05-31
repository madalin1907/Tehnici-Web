// libarii de instalat: express (npm install express) si, eventual, nodemon (npm install nodemon)

const express = require("express");
const path = require("path");
const app = express();
const hostname = '127.0.0.1';
const port = 3000;


app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "/p4.html"));
});



app.get("/verify/:input", (req,res) => {
    const inputText = req.params.input;

    if (!(/^(\d+(?:,\d+)*)$/g.test(inputText))){ // daca inputul introdus nu este valid
        res.send("Imposibil.");
        return;
    }
    
    const numbers = inputText.split(",")
    const N = numbers.length;

    var frequencies = Array(N + 1).fill(0);
    
    for (let i = 0; i < N; ++i) {
        if (numbers[i] < 1 || numbers[i] > N){ 
            res.send(`Sirul introdus nu este o permutare a lui ${N}.`);
            return;
        } // daca inputul introdus este valid, dar un numar din lista introdusa nu este valid (este <1 sau >N)

        if (frequencies[numbers[i]] !== 0){ 
            res.send(`Sirul introdus nu este o permutare a lui ${N}.`);
            return;
        } // daca inputul este valid, numarul este valid, dar a mai fost introdus inainte

        ++frequencies[numbers[i]]; // daca totul este in regula, doar creste frecventa numarului
    }

    // daca nu s-a intalnit niciuna dintre erorile din for-ul de mai sus, inseamna ca inputul introdus este o permutare a lui N
    res.send(`Sirul introdus este o permutare a lui ${N}.`); 
});



app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});