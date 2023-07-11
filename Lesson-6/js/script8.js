// Задача 8. На складі зберігається певна кількість ящиків з яблуками (наприклад, 15). Коли під’їде машина для завантаження, 
// попросити користувача ввести, скільки ящиків завантажити у першу машину, у другу і т. д.,
//  поки на складі не закінчаться ящики з яблуками. Передбачити той випадок,
// 	коли користувач вводить кількість, що перевищує поточну кількість ящиків на складі.
let numberOfBoxes = parseInt(prompt('Введіть кількість ящиків на складі','1'))
asked : do{
	let quantityLoadingBoxes = parseInt(prompt('Скількі ящиків загрузити в машину?','1'))
	if(quantityLoadingBoxes > numberOfBoxes){
		alert("У нас немає стільки ящиків на складі...");
		continue asked;
	}
	else if(quantityLoadingBoxes < numberOfBoxes) {
		numberOfBoxes -= quantityLoadingBoxes;

	}
	else if(quantityLoadingBoxes = numberOfBoxes){
		alert('Це вже остання на сьогодні машина');
		break;
	}
}
while(numberOfBoxes > 0)