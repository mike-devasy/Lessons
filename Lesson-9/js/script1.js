// Задача 1. Користувач вводить кількість елементів. Створити масив, що складається з вказаної кількості елементів заповнених нулями.
const userArrSize = parseInt(prompt('Введіть кількість єлементів'))
const array = new Array(userArrSize)
const arrZero = array.fill(0)
document.write(arrZero)