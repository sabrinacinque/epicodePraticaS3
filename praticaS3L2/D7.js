/* ESERCIZIO 1
  Scrivi una funzione per concatenare due stringhe ricevute come parametri, selezionando solamente i primi 2 caratteri della
  prima e gli ultimi 3 della seconda. Converti la stringa risultante in maiuscolo e mostrala con un console.log().
*/
let stringa1 = "Che bella giornata di sole";
let stringa2 = "Che bella giornata di pioggia";

function concatena(a, b) {
  let str1 = a.slice(0, 2);
  let str2 = b.slice(-3);
  let result = (str1.concat(str2)).toUpperCase();
  return result;
}

console.log(concatena(stringa1, stringa2));

/* ESERCIZIO 2 (for)
  Scrivi una funzione che torni un array di 10 elementi; ognuno di essi deve essere un valore random compreso tra 0 e 100 (incluso).
*/

let arrayVuoto = [];
for ( let i = 0 ; i <10 ; i++){
 let elemento = Math.floor(Math.random() * 101);
  arrayVuoto.push(elemento);
}

console.log(arrayVuoto);


/* ESERCIZIO 3 (filter)
  Scrivi una funzione per ricavare solamente i valori PARI da un array composto da soli valori numerici
*/
// *****sfrutto l'array di sopra****
function checkPari(pari) {
  if (pari%2 == 0){
    return pari
  }
  }
  console.log(arrayVuoto.filter(checkPari));



/* ESERCIZIO 4 (forEach)
  Scrivi una funzione per sommare i numeri contenuti in un array
*/
//****sfrutto sempre l'array di sopra */

function somma(arrayGenerico) {
  let somma = 0;
  arrayGenerico.forEach(function(elemento) {
  somma += elemento;
  });
  return somma;
}
console.log(somma(arrayVuoto));

/* ESERCIZIO 5 (reduce)
  Scrivi una funzione per sommare i numeri contenuti in un array
*/
  function somma2(a, b) {
      return a + b;
  }

console.log(arrayVuoto.reduce(somma2));



/* ESERCIZIO 6 (map)
  Scrivi una funzione che, dato un array di soli numeri e un numero n come parametri, ritorni un secondo array con tutti i valori del precedente incrementati di n
*/
//utilizzo l'arrayVuoto di sopra
let n = 10;
function mapFunction(array,n){
  return array.map(function(numero) {
    return numero + n;
  });
}

let arrayVuoto2 = mapFunction(arrayVuoto, n);
console.log(arrayVuoto2);




/* ESERCIZIO 7 (map)
  Scrivi una funzione che, dato un array di stringhe, ritorni un nuovo array contenente le lunghezze delle rispettive stringhe dell'array di partenza
  es.: ["EPICODE", "is", "great"] => [7, 2, 5]
*/

let newArray = ["mi","chiamo","Sabrina","Cinque"];
function lunghezzaParole(arrayGenerico) {
  return arrayGenerico.map(function(parola) {
    return parola.length;
  });
}

let lunghezze = lunghezzaParole(newArray);
console.log(lunghezze);




//anche con il for si può fare 

let newArray2 = [];
let lunghezza = 0;
for ( let i = 0 ;i < newArray.length ; i++){
 lunghezza = newArray[i].length;
 
 newArray2.push(lunghezza);

}
console.log(newArray2);



/* ESERCIZIO 8 (forEach o for)
  Scrivi una funzione per creare un array contenente tutti i valori DISPARI da 1 a 99.
*/

//CON FOR
let arrayDispari = [];
let numeroDispari = 0;
for (let i = 0 ; i < 100; i++){
  if( i % 2 == 1){
    arrayDispari.push(i);
  }
}
console.log(arrayDispari);



/* Questo array di film verrà usato negli esercizi a seguire. Non modificarlo e scorri oltre per riprendere gli esercizi :) */
const movies = [
  {
    Title: 'The Lord of the Rings: The Fellowship of the Ring',
    Year: '2001',
    imdbID: 'tt0120737',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings: The Return of the King',
    Year: '2003',
    imdbID: 'tt0167260',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings: The Two Towers',
    Year: '2002',
    imdbID: 'tt0167261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of War',
    Year: '2005',
    imdbID: 'tt0399295',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'Lords of Dogtown',
    Year: '2005',
    imdbID: 'tt0355702',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings',
    Year: '1978',
    imdbID: 'tt0077869',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1990',
    imdbID: 'tt0100054',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg',
  },
  {
    Title: 'The Lords of Salem',
    Year: '2012',
    imdbID: 'tt1731697',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Greystoke: The Legend of Tarzan, Lord of the Apes',
    Year: '1984',
    imdbID: 'tt0087365',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1963',
    imdbID: 'tt0057261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg',
  },
  {
    Title: 'The Avengers',
    Year: '2012',
    imdbID: 'tt0848228',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Infinity War',
    Year: '2018',
    imdbID: 'tt4154756',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Age of Ultron',
    Year: '2015',
    imdbID: 'tt2395427',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Endgame',
    Year: '2019',
    imdbID: 'tt4154796',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg',
  },
]

