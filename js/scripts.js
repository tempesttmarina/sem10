const copyright = document.querySelector(".copy");
const divModale = document.querySelector(".modale");

copyright.addEventListener("click", ouvrirModale);

function ouvrirModale(){
    const modale = document.createElement("div");
    divModale.classList.add("visible");
    modale.textContent = "FIN";
    modale.classList.add("mod");
    divModale.appendChild(modale);

    modale.addEventListener("click", fermerModale);
}

function fermerModale(e){
    divModale.removeChild(e.target);
    divModale.classList.remove("visible");
}