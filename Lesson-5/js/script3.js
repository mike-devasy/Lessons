// Задача 3. Вивести таблицю з 3 рядків і 7 стовпців
document.write(`<table>`)
for (let i = 1; i <= 3 ; i++) {
	document.write(`<tr>`)
	for (let j = 1; j <= 7; j++) {
		document.write(`<td>${j}</td>`)
	}
	document.write(`</tr>`)
}
document.write(`</table>`)