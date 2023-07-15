// Задача 8. 	 Дано масив номерів авто. Сформувати новий масив тих, які починаються на «А»
const arrTitle = ['AX2345BE','TY4785YY', 'JK8976RT', 'AV7845PO', 'KL5824PO','AS7845UY']
const newArrTitle = arrTitle.filter((elem) => elem.startsWith('A'))
console.log(newArrTitle);