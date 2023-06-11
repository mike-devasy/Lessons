  // Задача 7. 	З клавіатури вводиться номер місяця. Вивести до якої пори він відноситься.
	// 1. Описуємо і вводимо значення змінних 
	// numberOfMonth - номер місяця
	let numberOfMonth = prompt("Введіть номер місяця","");
	// 2.Заносимо в switch різні рішення в залежності від введенної категорії та виводимо результат
switch (numberOfMonth) {
	case "12": 
	case "1":	
	case "2":alert("На дворі зима!")
		break;
		case "3": 
		case "4":	
		case "5":alert("На дворі весна!")
		break;
		case "6": 
		case "7":	
		case "8":alert("На дворі літо!")
		break;
		case "9": 
		case "10":	
		case "11":alert("На дворі осінь!")
		break;
	default:alert("Немає такого місяця!")
		break;
}