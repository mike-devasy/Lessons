// Задача 4. Вивести 3 таблиці (по 3 рядки і 3 стовпці у кожній) за зразком
let num = 0
document.write(`<table>`)
for (let i = 0; i < 3; i++) {
	document.write(`<tr>`)
	for (let j = 0; j < 3; j++) {
		num++
		document.write(`<td>${num}</td>`)
	}
	document.write(`</tr>`)
	
}
document.write(`</table>`)
document.write(`<br>`)
let num2 = 9
document.write(`<table>`)
for (let i = 0; i < 3; i++) {
	document.write(`<tr>`)
	for (let j = 0; j < 3; j++) {
		num2++
		document.write(`<td>${num2}</td>`)
	}
	document.write(`</tr>`)
	
}
document.write(`</table>`)
document.write(`<br>`)
let num3 = 18
document.write(`<table>`)
for (let i = 0; i < 3; i++) {
	document.write(`<tr>`)
	for (let j = 0; j < 3; j++) {
		num3++
		document.write(`<td>${num3}</td>`)
	}
	document.write(`</tr>`)
	
}
document.write(`</table>`)
