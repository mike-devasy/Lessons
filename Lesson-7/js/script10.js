// Задача 10. Дано покази температур (довільна кількість). Розробити функцію, яка дозволить знайти середнє значення для додатних показів температури.
function getAverageValue(valueQuantity) {
	let sumValueOfTemper = 0;
		for (let i = 0; i < valueQuantity; i++) {
			let valueOfTemper = parseFloat(prompt('Введіть значення температури'));
				 sumValueOfTemper += valueOfTemper
		}
		let averageValue = sumValueOfTemper / valueQuantity
		return alert(`Середне значення температури = ${averageValue.toFixed(2)}`);
	}
	let userValueQuantity = parseInt(prompt('Введіть кількість значень температури'));
	getAverageValue(userValueQuantity);