// Задача 7. Зобразити рівнобедрений трикутник із символів ^. Висоту задає користувач. Наприклад, на екрані висота =5.
let height = parseInt(prompt('Введіть висоту трикутника'))
let symbol = '^';
let line;
for (let i = 1; i <=  height; i++) {
	line = symbol.repeat( i*2 -1 );
	console.log(line.padStart(height + i - 1))
	
}

