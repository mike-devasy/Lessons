// Задача 5. Тренажер додавання. Кожні 10 секунд користувачу задають випадковий 
// приклад з додавання двох цифр і робиться перевірка.

// 1.Створюємо функцію рандомного числа : 
function getRandNum(min, max) { 
	return  min + Math.floor(Math.random() * (max - min + 1))
 }
//  console.log(getRandNum(min = 1, max = 10));
//  2.Cтворюємо запит юзеру по результату  додавання рандомних чисел :
function getUserAnswer(min = 1, max = 10) { 
	const num1 = getRandNum(min, max)
	const num2 = getRandNum(min, max)
	const makeQuestion = parseInt(prompt(`Введіть свою відповідь на цей приклад : ${num1} * ${num2} = ` , 0 ))
	getCheckUserAnswer(num1, num2, makeQuestion);
 }
// 3.Створюємо функцію перевірки ответа юзера:
function getCheckUserAnswer(num1, num2, userAnswer) {
	let result = num1 * num2
	if(userAnswer === result) alert('Все вірно')
	else alert(`Не вірно.Правильна відповідь ${result}`)
	setTimeout( getUserAnswer, 10000, 1, 10) 
}  
	setTimeout( getUserAnswer, 10000, 1, 10)  