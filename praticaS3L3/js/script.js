window.onload = function() {
    let form = document.getElementById('toDoForm');
    form.addEventListener('submit', handleSubmit);
}  //li ho messi altrimenti ,per le proprietà del form, mi toglieva subito i nuovi li creati

const handleSubmit = function(e) {
    e.preventDefault(); 
}


//mi sono presa le cose che mi servono da dentro all'htm
let button = document.getElementById("inserisci");
let input = document.getElementById("input");
let toDoList = document.getElementById("toDoList");

button.addEventListener('click', addToDoList);



function addToDoList() {
    let newLi = document.createElement("li");
    let testoLi = document.createTextNode(input.value);
    let cancelButton = document.createElement("button");
    let imageButton = document.createElement("i");
    imageButton.classList.add("far", "fa-trash-alt"); // Aggiungi le classi necessarie per Font Awesome
    cancelButton.classList.add("cancelButton");
    newLi.classList.add("newLi");
    cancelButton.appendChild(imageButton);
    newLi.appendChild(testoLi);
    newLi.appendChild(cancelButton);
    toDoList.insertBefore(newLi, toDoList.children[0]);
    input.value="";

    newLi.addEventListener('click', barra);
    cancelButton.addEventListener('click', cancella);
    
}

function barra() {
    this.classList.toggle("barrato");

if(this.classList.contains("barrato")) {
    // gli sto dicendo : Se l'elemento è barrato, rimuovilo dalla lista e aggiungilo in fondo
    this.parentNode.removeChild(this);
    toDoList.appendChild(this);
} else {
    // Se l'elemento non è barrato, rimuovilo dalla lista e aggiungilo in cima come primo figlio
    this.parentNode.removeChild(this);
    toDoList.insertBefore(this, toDoList.children[0]);
}

}

function cancella() {
    //gli sto dicendo rimuovimi questo genitore del bottone cliccato
    //dato che il nuovo <li>che si genera, è il genitore del bottone generato
    this.parentNode.remove();
}
   