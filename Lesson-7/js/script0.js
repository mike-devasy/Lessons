// Задача 0. Створити функцію, яка за номером місяця повертає пору року, до якої відноситься цей місяць.

function getYearSeason(numMonth) {
	let result 
	switch (numMonth) {
		case 12 :
		case 1:
		case 2: result = 'winter'
		break;

		case 3 :
		case 4:
		case 5: result = 'spring'
		break;

		case 6 :
		case 7:
		case 8: result = 'summer'
		break;

		case 9 :
		case 10:
		case 11: result = 'autumn'
		break;

	}
	return result;

}
const userNumMonth = parseInt(prompt('Введіть номер місяця','1'))

alert(getYearSeason(userNumMonth))