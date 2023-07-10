// Задача 3. Дано масив імен учнів. З’ясувати скільки разів зустрічається ім’я «Іван».
let studentList = ['Олена', 'Микола', 'Тетяна', 'Ганна', 'Іван', 'Сергій','Іван']
function getCountOfSelectName(studentList, selectName) { 
	let countOfSelectName = 0
	for (const item of studentList) {
		if(item === selectName) countOfSelectName++
	}
	return countOfSelectName
 }
alert(getCountOfSelectName(studentList, 'Іван'))