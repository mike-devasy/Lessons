// Задача 2. Розробити функцію, у яку передають об’єкт (день, місяць, рік). Визначити, який буде рік через N місяців
let userDate = {
	day: 13,
	month: 7,
	year: 2023,
}
 
function getShiftedYear(userDate, N) {
 let month = N + userDate.month;
 let year = userDate.year ;
 while(month > 12){
	month -= 12;
	year += 1
 }
 return year;
}
const N = parseInt(prompt('N='))
const shiftedYear = getShiftedYear(userDate, N)
alert(`Через місяців ${N} буде рік ${shiftedYear}`)