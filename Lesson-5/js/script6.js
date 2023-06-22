// Задача 6.  Користувач загадує число. За 3 спроби комп’ютер намагається вгадати число користувача (використати confirm). дня.
 let userNum = parseInt(prompt('Введіть число від 1 до 10'))
 const minNum = 1
 const maxNum = 10
 for (let i = 0; i < 3; i++) {
	 let compNum = minNum + Math.floor(Math.random() * (maxNum - minNum + 1))
	let answerComp = confirm(`Ваше число було ${compNum} ? `)
	if(answerComp) {
		alert('Я вгадал ваше число')
		break
	}
 }
alert('Мені не вдалося відгадати ваше число....')
 

 
 
 
