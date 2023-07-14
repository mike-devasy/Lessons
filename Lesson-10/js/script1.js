// Задача. Дано історію цін на цінні папери за деякий період (згенерувати від 1 до 10000)
// 1)Сформувати новий масив, у якому є тільки ті, що більші за 1000 грн.
// 2)Сформувати новий масив, у якому є номери тільки тих, що більші за 1000 грн.
// 3)Сформувати список з тих цін, які більші за попереднє значення
// 4)Сформувати новий масив, що міститиме значення цін у відсотках стосовно максимального
// 5)Підрахувати кількість змін цін
// 6)Визначити, чи є ціна, що менше 1000
// 7)Визначати, чи усі ціни більше за 1000
// 8)Підрахувати кількість цін, що більше за 1000
// 9)Підрахувати суму цін, що більше за 1000
// 10)Знайти першу ціну, що більше за 1000
// 11)Знайти індекс першої ціни, що більше за 1000
// 12)Знайти останню ціну, що більше за 1000
// 13)Знайти індекс останньої ціни, що більше за 1000


// Генеруемо масив цін на цінні папери :
const numberPrices = parseInt(prompt('Скількі цін ви бажаете згенерувати ?'))
let pricesArr = []
function getPricesArr (numberPrices, minPrice = 1, maxPrice = 10000){
for (let i = 0; i < numberPrices; i++) {
	const price = minPrice + Math.floor(Math.random()*(maxPrice - minPrice +1 ))
	pricesArr.push(price);
}
return pricesArr 
}
document.write( `Згенерований масив:  ${getPricesArr (numberPrices, minPrice = 1, maxPrice = 10000)}<br>`);
// 1)Сформувати новий масив, у якому є тільки ті, що більші за 1000 грн.
let pricesArrMoreThousend = pricesArr.filter((price) => price >1000)
document.write( `1) масив з цінами,більшіми за 1000 :  ${pricesArrMoreThousend }<br>`);

// 2)Сформувати новий масив, у якому є номери тільки тих, що більші за 1000 грн.
let indexOfPricesArrMoreThousend = pricesArr.reduce((array,price,index) => {
	if(price >1000) {array.push(index)}
	return array
},[])
document.write( ` 2)масив з номерами цін,більшіх за 1000 :  ${indexOfPricesArrMoreThousend }<br>`);
// 3)Сформувати список з тих цін, які більші за попереднє значення
const arrNextMorePrevPrice = pricesArr.filter((price, index, pricesArr) => 	index > 0 && price > pricesArr[index - 1])
document.write( `3) масив з  тих цін, які більші за попереднє значення :  ${arrNextMorePrevPrice }<br>`);
// 4)Сформувати новий масив, що міститиме значення цін у відсотках стосовно максимального
const priceMax = Math.max(...pricesArr);

let arrPricesOnPercentOfMax = pricesArr.map( price => 
+	((price / priceMax)  * 100).toFixed(2))

document.write( `4) масив, що міститиме значення цін у відсотках стосовно максимального :  ${arrPricesOnPercentOfMax }<br>`);
// 5)Підрахувати кількість змін цін
function getQuantityOfChange(countOfChanges, price, i, arr){
	if(arr[i] !== arr[i+1]) {countOfChanges++ };
	return countOfChanges;
}
let quantityOfChanges = pricesArr.reduce(getQuantityOfChange, 0)
document.write( ` 5)кількість змін цін :  ${quantityOfChanges }<br>`);
// 6)Визначити, чи є ціна, що менше 1000
let isPriceLessThousand = pricesArr.some(price =>price < 1000);
let resultOfIsPriceLessThousand 
if(isPriceLessThousand === true)  resultOfIsPriceLessThousand = 'Так'
else  resultOfIsPriceLessThousand = 'Ні'
document.write( ` 6) чи є ціна, що менше 1000 :  ${resultOfIsPriceLessThousand }<br>`);
// 7)Визначати, чи усі ціни більше за 1000
let isAllPriceMoreThousand = pricesArr.every(price => price >1000)
let resultOfIsAllPriceMoreThousand 
if(isAllPriceMoreThousand === true)  resultOfIsAllPriceMoreThousand = 'Так'
else  resultOfIsAllPriceMoreThousand = 'Ні'
document.write( ` 7) чи усі ціни більше за 1000 :  ${resultOfIsAllPriceMoreThousand }<br>`);
// 8)Підрахувати кількість цін, що більше за 1000
let quantityOfPriceMoreThousand = pricesArr.reduce((counter, price) => price > 1000 ? counter + 1 : counter,0)
document.write( `8) кількість цін, що більше за 1000 :  ${ quantityOfPriceMoreThousand }<br>`);
// 9)Підрахувати суму цін, що більше за 1000
let sumOfPriceMoreThousand = pricesArr.reduce((sum, price) => price > 1000 ? sum + price : sum, 0)
document.write( `9) суму цін, що більше за 1000 :  ${ sumOfPriceMoreThousand  }<br>`);
// 10)Знайти першу ціну, що більше за 1000
let firstPriceMoreThousand = pricesArr.find((price) => price >1000)
document.write( `10) перша ціна, що більше за 1000 :  ${ firstPriceMoreThousand }<br>`);
// 11)Знайти індекс першої ціни, що більше за 1000:
let indexOffirstPriceMoreThousand = pricesArr.findIndex((price) => price > 1000)
document.write( `11) індекс першої ціни, що більше за 1000 :  ${indexOffirstPriceMoreThousand}<br>`);
// 12)Знайти останню ціну, що більше за 1000:
let lastPriceMoreThousand = pricesArr.findLast((price) => price >1000)
document.write( `12) Остання ціна, що більше за 1000 :  ${ lastPriceMoreThousand }<br>`);
// 13)Знайти індекс останньої ціни, що більше за 1000
let indexOfLastPriceMoreThousand = pricesArr.findLastIndex((price) => price > 1000)
document.write( `13) індекс останньої ціни, що більше за 1000 :  ${indexOfLastPriceMoreThousand}<br>`);