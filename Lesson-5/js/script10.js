// Задача 10.Каса. Користувачу повідомляють суму, яку йому треба сплатити. Користувач поступово вводить суму грошей до тих пір, поки суми не буде достатньо для оплати товарів (кожного разу користувачу повідомляють, яку ще суму потрібно ввести)
const sumPayOrder = parseFloat(prompt('Cума,необхідна до сплати'))
let remaindOfMoney = sumPayOrder
let userAddCash
do{
	 userAddCash  = parseFloat(prompt(`Сплатіть необхідну суму ${remaindOfMoney}`))
	 if(userAddCash <= remaindOfMoney)
   remaindOfMoney -= userAddCash
else
{
	let surrenderOfMoney = userAddCash - remaindOfMoney ;
	alert(`Ви внесли на ${surrenderOfMoney} більше`)
	break
}
}
while ( remaindOfMoney > 0)
