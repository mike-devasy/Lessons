// ================Задача 3. Дано вартість одиниці товару і кількість. Знайти загальну вартість та ПДВ (5% від загальної вартості).
// 1. Описуємо і вводимо значення змінних:
// productPrice - ціна одиниці товару
// productQuantity - кількість товару

// vatPercentage - ПДВ 
// 2.Результат:  productTotal - загальна вартість товару
// vatOfProduct - ПДВ від вартості
let productPrice = parseFloat(prompt("Введить ціну товару", "10.00"));
let productQuantity = parseFloat(prompt("Введить кількість товару", "10.00"));
const vatPercentage = 5;
let productTotal = (productPrice * productQuantity).toFixed(2);
let vatOfProduct = (productTotal * vatPercentage / 100).toFixed(2);
alert(`Загальна вартість товару - ${productTotal}\n ПДВ -${vatOfProduct}`);
