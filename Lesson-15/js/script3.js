// Задача 3.	Розробити клас MultChecker для перевірки таблиці множення.
class MultChecker {
	constructor(checkNum, wrightCount, wrongCount, defaultMin = 1, defaultMax = 10){
		this.checkNum = checkNum
		this.wrightCount = wrightCount
		this.wrongCount = wrongCount
		this.min = defaultMin
		this.max = defaultMax
	}
	getRandNum (){
	 return this.min + Math.floor(Math.random()*(this.max - this.min + 1))
	}
	getCheckUserAnswer(userAnswer, result){
		this.wrightCount = 0
		this.wrongCount = 0
		this.checkNum = parseInt(prompt('Введіть свою базову ціфру для перевірки випадкового добутку:',''))
		do{
		const randNum = this.getRandNum ()
		userAnswer = parseInt(prompt(`Введіть свою відповідь : ${this.checkNum} * ${randNum} `,'0'))
		result = this.checkNum * randNum;
		if(userAnswer === result){
			alert('Вірно!!!')
			this.wrightCount++
		}
		else {
			alert('Не вірно!!!')
			this.wrongCount++
		}
	}
	while(userAnswer)
}
render() {
	document.write(`Перевірка добутку на ціфру ${this.checkNum} закінчена! <br>`)
	document.write( `Кількість правільних відповідей - ${this.wrightCount}, <br> кількість неправільних - ${this.wrongCount - 1}`)
}
}
let print = new MultChecker()
print.getCheckUserAnswer()
print.render()
 