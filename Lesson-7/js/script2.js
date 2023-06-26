// Задача 2. Створити функцію, яка за номером дня дозволяє з’ясувати чи є цей день робочим.
function getWorkday(numDay) {
	let result
	switch (numDay) {
		case 1: 
		case 2: 
		case 3: 
		case 4: 
		case 5: result = 'робочій день'
			break;
			case 6:
		  case 7:result = 'вихідний день'
	    break;
		default: result = 'Введіть числове значення від 1 до 7'
			break;
	}
	return result
}
let userNumDay = parseInt(prompt('Введіть номер дня тижня від 1 до 7'))
alert(getWorkday(userNumDay))