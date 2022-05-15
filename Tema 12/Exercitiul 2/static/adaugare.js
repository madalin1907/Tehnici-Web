const buton = document.getElementById("submit");

buton.addEventListener("click", (e) =>{
    e.preventDefault();
    let nume = document.getElementById("nume");
    let populatie = document.getElementById("populatie");
    let capitala = document.getElementById("capitala");

    if (nume.value !== "" && populatie.value !== "" && (capitala.value === "true" || capitala.value === "false")){   //test ca inputurile sa fie valide
        fetch(`/updateData/${nume.value}/${populatie.value}/${capitala.value}`, {
            method:"POST"
        })

        nume.value = ""
        populatie.value = ""
        capitala.value = ""
    }
})