// Задача 3.  З використанням замикань розробити ітератор, тобто функцію, що буде поступово за окремими викликами видавати по одне
//  значення від заданого мінімального до заданого максимального. Якщо значення досягне максимального, 
// то наступним буде мінімальне значення. З використанням цієї функції реалізувати перебір номерів місяців. 
function getMonthIterator(monthNum, min = 1, max =12) { 
	function getNextMonth() {  
	if(monthNum === max) monthNum = min;
	else ++monthNum;
	return monthNum;
	}
	return getNextMonth;
 }
 let nextMonth = getMonthIterator(5)
 for (let i = 0; i < 20; i++) {
	document.write(`${nextMonth()}<br>`);
	
 }