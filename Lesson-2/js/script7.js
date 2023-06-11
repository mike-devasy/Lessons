// Знайти суму випадкового номера місяця 
// (від 1 до 12) та випадкового номера дня (від 0 до 6).
// 1. Описуємо і вводимо значення змінних 
// minDay-мінімальний день,maxDay-  максім.день
// minMonth-мінім.місяць,maxMonth-макс.місяць
// rundomDay-випадковий день,rundomMonth-випадковий місяць
// rundomSum- сума рандомних номерів
let minMonth = 1;
let maxMonth = 12;
let minDay = 0 ;
let maxDay = 6 ;
let rundomMonth = minMonth + Math.floor(Math.random()*(maxMonth - minMonth + 1));
let rundomDay = minDay + Math.floor(Math.random() * (maxDay-minDay+1));
let rundomSum = rundomMonth + rundomDay;
document.write(`Випадковий місяць - ${rundomMonth}<br> Випадковий день - ${rundomDay}<br> Сума - ${rundomSum}`);