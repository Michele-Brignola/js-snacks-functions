/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';

// Dichiara la funzione qui.
/**
 * @param {string} word - Stringa della Parola
 * @returns {number} - Numero di vocali
 */
function numeroVocali(word) {
  const matches = word.match(/[aeiou]/gi)
  return `${word} ha ${matches.length} vocali: ${matches}`;
}

// Invoca la funzione qui e stampa il risultato in console

alert(numeroVocali(word))

//Risultato atteso se si passa 'javascript': 3 (a, a, i)