/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito (es. "Ciao [nome]") */

const userName = "Mario";

// Dichiara la funzione qui.
/**
 * @param {string} user
 * @returns {string} Stringa con il saluto
 **/
function helloUser(user) {
  return "Ciao " + user;
}

// Invoca la funzione qui e stampa il risultato in console

alert(helloUser(userName));

//Risultato atteso se si passa 'Mario': // ciao Mario
