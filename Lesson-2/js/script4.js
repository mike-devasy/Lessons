// =========Задача 4. Дано довжину у сантиметрах. Визначати скільки це метрів і кілометрів.
// 1. Описуємо і вводимо значення змінних :
// lengthCentim - довжина в сантиметрах
// 2.Результат:
// lengthMetres - довжина в метрах
// lengthKilometres - довжина в  кілометрах
let lengthCentim = parseInt(prompt("Введіть довжину у сантиметрах", "0"));
let lengthMetres = lengthCentim / 100;
let lengthKilometres = lengthMetres / 1000;
alert(`Довжина у сантиметрах- ${lengthCentim} \n Довжина у метрах- ${lengthMetres} \n Довжина у километрах- ${lengthKilometres}`);