// Задача 6.
// Дано послідовність цін товарів та назв (у окремих масивах). Вивести на екран ті, 
// які може собі дозволити користувач (кількість грошей задається).
 let arrProducts = ['Костюм ', 'Пиджак ', 'Брюки ', 'Свитшот ', 'Краватка ', 'Шарфик ', 'Слипони ', 'Кросівки ']
 
let arrPrices = [2500, 1500, 990, 850, 380, 400, 1500, 2500]
function getListCanAffordProducts(userMoney, arrProducts, arrPrices ) {
	let listCanAffordProducts =[]
	for (let i = 0; i < arrPrices.length; i++) {
		if(userMoney > arrPrices[i])  {
			arrPrices[i] = arrProducts[i]
			listCanAffordProducts.push(arrProducts[i])
		}
	}
	return listCanAffordProducts
 }
 document.write(`Cписок товарів,які може дозволити собі покупець: ${getListCanAffordProducts(1000, arrProducts, arrPrices )}`)