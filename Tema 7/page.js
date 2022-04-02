console.log("TEMA 7 - JavaScript");

//ex1
function function1(){
    console.log("Ex. 1")
    const container = document.getElementById("Ex1");
    const inputs = container.getElementsByTagName('input');
    for (let i = 0; i< inputs.length; i++){
        console.log(inputs[i].value);
    }
}

//ex2
function plus(){
    let paragrafe = document.getElementsByTagName('p');
    for (let i = 0; i < paragrafe.length; i++){
        paragrafe[i].style.fontSize = parseInt(paragrafe[i].style.fontSize.slice(0, -2)) + 3 + "px";
    }
}

function minus(){
    let paragrafe = document.getElementsByTagName('p');
    for (let i = 0; i < paragrafe.length; i++){
        paragrafe[i].style.fontSize = parseInt(paragrafe[i].style.fontSize.slice(0, -2)) - 3 + "px";
    }
}


//ex3
function up(){
    const square = document.getElementById("square");
    square.style.top = parseInt(square.style.top.slice(0, -2)) - 5 + "px";
}
function left(){
    const square = document.getElementById("square");
    square.style.left = parseInt(square.style.left.slice(0, -2)) - 5 + "px";
}
function down(){
    const square = document.getElementById("square");
    square.style.top = parseInt(square.style.top.slice(0, -2)) + 5 + "px";
}
function right(){
    const square = document.getElementById("square");
    square.style.left = parseInt(square.style.left.slice(0, -2)) + 5 + "px";
}


//ex4
let fructe = ["măr", "portocală", "mandarină", "banană", "pară", "cireașă", "gutuie", "pepene", "strugure"];

function randomString(){
    const s = document.getElementById("ParagrafGol");
    s.textContent = fructe[Math.floor(Math.random() * fructe.length)];
}