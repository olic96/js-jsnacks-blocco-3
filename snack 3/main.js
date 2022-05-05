// Crea due tag div con due id diversi:
// 1. creo nell'html due div #rosso e #verde

// un div avrà il testo colorato di rosso mentre l’altro di verde.
// 2.

// Partendo da un array di numeri, stampiamo nell’id rosso i numeri dispari e in verde i numeri pari.
// 3. creo un array numbers, i numeri dispari andranno in #rosso e i pari in #verde

// creo numbers
const numbers = [1, 2, 3, 4, 5];
// creo i due div nell'html e gli applico un id
const red = document.createElement("div");
red.id = "red";
const green = document.createElement("div");
green.id = "green";

// PER ogni numero di numbers
// SE il numero è dispari lo stampo nel div rosso
// ALTRIMENTI nel verde

for (let i = 0; i < numbers.length; i++) {
    if(numbers [i] % 2 === 1) {
        red.innerHTML += " " + numbers[i];
    } else {
        green.innerHTML += " " + numbers[i];
    }

}

// creo un container nel html e appendo i due div
const container = document.querySelector(".container");
container.append(red, green);

// attribuisco i colori
red.style.color = "red";
green.style.color = "green";





