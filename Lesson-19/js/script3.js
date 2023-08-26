// Задача 3. Дано 5 випадковим чином згенерованих нумерованих списків з рандомними числами <br>
// (кількість елементів у списку випадкова від 1 до 10, елементи випадкові – від 1 до 100). <br>
// При натисненні на кнопку нумеровані списки з парною кількістю елементів зафарбувати 
// у зелений колір, інші у червоний.
// }
function randNum(min = 1, max = 100) { 
	return min + Math.floor(Math.random()* (max - min + 1))
 }
 const baseElement = document.querySelector('.block')

 function getRandList(minNumberList = 1, maxNumberList = 10) {
	const randList = document.createElement('ol')
	baseElement.append(randList)
	const randNumber = randNum(minNumberList,maxNumberList)


	for (let i = 0; i < randNumber; i++) {
		const elemOfList = document.createElement('li')
		elemOfList.innerText = randNum()
		randList.append(elemOfList)
	}
	return randList
   }
	 const button = document.createElement('button')
	 button.setAttribute('type', 'button')
	 button.innerText = 'Go!'
	
	 baseElement.prepend(button)
	 const numbersOfList = 5
	 const arrRandList = []

	 for (let i = 0; i < numbersOfList ; i++) {
		const randList = getRandList()
		arrRandList.push(randList)
	 }
	button.addEventListener('click', () => {
		for (const randList of arrRandList) {
			if(randList.children.length % 2 !== 0) randList.style.backgroundColor = 'red'
			else randList.style.backgroundColor = 'green'
		 }
	}
		
	)
