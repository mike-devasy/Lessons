// Задача 2. 		Дано 5 елементів input. При введенні значення у якийсь із них необхідно автоматично<br>
		// заповнювати інші (усі попередні у спадному порядку(кожен попередній має значення <br>
			// на 1 менше за наступний), усі наступні на 1 більше (кожен наступне на 1 більше за попереднього))
			function writeInput() { 
				const baseElement = document.getElementById('base')
				for (let i = 0; i < 5; i++) {
const lab = document.createElement('label')	
baseElement.append(lab)	
const inp = document.createElement('input')
lab.append(inp)
				}
			 }
	writeInput()
	const inputList = document.querySelectorAll('input')
	inputList.forEach((input) => {
		input.addEventListener('input',() => {
		let value = parseInt(input.value)
		let previousLabel = input.parentElement.previousElementSibling
		while(previousLabel){
			value -= 1
			previousLabel.querySelector('input').value = value
			previousLabel = previousLabel.previousElementSibling
		}
	  	value = parseInt(input.value)
			let nextLabel = input.parentElement.nextElementSibling
			while(nextLabel){
        value += 1
				nextLabel.querySelector('input').value = value
				nextLabel = nextLabel.nextElementSibling
			}
			
		})
	})