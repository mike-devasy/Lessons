// Задача 6. З клавіатури вводиться номер дня тижня. Вивести на екран назву дня.
// 1. Описуємо і вводимо значення змінних 
// dayOfWeek - день тижня
// numberOfDayOfWeek - номер дня тижня

let numberOfDayOfWeek = prompt("Введить номер дня тижня","0");
// 2.Заносимо в switch різні рішення в залежності від введенної категорії та виводимо результат
switch (numberOfDayOfWeek) {
	case "0": alert("Неділя")
		break;
	case "1": alert("Понеділок")
		break;
	case "2": alert("Вівторок")
		break;
	case "3": alert("Середа")
		break;
	case "4": alert("Четвер")
		break;
	case "5": alert("П'ятниця")
		break;
	case "6": alert("Субота")
		break;

	default: alert("Немає такого дня!")
		break;
}

 
 
 
