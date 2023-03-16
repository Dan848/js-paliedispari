/*
Palidroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma

Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto
*/

//"Aggancio" gli elementi del DOM
const userEven = document.getElementById("userEven");
const userOdd = document.getElementById("userOdd");
const userNumber = document.getElementById("userNumber");
const playBtn = document.getElementById("playBtn");
const printEvenOdd = document.getElementById("printEvenOdd");
//Evento al click del bottone
playBtn.addEventListener("click", playEvenOdd);
//Funzione collegata al click del bottone
function playEvenOdd () {
    //Controllo se l'utente ha scelto pari o dispari...
    let userChoice;
    if (userEven.checked) {
        userChoice = 0;
    }
    else if (userOdd.checked) {
        userChoice = 1;
    }
    //...in caso non lo ha fatto, stampo un messaggio di errore e interrompo la funzione
    else {
        printEvenOdd.innerHTML = `<h6 class="bg-danger rounded-2 p-2">ERRORE! Scegli se pari o dispari</h6>`
        return
    }

    //Ricavo il numero dalla input bar e controllo che sia un numero tra 1 e 5, se così non è interrompo la funzione per evitare errori
    const userNum = parseInt(userNumber.value);
    if(userNum > 5 || userNum < 1 || isNaN(userNum)) {
        printEvenOdd.innerHTML = `<h6 class="bg-danger rounded-2 p-2">ERRORE! Inserisci un numero tra 1 e 5</h6>`
        return
    }
    //Genero un numero a caso tra 1 e 5 per la CPU
    const cpuNum = getRndInteger(1, 5);

    //Calcolo se è pari con la funzione evenOdd, sommando con la funzione sum i due numeri tra parentesi contenuti nelle rispettive variabli
    const result = evenOdd(userNum, cpuNum, sum);
    
    //Verifico se il risultato (e cioè se il numero è pari o dispari) corrisponde o meno alla scelta dell'utente e stampo il messaggio in caso di vittoria o sconfitta
    if (result === userChoice) {
        printEvenOdd.innerHTML = `<h6 class="bg-warning rounded-2 p-2 text-black">HAI VINTO! Il computer ha scelto ${cpuNum}</h6>`
    }
    else {
        printEvenOdd.innerHTML = `<h6 class="bg-danger rounded-2 p-2 text-black">HAI PERSO! Il computer ha scelto ${cpuNum}</h6>`
    }
}
//Funzione per verificare se un numero è pari o dispari attraverso l'operatore modulo (0 pari 1 dispari)...
//...in questo caso la funzione può contenere un'altra funzione che agirà sui due numeri inseriti
function evenOdd (num1, num2, func){
    return func(num1, num2) % 2;
}
//Funzione per sommare due numeri
function sum (num1, num2) {
    return num1 + num2;
}
//Funzione per generare un numero casuale tra due numeri, rispettivamente min e max
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
  }