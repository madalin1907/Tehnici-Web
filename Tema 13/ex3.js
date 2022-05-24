const data = document.getElementById("data");
data.value = new Date();

let select = document.getElementsByTagName("select")[0];

let counter = -1;

let localCounter = localStorage.getItem("counter");
if (localCounter){
    counter = parseInt(localCounter);
    select.selectedIndex = counter;
    data.style.color = select.value;
}

const interval = setInterval(() =>{
    select.selectedIndex = ++counter;
    data.style.color = select.value;
    if (counter === 2)
        counter = -1;
}, 3000)


document.addEventListener("keydown", (e) =>{
    if (e.key.toUpperCase() === "S"){
        clearInterval(interval);
        localStorage.setItem("counter", counter % 3);
    }
})