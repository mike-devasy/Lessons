// Задача 7. Користувач загадує число. Комп’ютер задає питання поки не вгадає число користувача (використати confirm).
let userNum = parseInt(prompt('Введіть число від 1 до 10'))
const minNum = 1;
const maxNum = 10;
let answerComp, 
       compNum ;
do{
	compNum = minNum + Math.floor(Math.random() * (maxNum - minNum + 1))
  answerComp = confirm(`Ваше число було ${compNum} ? `)
}
while(answerComp !== true)
 if(answerComp) {
	 alert('Я вгадал ваше число')
	
 }

