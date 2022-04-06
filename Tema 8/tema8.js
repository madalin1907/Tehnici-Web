//Exercitiul 1: Afisati pozitia mousului la click pe un div de 150x150 in consola.

/*
let d = document.createElement("div");

d.textContent = "Ex1"
d.style.width = "150px";
d.style.height = "150px";
d.style.position = "relative";
d.style.top = "200px";
d.style.left = "250px";

d.style.backgroundColor = "red";
d.style.fontSize = "30px";
d.style.textAlign = "center";
d.style.paddingTop = "53px";
d.style.boxSizing = "border-box";

d.addEventListener("click", showValue);
function showValue(e){
    console.log(e.layerX, e.layerY);
}

document.body.append(d);
*/




//Exercitiul 2: Afisati tasta apasata intr-un text pe ecran.

/*
let txt = document.createElement("p");
txt.style.fontSize = "40px";
document.body.append(txt)

document.addEventListener("keydown", (e) =>{
    txt.textContent = e.key;
});
*/





//Exercitiul 3: Sa se coloreze div-urile corespunzatoare la apasarea unei taste-cifra.

/*
for (let i=0; i<=9; i++){
    let d = document.createElement("div");
    d.classList = "ex3"
    d.textContent = i;
    
    d.style.backgroundColor = "lightblue";
    d.style.border = "3px solid black";
    d.style.width = "100px";
    d.style.height = "100px";
    d.style.display = "inline-block";
    d.style.margin = "15px"; 
    d.style.fontSize = "35px";
    d.style.textAlign = "center";
    d.style.paddingTop = "27px";
    d.style.boxSizing = "border-box";

    document.body.append(d);
}

const v = document.getElementsByClassName("ex3");

document.addEventListener("keydown", (e) =>{
    v[e.key].style.backgroundColor = "yellow";
});

document.addEventListener("keyup", (e) =>{
    v[e.key].style.backgroundColor = "lightblue";
});
*/





//Exercitiul 4: Creati un div pe care sa il miscati prin intermediul tastelor cu sageti si WASD.
/*
let x = document.createElement("div");

x.style.backgroundColor = "red";
x.style.height = "100px";
x.style.width = "100px";

//Initial se pozitioneaza random pe ecran
x.style.position = "relative";
x.style.top = Math.floor(Math.random() * (window.innerHeight - 115)) + "px";
x.style.left = Math.floor(Math.random() * (window.innerWidth - 115)) + "px";

document.addEventListener("keydown", (e) =>{
    if (e.key.toLowerCase() === "w" || e.key === "ArrowUp")
        x.style.top = Math.max(0, parseInt(x.style.top.slice(0, -2)) - 5) + "px";

    else if (e.key.toLowerCase() === "a" || e.key === "ArrowLeft")
        x.style.left = Math.max(0, parseInt(x.style.left.slice(0, -2)) - 5) + "px";

    else if (e.key.toLowerCase() === "s" || e.key === "ArrowDown")
        x.style.top = Math.min(window.innerHeight - 115, parseInt(x.style.top.slice(0, -2)) + 5) + "px";

    else if (e.key.toLowerCase() === "d" || e.key === "ArrowRight")
        x.style.left = Math.min(window.innerWidth - 115, parseInt(x.style.left.slice(0, -2)) + 5) + "px";
});
//Minimele si maximele sunt facute pentru ca div-ul sa nu iasa din pagina
document.body.append(x);
*/


//Exercitiul 5: La fiecare click pe ecran, la pozitia mouse-ului apare un buton care va contine
//numarul sau de ordine si va avea background aleatoriu. Dupa 5s de la creare butonul se va sterge.


document.addEventListener("click", createButton);
let index = 1;

function createButton(e){
    let d = document.createElement("button");
    d.textContent = index;
    index++;

    d.style.border = "3px solid black";

    d.style.width = "75px";
    d.style.height = "75px";
    d.style.fontSize = "20px";
    d.style.textAlign = "center";

    let r = Math.random() * 255;
    let g = Math.random() * 255;
    let b = Math.random() * 255;
    d.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    
    d.style.position = "absolute";
    d.style.left = e.x + "px";
    d.style.top = e.y + "px";

    document.body.append(d);

    setTimeout(() =>{
        d.remove();
    }, 5000)
}