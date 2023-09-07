// Задача 10 . Дано дата виробництва йогурта (вводимо рік, місяць, день) та кількість днів придатності.
// Визначити чи є він придатним на даний момент.
const prodDate = new Date('2023-08-25')
const numbersOfDayOfQuality = 7
console.log(prodDate);
function checkOfExpiry(prodDate,  timeOfReceipt ) {
	 timeOfReceipt = new Date (new Date() - prodDate).getDate()
	 console.log(timeOfReceipt);
	 
	 if (timeOfReceipt > numbersOfDayOfQuality) console.log('Цей йогурт не можна їсти!!!')
	 else console.log('Все Ок');
  }
	checkOfExpiry(prodDate)