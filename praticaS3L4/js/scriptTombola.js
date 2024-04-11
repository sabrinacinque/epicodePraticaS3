  let numeroCartelle = 0; // Definizione globale di numeroCartelle
  let tabelline = []; // Array per memorizzare gli array che mi servono per popolare ciascuna tabellina

  document.addEventListener('DOMContentLoaded', function() {
    let inputCartelle = prompt("Quante cartelle vuoi giocare?"); 
    numeroCartelle = parseInt(inputCartelle);
    createTabellone(90);
    numeriEstrazione();

    // Creo le tabelle in base all'input che ha inserito l'utente nel prompt
       for (let i = 0; i < numeroCartelle; i++) {
           createTabellina(i);
        }  
   });


        const createTabellone = function (number) {
            const tombolaDiv = document.getElementById('container');
            for (let i = 1; i <= number; i++) {
                var cellDiv = document.createElement('div');
                cellDiv.classList.add('cellNumber');
                cellDiv.id = 'num-' + i; // genero un div univoco, es. il primo giro è 'num-1', 'num-2',let i parte da 1 altrimenti mi troverei un numero indietro

                const cellValue = document.createElement('h3');
                cellValue.innerText = i;

                cellDiv.appendChild(cellValue);
                tombolaDiv.appendChild(cellDiv);
            }
        }

        const createTabellina = function (index) {
            const tabellinaDiv = document.createElement('div'); // Crea un nuovo div per ogni tabellina
            tabellinaDiv.classList.add("tabellina");

            const tabellina = generateEachArrayTabellina();
            tabelline.push(tabellina); // Memorizzo la tabellina nell'array globale,che sarà un array di array in base a quante cartelle voglio che siano generati

            for (let i = 0; i < tabellina.length; i++) {
                const cellTabellina = document.createElement('div');
                cellTabellina.classList.add('cellNumber');
                const valueTabellina = document.createElement('h3');
                valueTabellina.innerText = tabellina[i];
                cellTabellina.appendChild(valueTabellina);
                tabellinaDiv.appendChild(cellTabellina);
            }

            document.getElementById('tabelline').appendChild(tabellinaDiv); // Aggiungi la tabellina al corpo del documento
        }

        const generateEachArrayTabellina = function() {
            const tabellina = [];
            for (let i = 0; i < 24; i++) {
                let randomNumber;
                do {
                    randomNumber = Math.floor(Math.random() * 90) + 1;
                } while (tabellina.includes(randomNumber)); // Assicura che il numero non sia già presente
                tabellina.push(randomNumber);
            }
            return tabellina;
        }



        //questo array mi serve per fare l'estrazione...i numeri estratti li prendo random da qua dentro 
        var arrayNumeri = [];
        function numeriEstrazione(){
            for (let i = 1 ; i <= 90 ; i++){
                arrayNumeri.push(i);
            }
        }



        function estrazione() {
            if (arrayNumeri.length > 0) {
                let indiceCasuale = Math.floor(Math.random() * arrayNumeri.length);
                let numeroEstratto = arrayNumeri[indiceCasuale];
                document.getElementById('numeroEstratto').innerText = "Il numero estratto è " + numeroEstratto;
                arrayNumeri.splice(indiceCasuale, 1);

                cellDiv = document.getElementById('num-' + numeroEstratto);
                if (parseInt(cellDiv.innerText) === numeroEstratto) {
                    cellDiv.style.backgroundColor = "green";
                    cellDiv.style.color = "white";
                }

                for (let j = 0; j < numeroCartelle; j++) {
                    var tabellina = tabelline[j]; //la variabile tabellina viene impostata su tabelline[j], dove j rappresenta l'indice corrente del ciclo.
                    if (tabellina && tabellina.includes(numeroEstratto)) { //se tabellina esiste e esiste il numero estratto dentro a tabellna
                        //allora vengono selezionate tutte le celle corrispondenti in tutte le tabelline create usando il queryselector
                        //tabellina:nth-child(${j + 1} è un selettore CSS che seleziona un elemento con ID "tabelline" e all'interno di esso seleziona un elemento con la classe "tabellina" al cui indice corrisponde a j + 
                        //è un'altra parte del selettore CSS che seleziona un elemento con la classe "cellNumber" all'interno della tabellina selezionata in base all'indice j. Il .indexOf(numeroEstratto) + 1 trova l'indice 
                        //del numero estratto all'interno dell'array tabellina e aggiunge 1 perché gli indici CSS iniziano da 1 anziché da 0.
                        var cellTabellina = document.querySelector(`#tabelline > .tabellina:nth-child(${j + 1}) .cellNumber:nth-child(${tabellina.indexOf(numeroEstratto) + 1})`);
                        if (cellTabellina) {
                            cellTabellina.style.backgroundColor = "green";
                            cellTabellina.style.color = "white";
                        }
                    }
                }
            } else {
                document.getElementById('numeroEstratto').innerText = "Tutti i numeri sono stati estratti.";
            }
        }