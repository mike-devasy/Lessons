// Дано рік народження (дата: 1 січня) та поточний рік. Знайти кількість років.
// 1. Описуємо і вводимо значення змінних 
// userBirthYear - рік народження
// currentYear-поточний рік
let userBirthYear = parseInt(prompt("Введіть свій рік народження","2000"));
// 2.Знаходимо результат
// userAge-кількість років користувача
let currentYear = 2023;
let userAge = currentYear - userBirthYear;
// 3.Виводимо результат:
alert(`Ваш вік: ${userAge}`);