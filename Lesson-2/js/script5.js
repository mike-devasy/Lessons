// =========Задача 5. Дано кількість секунд, що пройшла від початку доби. Визначити скільки це годин і хвилин.
// 1.Вхідні дані : seconds-секунды , minutes- хвилини , hours-години
// refundMinutes-залишок хвилин 
let seconds = parseInt(prompt("Скільки секунд пройшло від початку доби?", "0"));
// 2.Знаходимо результат :
let minutes = Math.floor( seconds / 60);
let hours = Math.floor( seconds / 3600);
let  refundMinutes = minutes % 60;
// 3.Виводимо результати:
alert(` Пройшло годин: ${hours}\n хвилин: ${refundMinutes}`);