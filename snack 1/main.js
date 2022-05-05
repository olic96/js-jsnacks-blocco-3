// Crea un array vuoto e chiedi all’utente un numero da inserire nell’array. Continua a chiedere i numeri all’utente e a inserirli nell’array fino a quando la somma degli elementi è minore di 50.

// 1. creo un array vuoto
const arrayOne = [];
// 2. chiedo all'utente di inserire un numero
let number = 0;

// 3. continua a chiederglielo FIN TANTO CHE arrayOne.length <= 50 e inseriscili nell'arrayOne
while(arrayOne.length <= 50){
    Number(prompt("give me a number"));
    arrayOne.push(number);
}


console.log(arrayOne);
