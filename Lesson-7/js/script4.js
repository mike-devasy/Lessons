// Задача 4.Створити функцію, яка для 3 заданих чисел знаходить одночасно декілька результатів:
//  кількість парних, кількість додатних, кількість більших за 100.

function getActionsResult(Num1, Num2, Num3) {
	let quantityPositiveNum = 0;
	let    quantityEvenNum = 0;
	let		quantityMore100 = 0;
  let  userNum = [Num1, Num2, Num3];
			for (let i = 0; i < 3; i++) {
				if (userNum[i] > 0) {
					quantityPositiveNum++;
			}
			if (userNum[i] % 2 == 0) {
					quantityEvenNum++;
			}
			if (userNum[i] > 100) {
					quantityMore100++;
			}
}
return [quantityPositiveNum, quantityEvenNum, quantityMore100];	
}
const userNum1 = parseFloat(prompt('Введіть число'));
const userNum2 = parseFloat(prompt('Введіть число'));
const userNum3 = parseFloat(prompt('Введіть число'));

const [quantityPositiveNum, quantityEvenNum, quantityMore100] = getActionsResult(userNum1, userNum2, userNum3);
alert(`Kількість парних- ${quantityEvenNum }, \n  кількість додатних- ${quantityPositiveNum}, \n кількість більших за 100- ${quantityMore100} `);
 