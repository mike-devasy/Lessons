// Задача 4.Дано послідовність номерів автомобілів. Підрахувати кількість номерів, які :
// •	починаються на букву «А»;
// •	перша і остання літери співпадають;
// •	складаються з більше ніш 5 символів;
let carNumbers = ['AX2818KO','TI7841PT','AT2318KA', 'AA45P', 'BE3123TT', 'AC1147TP','HH156'];
function getCountСarNumbersStartWhithSetLetter(selectLetter, carNumbers ) {
let countСarNumbersStartWhithSetLetter = 0;

	for (let i = 0; i < carNumbers.length; i++) {

if(carNumbers[i][0].toUpperCase() === selectLetter)	
   { countСarNumbersStartWhithSetLetter++ ; }
	}
	return countСarNumbersStartWhithSetLetter;
}
let selectLetter = 'A'
 document.write(`кількість номерів, які починаються на букву ${selectLetter} = ${getCountСarNumbersStartWhithSetLetter( selectLetter, carNumbers)}<br> `)
 function getCountСarNumbersWhithSameExternalLetter(carNumbers){
	counter = 0
	for (let i = 0; i < carNumbers.length; i++) {
		if(carNumbers[i][0] === carNumbers[i][carNumbers[i].length-1])	
		counter++
	}
return counter
 }
document.write(`кількість номерів, в яких перша  та остання літера співпадають = ${getCountСarNumbersWhithSameExternalLetter(carNumbers)}<br> `)
function getCountCarNumbersMore5(carNumbers) { 
	counter = 0
	for (const item of carNumbers) {
		if(item.length > 5)
		counter++
	}
	return counter
 }
 document.write(`Кількість номерів з більш ніж 5 символів = ${getCountCarNumbersMore5(carNumbers)}`)