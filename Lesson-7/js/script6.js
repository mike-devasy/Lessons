// Задача 6. Створити функцію, яка створює таблицю з вказаною кількістю рядків і стовпців (таблиця заповнюється заданим фіксованим повідомленням).
 function getTable(rowsNum, columnsNum, fixMessage) {
	document.write(`<table border = 2px >`)
	for (let i = 0; i < rowsNum; i++) 
	{
	document.write('<tr>')

		for (let j = 0; j < columnsNum; j++) {
			document.write(`<td>${fixMessage}</td>`)
		}
	document.write(`</tr>`)
	}
	document.write(`</table>`)
	return;
 }
const userRowsNum = parseInt(prompt('Введіть кількість рядків','1'));
const userColumnsNum = parseInt(prompt('Введіть кількість столбців','1'));
const userFixMessage = prompt('Введіть фіксоване повідомлення','фіксоване повідомлення');
getTable(userRowsNum, userColumnsNum, userFixMessage);
 
 
