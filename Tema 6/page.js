console.log("TEMA 6 - JavaScript");
alert("TEMA 6 - JavaScript");


let MyName = "Madalin";

function functionName(name){
    document.getElementById("id123").innerHTML="Numele meu este " + name;
}




let vector = [5, 5, "5", 3, 2, "A", "B", "A", 3, 3];

console.log("Varianta 1 (2 for-uri):")

noDuplicates1 = [];
for (let i = 0; i < vector.length; i++){
    let ok = 0;
    for (let j = 0; j < vector.length; j++)
        if (vector[i] === vector[j] && i != j){
            ok++;
            break;
        }
    if (ok == 0)
        noDuplicates1.push(vector[i]);
}

console.log(noDuplicates1);



console.log("Varianta 2 (filter):");

noDuplicates2 = vector.filter(function(elem) {
    element = vector.filter(x => x===elem)
    return element.length == 1;
})

console.log(noDuplicates2);