/* ESERCIZIO 9 (forEach)
  Scrivi una funzione per trovare il film più vecchio nell'array fornito.
*/  
 
  function olderMovie(movies) {
    // Inizializza il film più vecchio come il primo film dell'array
    let filmPiuVecchio = movies[0]; //gli dico che il primo film è il più vecchio per fargli fare il confronto man mano...se trova qualcuno di più vecchio allora lo riassegna
  
    
    movies.forEach(function(movie) {
      //dobbiamo fare il parseInt perchè il numero è stato scritto come una stringa, tra apici
      let currentYear = parseInt(movie.Year);
      let oldestYear = parseInt(filmPiuVecchio.Year);
      if (currentYear < oldestYear) {
        filmPiuVecchio = movie; //riassegnazione
      }
    });//quando finisce di girare mi restituisce il film più vecchio dopo aver confrontato tutti
    return filmPiuVecchio;
  }
 
  console.log(olderMovie(movies).Title);

  


/* ESERCIZIO 10
  Scrivi una funzione per ottenere il numero di film contenuti nell'array fornito.
*/  
console.log("l'array movies contiene " + movies.length + " film");


/* ESERCIZIO 11 (map)
  Scrivi una funzione per creare un array con solamente i titoli dei film contenuti nell'array fornito.
*/
//con For
let arrayVuotoMovies = [];
for (let i = 0 ; i < movies.length ; i++){
   arrayVuotoMovies.push(movies[i].Title); 
}
console.log(arrayVuotoMovies);

//oppure con map
let arrayVuotoMovies2 = [];

function titoliFilm(arrayGenerico) {
  arrayGenerico.map(function(film) {
    arrayVuotoMovies2.push(film.Title); //gli sto dicendo che per ciascun elemento dentro a movies, gli do il nome film a quegli elementi e mi prendo il titolo
  });

  return arrayVuotoMovies2;
}

let titoli = titoliFilm(movies);
console.log(titoli);
console.log( arrayVuotoMovies2);


/* ESERCIZIO 12 (filter)
  Scrivi una funzione per ottenere dall'array fornito solamente i film usciti nel millennio corrente.
*/

function millenniumData(movie) {
  let anno = parseInt(movie.Year);
  return anno >= 2000; 
}

let filmMillennio = movies.filter(millenniumData);
console.log(filmMillennio);


/* ESERCIZIO 13 (reduce)
  Scrivi una funzione per calcolare la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array fornito.
*/


function sommaAnniFilm(somma, movie) { //gli passo due parametri:somma e movie( che sarebbe il singolo film dentro all'array)
  return somma + parseInt(movie.Year); //devo fare il parseInt perchè Year è come stringa
}

let anniTotali = movies.reduce(sommaAnniFilm,0); //zero è il valore iniziale della somma 
console.log(anniTotali);


/* ESERCIZIO 14 (find)
  Scrivi una funzione per ottenere dall'array fornito uno specifico film (la funzione riceve un imdbID come parametro).
*/


function cercaFilm(imdbID) {
  return function(movie) {
      return movie.imdbID === imdbID;
  }
}

console.log((movies.find(cercaFilm('tt4154796'))).Title);//voglio che mi restituisca solo il titolo. 
console.log(movies.find(cercaFilm('tt4154796')));//Se voglio tutto,tolgo .Title



/* ESERCIZIO 15 (findIndex)
  Scrivi una funzione per ottenere dall'array fornito l'indice del primo film uscito nell'anno fornito come parametro.
*/

function cercaFilmIndex(year) {
  return function(movie) {
      return movie.Year === year;  //qua controllo se l'attributo .Year del nostro array è strettamente uguale all'anno che gli andrò a passare tra le parentesi come parametro
  }
}
console.log(movies.findIndex(cercaFilmIndex('2002')));
