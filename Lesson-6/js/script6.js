// Задача 6. Написати програму виведення на екран кожного символу латинського алфавіту та поруч з кожним з них символу,
// що передує йому та що слідує за ним.
 for (let i = 66; i < 90; i++) {
		document.write(`${String.fromCharCode(i-1)},${String.fromCharCode(i)}, ${String.fromCharCode(i+1)} <br>`)
 }

 
 
 
