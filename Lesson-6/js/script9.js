// Задача 9. 	Написати програму, яка показуватиме на екрані піднесене до квадрату число, що вводиться користувачем. 
// Користувач вирішує самостійно – виходити з програми або продовжувати ввід. 
// (Підказка: потрібно запустити нескінчений цикл, в тілі якого передбачити його переривання у випадку настання певної умови).

do {
	let userNum = parseFloat(prompt('Введіть число','0'))
	if(isNaN(userNum)) {
		alert('Це не число');
		break;
	}
  let result = userNum * userNum
  let asked = confirm(`Квадрат вашого числа = ${result}    Бажаєте продовжувати ?`)
	if(asked === false) break
	else continue;
}
while(true)