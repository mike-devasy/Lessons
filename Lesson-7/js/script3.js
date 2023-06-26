// Задача 3. Створити окремі функції, які для 4 чисел знаходять:
// 1)суму;
// 2)добуток;
// 3)середнє арифметичне;
// 4)мінімальне значення. 
function getSum(Num1, Num2, Num3, Num4) {
	return Num1 + Num2 + Num3 + Num4
}
function getProd(Num1, Num2, Num3, Num4) {
	return Num1 * Num2 * Num3 * Num4
}
function getAverageNum(Num1, Num2, Num3, Num4) {
	return (Num1 + Num2 + Num3 + Num4) / 4
}
function getMinNum(Num1, Num2, Num3, Num4) {
	let minNum1, minNum2, minNum
minNum1 = (Num1 < Num2) ? Num1 : Num2
minNum2 = (Num3 < Num4) ? Num3 : Num4
minNum = (minNum1 < minNum2)? minNum1 : minNum2
return minNum
}
const userNum1 = parseFloat(prompt('Введіть перше число'))
const userNum2 = parseFloat(prompt('Введіть друге число'))
const userNum3 = parseFloat(prompt('Введіть трете число'))
const userNum4 = parseFloat(prompt('Введіть четверте число'))
document.write(`Cума ${getSum(userNum1, userNum2, userNum3, userNum4)}<br>
Добуток ${getProd(userNum1, userNum2, userNum3, userNum4)}<br>
Мінімальне число ${getMinNum(userNum1, userNum2, userNum3, userNum4)}<br>
Cередне аріфметичне ${getAverageNum(userNum1, userNum2, userNum3, userNum4)}`)