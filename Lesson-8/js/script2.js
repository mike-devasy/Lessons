// Задача 2.Дано масив, який зберігає кількість відвідувачів магазину протягом тижня. Вивести на екран:
// номери днів, протягом яких кількість відвідувачів була меншою за 20;
// номери днів, коли кількість відвідувачів була мінімальною;
// номери днів, коли кількість відвідувачів була максимальною;
// загальну кількість клієнтів у робочі дні та окремо загальну кількість днів на вихідних.
let quantityBuyers = [15, 25, 40, 10, 5, 32, 40]

function getNumberDayQuantityLess20 (quantityBuyers) { 
	let numberDayQuantityLess20 =[]

	for (let i = 0; i < quantityBuyers.length; i++) {
		 if(quantityBuyers[i] < 20) numberDayQuantityLess20.push(i+1)
	}
return numberDayQuantityLess20
 }
 document.write(`номер дня, протягом якого кількість відвідувачів була меншою за 20 = ${getNumberDayQuantityLess20 (quantityBuyers)}<br>`)

 

	let minQuantityNumbersDay = Math.min(...quantityBuyers)
	let arrayMinQuantityNumbersDay = []
 quantityBuyers.forEach((el, i) => {
	if (el === minQuantityNumbersDay){
		arrayMinQuantityNumbersDay.push(i+1);
	}
	return arrayMinQuantityNumbersDay
 });
document.write(`номери днів, коли кількість відвідувачів була мінімальною = ${arrayMinQuantityNumbersDay}<br>`)
	 
	let maxQuantityNumbersDay = Math.max(...quantityBuyers)
	let arrayMaxQuantityNumbersDay = []
 quantityBuyers.forEach((el, i) => {
	if (el === maxQuantityNumbersDay){
		arrayMaxQuantityNumbersDay.push(i+1);
	}
	return arrayMaxQuantityNumbersDay
 });
document.write(`номери днів, коли кількість відвідувачів була максімальною = ${arrayMaxQuantityNumbersDay}<br>`)
function getSumBuyersWorkingDays(quantityBuyers) {
	let sumBuyersWorkingDays = 0;
	for (let i = 0; i < 5 ; i++) {
		sumBuyersWorkingDays += quantityBuyers[i]
	}
	return sumBuyersWorkingDays;
   }
 function getSumBuyersWeekend(quantityBuyers) {
	let sumBuyersWeekend = 0;
	for (let i = 5; i < 7 ; i++) {
		sumBuyersWeekend += quantityBuyers[i]
	}
	return sumBuyersWeekend;
   }
 document.write(`загальна кількість клієнтів у робочі дні = ${getSumBuyersWorkingDays(quantityBuyers)} <br> загальна кількість клієнтів у вихідні дні = ${getSumBuyersWeekend(quantityBuyers)}<br> `)