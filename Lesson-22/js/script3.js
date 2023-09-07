// Задача 3. Визначити поточну пору року
function getSeason(currentMonth){
	currentMonth = new Date().getMonth()
	switch (currentMonth) {
		case 12 :
		case  1 :
		case  2 : console.log('Зима')
			break;
		case  3 :
		case  4 :
		case  5 : console.log('Весна')
		  break;
		case  6 :
		case  7 :
		case  8 : console.log('Літо')
	    break;
			  case  9 :
				case  10 :
				case  11: console.log('Осінь')
					break;
		default: console.log('Некоректний ввод!')
			break;
	}
}
getSeason()