// Задача 8. Задаємо користувачу задачу з додавання двох чисел. Визначити скільки секунд було
// використано для розв’язання задачі.
function  randNum(min = 1, max = 100){
	return min + Math.floor(Math.random()* (max - min + 1))
}
function userAnswer(num1, num2) {
let start = new Date()
	num1 = randNum()
  num2 = randNum()
	const userAnswer = parseInt(prompt(`Скількі по вашому буде ${num1} + ${num2} ?`, ''))
	if (userAnswer !== num1 + num2) alert ('Не вірно!')
	else alert('Ok')
	let end = new Date()
const milisecondCount = end - start
alert(`На рішення ви затратили ${milisecondCount}ms`)
}

userAnswer()