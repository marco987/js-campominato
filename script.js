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

var contenitore_random_16 = [], num_utente;

function random16(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

var numeri = contenitore_random_16;
var i = 0;
while ( i < 16 ) {
  var n = random16(1, 101);
  var r = numeri.indexOf(n);
  if (r < 0) {
  numeri.push(n);
  i++;
  }
}

console.log(contenitore_random_16);
