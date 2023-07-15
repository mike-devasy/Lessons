// Задача 7. 	Дано масив цін. Змінити цей масив так, що на ціни товарів, які більші за 1000 грн. дати 30% знижки.
const priceList = [800, 1200, 750, 1100, 250, 1400, 300, 2400]
const newPriceList = priceList.map(elem => elem > 1000 ? elem * 0.7 : elem)
console.log(newPriceList);