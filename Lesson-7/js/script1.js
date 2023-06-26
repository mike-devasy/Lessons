// Задача 1. Створити функцію, яка за номером місяця повертає його назву.
function getMonthName (numMonth) {
	let result
	switch (numMonth) {
		case 1:  result = 'january'
			break;
		case 2:  result = 'february'
			break;
		case 3:  result = 'march'
			break;
		case 4:  result = 'april'
			break;
		case 5:  result = 'may'
			break;
		case 6:  result = 'june'
			break;
		case 7:  result = 'julay'
			break;
		case 8:  result = 'august'
			break;
		case 9:  result = 'september'
			break;
		case 10:  result = 'october'
			break;
		case 11:  result = 'november'
			break;
		case 12:  result = 'december'
			break;
	
		default: result = 'Введіть числове значення місяця від 1 до 12!'
			break;
	}
	return result;
}
let userNumMonth = parseInt(prompt('Введіть номер місяця','1'))
alert(getMonthName (userNumMonth))