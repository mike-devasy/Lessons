// Задача 2. 	Користувач вводить кількість елементів. Створити масив, у якому перша половина заповнена 1-цями, а друга заповнена 7-ками.
const userArrSize = parseInt(prompt('Введіть кількість єлементів'))
const arr = new Array(userArrSize)
const difArray = arr.fill(1, 0, Math.floor(userArrSize / 2) ).fill(7, userArrSize / 2)
document.write(difArray)