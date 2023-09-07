// Задача 4. Вивести назву дня
const options = {weekday: 'long'}
const day = new Date().toLocaleDateString('uk-UA', options)
console.log(day);