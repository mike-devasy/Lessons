// Задача 9. Дано покази температур (довільна кількість). Розробити функцію, яка дозволить підрахувати кількість від’ємних показів температури
function getNegativeQuantity(valueQuantity) {
let negativeQuantity = 0;
	for (let i = 0; i < valueQuantity; i++) {
		let valueOfTemper = parseFloat(prompt('Введіть значення температури'));
		if (valueOfTemper < 0) 
		   negativeQuantity++;
	}
	return alert(`Кількість від'ємних показів = ${negativeQuantity}`);
}
let userValueQuantity = parseInt(prompt('Введіть кількість значень температури'));
getNegativeQuantity(userValueQuantity);