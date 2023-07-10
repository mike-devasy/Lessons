// Задача 8.Дано одновимірний масив, у якому зберігається певна виграшна сума (елементи заповнюються випадковим 
// чином значеннями від -500 до 500). Надаючи користувачу можливість вибирати номери елементів  (поки він не відмовиться). Знаходити сумарний виграш.
//  let min = -500;
//  let max = 500;
 const userArrSize = parseInt(prompt('Введіть кількість виграшних позицій'));
// Будуемо функцію генерації випадкових чисел:
function getCompRandomNum(min,max) {
	return Math.floor(Math.random()* (max - min + 1) + min);
}
//  Будуемо масив виграшних рандомних чисел:
function getWinRandomValue(userArrSize, getCompRandomNum) {  
	const arrWinValues = new Array(userArrSize)
 
 for (let i = 0; i < userArrSize; i++) {
let compRandomNum = getCompRandomNum(min = -500, max = 500)
arrWinValues[i] = compRandomNum;
 }
 return arrWinValues;
}
const arrWinValues = getWinRandomValue(userArrSize, getCompRandomNum);
console.log(arrWinValues);
// Будуемо функцію вибора користувачем елементів виграшного масиву та знаходимо суму виграша:
function getAmountWinUser(arrWinValues){
confirm('Бажаєте виграти чималі гроші ?')
let promoGame
let sumWinUser = 0 
do{
	let userChoice = parseInt(prompt(`Введіть свою виграшну позицію від 1 до ${userArrSize}`))
if(arrWinValues[userChoice - 1] !== 0){
	sumWinUser += arrWinValues[userChoice - 1];
	promoGame = confirm(`Ваш поточний виграш = ${arrWinValues[userChoice - 1]},загальний виграш = ${sumWinUser}.Бажаєте виграти ще?`)
	arrWinValues[userChoice - 1] = 0;
}
else {
	alert('Ви вже вибирали цю позицію !!!');
	break;
}
}
while(promoGame === true);
return sumWinUser
}
document.write(`Загальний виграш складає ${getAmountWinUser(arrWinValues)}`)


// throw new Error("Некоректна оцінка")