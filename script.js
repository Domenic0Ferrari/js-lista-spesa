/*
Data una lista della spesa, stampare sulla pagina gli elementi della lista individualmente con un ciclo while.
*/

// scrivere una lista (array)

const myList = [
	'pomodori',
	'carote',
	'latte',
	'the',
	'caffè',
	'pane',
	'biscotti',
	'salmone',
	'pasta',
    'pollo',
];

// selezionare con "id" dove inserire il risultato

const eleList = document.querySelector('#list');

// ciclo while

let i = 0;

while (i < myList.length){
    console.log(myList[i]);
    eleList.innerHTML += `<li>${myList[i]}</li>`;
    i++;
}