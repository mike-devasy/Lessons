// Задача 4.З клавіатури вводиться вік людини. Вивести на екран ким він є 
// (дитиною у садочку, школярем, студентом, працівником, пенсіонером).
// 1. Описуємо і вводимо значення змінних 
// userAge - вік користувача
let userAge =parseInt(prompt("Введіть свій вік", "0")) ;
if( userAge > 0 && userAge < 7)
alert("Ви дитина та ходите у дітячий садочок!")
else if (userAge >= 7 && userAge < 17)
alert("Ви учень та ходите у школу")
else if(userAge >= 17 && userAge < 21)
alert("Ви студент")
else if(userAge >= 21 && userAge < 60)
alert("Ви працівник")
else alert("Ви пенсіонер");