// Задача 5. Дано ціле число N. Вивести ті натуральні числа, квадрати яких є меншими або рівними за N.
const N = parseInt(prompt('Введіть ціле число'))
for (let Num = 1; Num <= Math.sqrt(N); Num++) {
	document.write(`${Num} <br>`);
}
 