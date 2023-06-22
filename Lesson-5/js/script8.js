// Задача 8. Знайти суму всіх непарних чисел, що знаходяться між
// 		заданими користувачем числами.
let startNum = parseInt(prompt('Введіть начальне число проміжку'))
let endNum = parseInt(prompt('Введіть кінцеве число проміжку'))
if(isFinite(startNum) && isFinite(endNum)){
	let sumOddNumbs = 0
	let currentNum = startNum
	for ( currentNum ; currentNum <=  endNum; currentNum++) {
	if(currentNum % 2 !== 0){
		sumOddNumbs += currentNum;
	}
	}
	alert(`Сума непарних чисел цифрового проміжку між ${startNum} та ${endNum} становить ${sumOddNumbs}`)
}
else alert('Введіть числові значення!!!')