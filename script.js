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

const btnAdd = document.querySelector('#btn-add');
const inputAdd = document.querySelector('#input-add');

btnAdd.addEventListener('click',
	function () {
		// prendere il valore dall'input
		const addText = inputAdd.value.trim().toLowerCase();

		if (addText != '') {
			// console.log di addText
			console.log(addText);
			// pusharlo nell'array
			myList.push(addText);
			console.log(myList);
			// stampare il valore in pagina
			eleList.innerHTML += `<li>${addText}</li>`;
		}

		inputAdd.value = '';
	}
)