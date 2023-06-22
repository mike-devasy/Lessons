//  Задача2.Вивести з використанням циклів маркований список з випадковими числами (1-100). Кількість випадкових чисел вводиться користувачем. 
// requaredRandomNumber - кількість рандомних чисел(повторів циклу)
const requaredRandomNumber  = parseInt(prompt('Введіть кількість чисел',''))
const MIN_RANDOM_VALUE = 0,
      MAX_RANDOM_VALUE = 100
			document.write('<ul>')
	// Згенерувати рандомне число 	randNumber 	requaredRandomNumber кількість разів та вивести його
for (let i = 0; i < requaredRandomNumber; i++) {
	const randNumber = MIN_RANDOM_VALUE + Math.floor(Math.random()*(MAX_RANDOM_VALUE - MIN_RANDOM_VALUE + 1));
	document.write(`<li>${randNumber}</li>`)
}
document.write('</ul>')

