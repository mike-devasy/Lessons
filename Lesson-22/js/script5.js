// Задача 5. Користувач вводить дату народження. Визначити, скільки йому повних років.
const userBirthday = prompt('Введіть ваш день народження в форматі рррр-мм-дд.', '')
const userYearOfBirth = new Date(userBirthday)
const userAge = new Date().getFullYear() - userYearOfBirth.getFullYear()
document.write(`Ваш повний вік : ${userAge}`)