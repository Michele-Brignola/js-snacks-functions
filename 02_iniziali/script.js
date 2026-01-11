/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];

// Dichiara la funzione qui.
/**
 * @param {string[]} names - Array di nomi
 * @returns {string[]} Array di stringhe contenente l'iniziale di ogni nome
 */
function firstLetterArray(names) {
  const firstLetter = []
  for (let i = 0; i < names.length; i++) {
    const iniz = names[i].slice(0, 1)
    firstLetter.push(iniz)
  }
  return firstLetter;
}

// Invoca la funzione qui e stampa il risultato in console

alert(firstLetterArray(names))

//Risultato atteso: ["A", "L", "M", "A", "G", "A"]
