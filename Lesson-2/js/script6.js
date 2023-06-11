/** @format */

//Task 6
// З клавіатури вводяться вартість товару та кількість одиниць 3 товарів. Обчислити вартість кожного товару окремо та загальну вартість. Вивести чек (як у супермаркеті) використовуючи елементи розмітки.
// 1.Виводимо змінні:
// firstProductPrice - ціна першого товару
// secondProductPrice - ціна другого товару
// thirdProductPrice - ціна третього товару
// firstProductQuantity - кількість першого товару
// secondProductQuantity - кількість другого товару
// thirdProductQuantity - кількість третього товару
// firstProductTotal - загальна вартість першого товару
// secondProductTotal - загальна вартість другого товару
// thirdProductTotal - загальна вартість третього товару
// productTotalCost -загальна вартість всього товару
let firstProductPrice = parseFloat(prompt("Введіть ціну першого товару", "0"));
let firstProductQuantity = parseFloat(
  prompt("Введіть кількість першого товару", "0")
);
let secondProductPrice = parseFloat(prompt("Введіть ціну другого товару", "0"));
let secondProductQuantity = parseFloat(
  prompt("Введіть кількість другого товару", "0")
);
let thirdProductPrice = parseFloat(prompt("Введіть ціну третього товару", "0"));
let thirdProductQuantity = parseFloat(
  prompt("Введіть кількість третього товару", "0")
);
// 2.Рахуємо вартість:
let firstProductTotal = firstProductPrice * firstProductQuantity;
let secondProductTotal = secondProductPrice * secondProductQuantity;
let thirdProductTotal = thirdProductPrice * thirdProductQuantity;
let productTotalCost =
  firstProductTotal + secondProductTotal + thirdProductTotal;
// 3.Виводимо результати в таблицю :
document.write (
  `------Shop any goods------<br><br> 
	first goods <br>
	${firstProductQuantity.toFixed(2)}x ${firstProductPrice.toFixed(2)}...${firstProductTotal.toFixed(2)}<br><br> 
	second goods <br>
	${secondProductQuantity.toFixed(2)}x ${secondProductPrice.toFixed(2)}...${secondProductTotal.toFixed(2)}<br><br>
	third goods <br>
	${thirdProductQuantity.toFixed(2)}x ${thirdProductPrice.toFixed(2)}...${thirdProductTotal.toFixed(2)}<br><br><br>
	Total cost of goods : ${productTotalCost} 
	 `);
