const inputField = document.getElementById("data");
const selectField = document.getElementsByTagName("select")[0];
inputField.value = new Date();

let counter = -1;

const lastColor = localStorage.getItem("lastColor");
if (lastColor){
    counter = parseInt(lastColor);
    selectField.selectedIndex = counter;
    inputField.style.color = selectField.value;
}

const changeColor = setInterval(() =>{
    if (counter === 2)
        counter = -1;
    
    selectField.selectedIndex = ++counter;
    inputField.style.color = selectField.value;
}, 1000)

document.addEventListener("keydown", (e) => {
    if (e.key.toUpperCase() === "S")
        clearInterval(changeColor);
        localStorage.setItem("lastColor", counter);
})