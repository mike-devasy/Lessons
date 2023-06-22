// Задача 9. Знайти суму 5 непарних чисел, що знаходяться між заданими користувачем числами.
let userMinNum = parseInt(prompt('Введіть начальне число проміжку'))
let userMaxNum = parseInt(prompt('Введіть кінцеве число проміжку'))
let sumOddNum = 0
if (isFinite(userMinNum) && isFinite(userMaxNum)) {
	for ( let i = 0 ; i < 5 ; i++) {
		let randNum = userMinNum + Math.floor(Math.random() * (userMaxNum - userMinNum + 1))
	 if(randNum%2 !== 0) {
		sumOddNum += randNum 
	 }
	}
	alert(`Cума 5 непарних чисел між ${userMinNum} та ${userMaxNum} становить ${sumOddNum}`)
}
else
 alert('Введіть числові значення !!!')