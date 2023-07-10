// Задача 7.Дано послідовність платіжок протягом року. Знайти сумарну кількість грошей за:
// за весь рік;
// у першій половині року;
// у другій половині року;
// за літо;
// за ІІ квартал;
// за парні місяці (з парними номерами);
// за місяці, які є початковими у сезоні (весна, літо, осінь, зима).
let yearPayment = [200, 500, 300, 400, 850, 570, 990, 235, 880, 450, 220, 300]
function getSumYearPay(yearPayment) {  
let sum = 0;
for (const item of yearPayment) {
	sum += item;
}
return sum;
}
document.write(`сумарна кількість грошей за рік = ${getSumYearPay(yearPayment)}<br>`)
function getSum_1Half_YearPay(yearPayment) {  
let sum = 0;
 for (let i = 0; i < 6; i++) {
 sum += yearPayment[i]
	
 }
return sum;
}
document.write(`сумарна кількість грошей за перше півріччя = ${getSum_1Half_YearPay(yearPayment)}<br>`)
function getSum_2Half_YearPay(yearPayment) {  
let sum = 0;
 for (let i = 6; i < 12; i++) {
 sum += yearPayment[i]
	
 }
return sum;
}
document.write(`сумарна кількість грошей за друге півріччя = ${getSum_2Half_YearPay(yearPayment)}<br>`)
function getSumSummerPay(yearPayment) {  
let sum = 0;
 for (let i = 5; i < 8; i++) {
 sum += yearPayment[i]
	
 }
return sum;
}
document.write(`сумарна кількість грошей за літо = ${getSumSummerPay(yearPayment)}<br>`)
function getSum_4_6_Pay(yearPayment) {  
let sum = 0;
 for (let i = 3; i < 6; i++) {
 sum += yearPayment[i]
	
 }
return sum;
}
document.write(`сумарна кількість грошей за 2 квартал = ${getSum_4_6_Pay(yearPayment)}<br>`)
function getSumEvenMonthPay(yearPayment) {  
let sum = 0;
 for (let i = 1; i < yearPayment.length; i+=2) {
 sum += yearPayment[i]
	
 }
return sum;
}
document.write(`сумарна кількість грошей за парні місяці = ${getSumEvenMonthPay(yearPayment)}<br>`)
function getSumStartMonthSeasonPay(yearPayment) {  
let sum = 0;
 for (let i = 2; i < yearPayment.length; i+=3) {
 sum += yearPayment[i]
	
 }
return sum;
}
document.write(`сумарна кількість грошей за місяці начала сезонів = ${getSumStartMonthSeasonPay(yearPayment)}<br>`)