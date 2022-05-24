range = document.createElement("input");

range.id = "range"
range.type = "range";
range.min = 4;
range.max = 10;

let rangeValue = localStorage.getItem("rangeValue");

if (rangeValue)
    range.value = rangeValue;
else
    range.value = 7;

document.body.append(range);



const parinte = document.createElement("div");
parinte.id = "parinte";
document.body.append(parinte);


const p = document.createElement("p");
document.body.append(p);


let okCounter = false;
let counter = 0;

parinte.addEventListener("click", (e) =>{
    p.textContent = counter;
})




range.addEventListener("change", () =>{
    let result = range.value;
    localStorage.setItem("rangeValue", result);

    for (let i = 1; i <= result; ++i){
        const copil = document.createElement("div");
        copil.classList.add("copil");
        
        let inaltime = parseInt(window.getComputedStyle(parinte).getPropertyValue("height"));
        let latime = parseInt(window.getComputedStyle(parinte).getPropertyValue("width"));

        copil.style.position = "absolute";
        copil.style.marginTop = `${Math.floor(Math.random() * (inaltime - 60))}px`;
        copil.style.marginLeft= `${Math.floor(Math.random() * (latime - 60))}px`;
        parinte.append(copil);

        copil.addEventListener("click", (e) =>{
            e.stopPropagation();

            document.getElementsByClassName("activ")[0]?.classList.remove("activ");

            copil.classList.add("activ");
            okCounter = false;
        })
    }
})





document.addEventListener("keydown", (e) =>{
    const x = document.getElementsByClassName("activ")[0];
    if (x){
        if (okCounter === false){
            okCounter = true;
            ++counter;
        }
        if (e.key === "ArrowLeft")
            x.style.marginLeft = Math.max(0, parseInt(x.style.marginLeft.slice(0, -2)) - 3) + "px";
        if (e.key === "ArrowRight")
            x.style.marginLeft = Math.min(940, parseInt(x.style.marginLeft.slice(0, -2)) + 3) + "px";
    }
})



setTimeout(() =>{
    setInterval(() =>{
        document.getElementsByClassName("copil")[0]?.remove();
    }, 1000)
}, 20000)