// Задача 2. Вивести дату у форматі
// “місяць – рік – вихідний/робочий”
const date = new Date();
const options = { month: 'long', year: 'numeric'};
const formattedDate = date.toLocaleDateString('uk-UA', options);
const daysOfWeek = ['вихідний', 'робочій','робочій','робочій','робочій','робочій', 'вихідний']
const dayOfWeekNumber = date.getDay()
const dayOfWeekName = daysOfWeek[dayOfWeekNumber]
const formattedDateWithDayOfWeek = `${formattedDate} ${dayOfWeekName}`
console.log(formattedDateWithDayOfWeek);