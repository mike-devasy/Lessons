// Задача 1. Визначити привітання у залежності від часу доби (Доброго дня, Доброго ранку, Доброго
// 	вечора)
 function setGreetingOnTime(currentTime) {
	currentTime = new Date().getHours()
switch (currentTime) {
	case 7 :
	case 8 :
	case 9 :
	case 10 :
	case 11 : console.log('Добрий ранок!')
		break;
	case 12 :
	case 13 :
	case 14 :
	case 15 :
	case 16 :
	case 17 : console.log('Добрий день!')
		
		break;
	case 18 :
	case 19 :
	case 20 :
	case 21 :
	case 22 : console.log('Добрий вечір!')
		
		break;

	default: console.log('Добраніч !')
		break;
}
   }
	  setGreetingOnTime()
