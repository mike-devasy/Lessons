// Дано інформацію про прибуток К магазинів протягом тижня. Знайти :
// 1) загальний прибуток кожного масиву за тиждень;
// 2) загальний прибуток усіх магазинів по дням (загальний прибуток усіх магазинів за понеділок, за вівторок, і т.д.);
// 3) загальний прибуток за робочі дні
// 4) загальний прибуток за вихідні дні
// 5) максимальний прибуток за середу
// 6) сформувати загальний список (одновимірний масив) зі значенням, які що більші за 200
// 7) відсортувати кожен тиждень за зростанням
// 8) відсортувати тижні (рядки) за спаданням максимального елементи у цьому тижні (рядку), тобто при порівнянні рядків потрібно порівнювати максимальні елементи у кожному з цих рядків
// 9) упорядкувати тижні (рядки) за спаданням суми елементів у рядку (тобто при порівнянні двох рядків треба знайти суму кожного з рядків і порівнювати ці суми, на основі цих сум буде зрозуміло, який з елементів повинен іти раніше).
// const totalProfitShopsForWeek = [[1500, 2200, 800, 750, 400, 2500, 1200],
//                                  [150, 700, 900, 550, 800, 500, 1000],
// 																 [500, 200, 1800, 950, 300, 2500, 200],
// 																 [400, 1200, 500, 550, 500, 1500, 100],
// 																 [500, 200, 700, 350, 500, 1500, 1200],
// 																 [500, 1400, 1100, 1750, 1400, 500, 2200],]
// Функція генерування одного значення прибутку магазина за добу:
function getProfitShopForDay(minValue = 500, maxValue = 2500){
	return  minValue + Math.floor(Math.random()*(maxValue - minValue +1))
}
// Функція генерування одного значення прибутку магазина за тиждень:
function getArrProfitShopForWeek(weekPeriod)	{
	let arrProfitShopForWeek = []
	for (let i = 0; i < weekPeriod; i++) {
		arrProfitShopForWeek.push(getProfitShopForDay())
	}
	return arrProfitShopForWeek
}
// Функія формування масиву прибутку всіх магазинів за тиждень:
function getTotalProfitShopsForWeek(shopsNumber)	{
	let totalProfitShopsForWeek = []
	for (let i = 0; i < shopsNumber; i++) {
		totalProfitShopsForWeek.push(getArrProfitShopForWeek(7))
	}
	return totalProfitShopsForWeek
}	
console.log(getTotalProfitShopsForWeek(6));		
const totalProfitShopsForWeek = getTotalProfitShopsForWeek(6)
document.write(`Сформований масив прибутку магазинів за тиждень: <br>`)									 

for (let i = 0; i < totalProfitShopsForWeek.length; i++) {
	document.write(`${totalProfitShopsForWeek[i]}<br>`)
	
}
// =========================================================================================
function getProfitShopForWeek(totalProfitShopsForWeek, weekPeriod)	{
 for (let i = 0; i < totalProfitShopsForWeek.length; i++) {
	let sum = 0;
 for (let j = 0; j < weekPeriod ; j++) {
	sum += totalProfitShopsForWeek[i][j]
 }
	document.write(`1) Загальний прибуток за тиждень магазина № ${i+1} = ${sum}<br>`)
 }
}	
getProfitShopForWeek(totalProfitShopsForWeek, 7)
// =============================================================================================

function getAllProfitShopsForDay (totalProfitShopsForWeek, weekPeriod) { 
	let result = []
for (let j = 0; j < weekPeriod ; j++) {
	let sum = 0;
for (let i = 0; i < totalProfitShopsForWeek.length; i++) {
	sum += totalProfitShopsForWeek[i][j];
}
result.push(sum)
}
return result
 }
 let allProfits = getAllProfitShopsForDay (totalProfitShopsForWeek, 7)
 for (let j = 0; j < allProfits.length; j++) {
	document.write(` 2) Загальний прибуток усіх магазинів за ${j + 1}добу = ${allProfits[j]}<br>`)
 }
//  ========================================================================================
function getTotalProfitOfCategory(totalProfitShopsForWeek, startDayIndex, endDayIndex){
	let totalSum = 0;
	for (let i = 0; i < totalProfitShopsForWeek.length; i++) {
		let sum = 0;
	 for (let j = startDayIndex; j < endDayIndex ; j++) {
		sum += totalProfitShopsForWeek[i][j]
	 }
	  totalSum += sum ;
	}
		return totalSum;
} 

document.write(` 3) Загальний прибуток за робочі дні = ${getTotalProfitOfCategory(totalProfitShopsForWeek, 0, 5)}<br>`)
document.write(` 4) Загальний прибуток за вихідні = ${getTotalProfitOfCategory(totalProfitShopsForWeek, 5, 7)}<br>`)
// =============================================================================================

function getMaxProfitForDayOfWeek(totalProfitShopsForWeek, dayNum) { 
let profitForDayOfWeek = []
 for (let i = 0; i < totalProfitShopsForWeek.length; i++) {
	profitForDayOfWeek.push(totalProfitShopsForWeek[i][dayNum])
 }
 return Math.max(...profitForDayOfWeek)
 }
 document.write(` 5) Максимальний прибуток за середу = ${getMaxProfitForDayOfWeek(totalProfitShopsForWeek, 2)}<br> `)
// ================================================================================================

 let arrProfitMoreLowLimit = []
 let lowLimitProfit = 1000
 totalProfitShopsForWeek.flat(1).forEach((profit) => {
	if(profit > lowLimitProfit)
	arrProfitMoreLowLimit.push(profit)
}
)
document.write(` 6)сформувати загальний список (одновимірний масив) зі значенням, які що більші за ${lowLimitProfit} = ${arrProfitMoreLowLimit}<br>`)
// =====================================================================================================

document.write('7) відсортувати кожен тиждень за зростанням<br>')
for (let i = 0; i < totalProfitShopsForWeek.length; i++) {
	totalProfitShopsForWeek[i].sort((a, b) => a-b)
	document.write(`${totalProfitShopsForWeek[i]}<br>`)
}
// ========================================================================================================
  document.write('8) відсортувати тижні (рядки) за спаданням максимального елементи у цьому тижні (рядку), тобто при порівнянні рядків потрібно порівнювати максимальні елементи у кожному з цих рядків<br>') 
 
	let sortTotalProfitForMax = totalProfitShopsForWeek.sort((a, b ) => Math.max(...b) - Math.max(...a))
	for (let i = 0; i < sortTotalProfitForMax.length; i++) {
		document.write(` ${sortTotalProfitForMax[i]} <br> `)
	}
	// ===========================================================================================================
	document.write('9) упорядкувати тижні (рядки) за спаданням суми елементів у рядку (тобто при порівнянні двох рядків треба знайти суму кожного з рядків і порівнювати ці суми, на основі цих сум буде зрозуміло, який з елементів повинен іти раніше')
let sortTotalProfitForSumOfWeek = totalProfitShopsForWeek.sort((a, b) => b.reduce((sum, profit) => sum + profit, 0) - a.reduce((sum, profit) => sum + profit, 0))
for (let i = 0; i < sortTotalProfitForSumOfWeek.length; i++) {
	document.write(` ${sortTotalProfitForSumOfWeek[i]} <br> `)
}
