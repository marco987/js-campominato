// Il computer deve generare 16 numeri casuali da 1 a 100.
// In seguito deve chiedere all'utente di inserire
// un numero da 1 a 100 alla volta, se il numero è presente
// nella lista dei numeri generati, la partita termina,
// altrimenti continua chiedendo all'utente un altro numero.
// La partita termina quando il giocatore inserisce
// un numero "vietato" o raggiunge il numero massimo possibile
// di numeri consentiti. Al termine della partita
// il software deve comunicare il punteggio, cioè
// il numero di volte che l’utente ha inserito un numero consentito.

var contenitore_random16 = [], num_utente;

// Funzione che genera i numeri random
function random16(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

// Ciclo che genera 16 numeri differenti
var i = 0;
while ( i < 16 ) {
  var n = random16(1, 101);
  var r = contenitore_random16.indexOf(n);
  if (r < 0) {
  contenitore_random16.push(n);
  i++;
  }
}

// Elenco 16 numeri estratti
console.log("Numeri estratti: " + contenitore_random16);

var haiPerso;

for (var j = 0; j < 84; j++) {
  numeroScelto = parseInt(prompt("Inserisci un numero da 1 a 100"));
  if (numeroScelto === contenitore_random16[j]) {
    haiPerso = "Hai perso!";
  }
}

//     if (numeroScelto === contenitore_random16[j]) {
//       return false;
//     } else {
//       return true;
//     }
//   }
// }

// richiestaNum(num_utente);
// console.log(richiestaNum(num_utente));
