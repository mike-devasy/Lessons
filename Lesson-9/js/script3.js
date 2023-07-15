// 3. Користувач вводить кількість елементів. Створити масив, у якому перші
//  5 елементів заповнені 1-цями, а інші до кінця масиву заповнені 7-ками.
const userArrSize = parseInt(prompt('Введіть кількість єлементів'))
const arr = new Array(userArrSize)
const difArray = arr.fill(1, 0, 5 ).fill(7, 5)
document.write(difArray)