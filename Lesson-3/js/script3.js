// Випадковим чином генерується число від 1 до 5. Спробуйте вгадати число за 2 спроби.
// 1. Описуємо і вводимо значення змінних 
// minNumber - мінім.випадкове число
// maxNumber - макс.випадкове число
// userNumber - введене число
// randomNumber - cгенероване число
let  minNumber = 1;
let  maxNumber = 5;
let userNumber = parseInt(prompt("Бажаєте вгадати з двох спроб згенерованє число в диапазоні від 1 до 5 ?",""));
let randomNumber = minNumber + Math.floor(Math.random()* (maxNumber-minNumber+1));
// 2.Прописуємо умови виконання різних варіантів та виводимо результати
if (userNumber === randomNumber)
alert("Поздоровляємо!Ви вгадали з першої спроби!")
else userNumber = parseInt(prompt("У вас залишилася остання спроба!"));
if (userNumber === randomNumber) 
alert("Поздоровляємо!Ви вгадали це число!")
else alert(`На жаль, у вас не вийшло вгадати це число...Згадане число було ${randomNumber}`);
