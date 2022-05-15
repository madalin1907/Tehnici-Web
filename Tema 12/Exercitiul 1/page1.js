const validationText = document.getElementById("validation");
let inputText;

function validareInput(){
    inputText = document.getElementById("numar").value;
    if (/^(?:(?:[1-9])|(?:10))$/.test(inputText))
        validationText.textContent = "Valid";
    else
        validationText.textContent = "Invalid";
}

document.addEventListener("keydown", (e) =>{
    if (e.key === "Enter" && validationText.textContent === "Valid"){
        const paragrafe = document.querySelectorAll("p");
        step = parseInt(inputText);
        i = step;
        let index = setInterval(()=>{
            paragrafe[i-1].remove();
            i += step;

            if (i > 10)
                clearInterval(index);
        }, 2000);

        localStorage.setItem("valoare", step);
    }
});

let step = parseInt(localStorage.getItem("valoare"));

if (step){
    const history = document.createElement("div");
    
    history.textContent = `Ultima valoare introdusa a fost ${step} si au fost sterse paragrafele`;
    
    let i = step;
    while (i <= 10){
        history.textContent += ` ${i}`
        i += step;
    }
    history.textContent += `.`;

    document.body.append(history);
}