// Задача 9. Дано масив імен. Сформувати масив з перших літер цих імен.
const arrNames = ['Іванна','Петро', 'Ганна', 'Микола', 'Богдан', 'Сергій', 'Ірина']
const arrFirstLetterOfName = arrNames.map((name) => name[0])
console.log(arrFirstLetterOfName);