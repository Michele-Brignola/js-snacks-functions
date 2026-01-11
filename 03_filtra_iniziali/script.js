/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];

// Dichiara la funzione qui.
/**
 * @param {string[]} names - Array di nomi
 * @param {string} iniziale - Iniziale dei nomi
 * @returns {string[]} - Array di stringhe contenente l'iniziale di ogni nome
 */
function firstLetterArray(names, iniziale) {
  const firstLetter = []
  for (let i = 0; i < names.length; i++) {
    if (names[i].slice(0, 1) === iniziale)
    firstLetter.push('"' + names[i] + '" ')
  }
  return firstLetter;
}

// Invoca la funzione qui e stampa il risultato in console

alert(firstLetterArray(names, "A"))

//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]