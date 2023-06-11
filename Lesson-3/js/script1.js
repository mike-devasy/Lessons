// Задача 1. З клавіатури вводяться імена двох дітей та кількість у них цукерок.
// Вивести не екран ім’я тієї дитини, у якої кількість цукерок є більшою, або вивести, що кількість однакова.
// 1. Описуємо і вводимо значення змінних 
	// firstChildName - им'я першої дитини
	// secondChildName - им'я другої дитини
	// quontityFirstChildSweet - кількість цукерок першої дитини
	// quontitySecondChildSweet - кількість цукерок другої дитини
	let firstChildName = prompt(`Введіть ім'я першої дитини`);
	let secondChildName = prompt(`Введіть ім'я другої дитини`);
	let quontityFirstChildSweet = parseInt(prompt(`Введіть кількість цукерок у ${firstChildName}`, "0"));
	let quontitySecondChildSweet = parseInt(prompt(`Введіть кількість цукерок у ${secondChildName}`, "0"));
	// 2.Зрівнюємо кількість цукерок .пишемо умови та виводимо результат
	if (quontityFirstChildSweet > quontitySecondChildSweet)
	alert(firstChildName)
	else if (quontityFirstChildSweet < quontitySecondChildSweet)
	alert(secondChildName)
	else alert(`Кількість цукерок однакова`);