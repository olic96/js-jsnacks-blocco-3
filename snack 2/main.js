// Fai inserire un numero, che chiameremo N, all’utente.
// Genera N array, ognuno formato da 10 numeri casuali tra 1 e 100. Ogni volta che ne crei uno, stampalo a schermo.

//quindi il numero dell'utente genererà un tot di array, che saranno formati da 10 numeri casuali tra 1 e 100

// 1. chiedo un numero all'utente
const numberUser = Number(prompt("Inserisci un numero"));

// 2. genero un tot di array in base a number
//    questi array saranno formati da 10 numeri random tra 1 e 100
for (let i = 0; i < numberUser; i++) {
    const array = [];
    for (let i = 0; i < 10; i++) {
        array.push = (Math.floor(Math.random() * 100) + 1); 
    }
    console.log(array);
}


