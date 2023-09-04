// Задача 4. Користувач задає місяць навчання учня (перевіряти чи є числом, чи від 1 до 12, чи не канікули) та
// оцінку (перевіряти чи є числом, чи від 1 до 100). Вивести чи зможе він виправити оцінку (якщо оцінка погана і
// це не останній місяць у семестрі) . Обробку усіх помилок зробити з використанням відповідних класів.
const baseElement = document.querySelector('.block')
const  inp = document.createElement('input')
baseElement.append(inp)
inp.setAttribute('type','text')
inp.placeholder = 'Введіть поточний місяць навчання'
const  inp2 = document.createElement('input')
inp2.setAttribute('type','text')
inp2.placeholder = 'Введіть свою оцінку'
baseElement.append(inp2)

class isMonthNotNumberError extends Error{
	constructor(){
		super()
		this.message = 'Має бути числом!'
		this.name = 'isMonthNotNumberError'
	}
}
class isMonthInRangeError extends Error{
	constructor(){
		super()
		this.message = 'Повинен бути в діапазоні від 1 до 12'
		this.name = 'isMonthInRangeError'
	}
}
class isMonthInHolidaysError extends Error{
	constructor(){
		super()
		this.message = 'Цей - місяць відпочинку !'
		this.name = 'isMonthInHolidaysError'
	}
}
class isScoreNotNumberError extends Error{
	constructor(){
		super()
		this.message = 'Має бути числом!'
		this.name = 'isScoreNotNumberError'
	}
}
class isScoreInRangeError extends Error{
	constructor(){
		super()
		this.message = 'Оцінка повинна бути в діапазоні від 1 до 100'
		this.name = 'isScoreInRangeError'
	}
}

function validateScore(userScore){
try{
userScore = parseInt (document.forms[0].elements[1].value)


if(isNaN(userScore))  throw new isScoreNotNumberError
if(userScore < 1 || userScore >100) throw new isScoreInRangeError
} catch(err){
	if (err instanceof isScoreNotNumberError){
		alert(err.message + 'Пишіть тільки числа!')
		// document.forms[0].elements[1].value = 0
	}
	if(err instanceof isScoreInRangeError){
		alert(err.message + '  Оцінка має бути в диапазоні від 1 до 100!')
		// document.forms[0].elements[1].value = 0
	}
}

}
function isPossibleToCorrectTheScore(){
	let userMonth = parseInt(inp.value);
  let userScore = parseInt(inp2.value);
	if(userScore > 30) alert('У вас все ОК') 
	else if ( userMonth !== 11 && userMonth !==6)
	alert('Ви маєте можливість пересдати цій предмет')
	else alert('Ви вже не встигаете пересдати цій предмет')
}
function validateMonth (userMonth){
try{
userMonth = parseInt (document.forms[0].elements[0].value)
console.log(userMonth);


	if(isNaN(userMonth)) throw new isMonthNotNumberError
	if(userMonth < 1 || userMonth >12) throw new isMonthInRangeError 
	if(userMonth == 12 || userMonth == 8 || userMonth == 7) throw new isMonthInHolidaysError
} catch(err){
	if (err instanceof isMonthNotNumberError) {
		alert(err.message + 'Пишіть тільки числа!')
		// document.forms[0].elements[0].value = 0
	} else if (err instanceof isMonthInRangeError){
		alert(err.message + ' Напишіть в діапазоні від 1 до 12')
		// document.forms[0].elements[0].value = 0
	}
	 else if (err instanceof isMonthInHolidaysError){
		alert(err.message + 'Цей місяць канікулярний !')
		// document.forms[0].elements[0].value = 0
	} else console.log(err.message)
	return false
}
return true
}
window.onload = function(){
	inp.addEventListener('input', validateMonth)
	inp2.addEventListener('input', validateScore)
 
	inp2.addEventListener('input', function(){
		if (this.value.length >= 2) isPossibleToCorrectTheScore()
	})
}
 