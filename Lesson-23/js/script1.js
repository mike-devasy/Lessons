// Усі задачі можете оформити у одному файлі (так, як ми робимо на лекції)
// Задача 1. Дано масив рядків. Вивести ті, у яких є цифри (використати метод test та регулярні вирази).
let arrStr = ['rojs678', 'tyuifrt', '193647', '23jtfh784', '78uihy11']
const reg = /\d/
const strWithNum = arrStr.filter(string => reg.test(string) )
console.log(strWithNum);

// Задача 2. Дано масив рядків. Вивести ті, у яких немає цифр.
const strWithoutNum = arrStr.filter(string => !reg.test(string) )
console.log(strWithoutNum);
// Задача 3. Дано масив рядків. Вивести ті, у яких є голосні літери.
// let reg2 = /[aeiou]/gi
const strWithLoud = arrStr.filter(string => (/[aeiou]/gi).test(string) )
console.log(strWithLoud);
// Задача 4. Дано масив рядків. Вивести ті, у яких немає голосних літер.
const strWithoutLoud = arrStr.filter(string => !(/[aeiou]/gi).test(string))
console.log(strWithoutLoud);
// Задача 5. Дано масив рядків. Вивести ті, у яких є або цифра 1 або цифра 3.
const str_1_3 = arrStr.filter(string => (/(1|3)/g).test(string))
console.log(str_1_3);

// Задача 6. Дано рядок тексту, вивести усі числа, які є у тексті.
const str = 'Задача 6. Дано 52 рядок тексту, вивести 325 усі числа, які є у 25 тексті.'
const strNum = str.match(/\d+/g)
console.log(strNum);
// Задача 7. Дано рядок тексту. Знайти усі знаки пунктуації, які були використано.
const strChar = str.match(/[.,!?;:()]/g)
console.log(strChar);

// Задача 8. Дано рядок тексту. Вивести усі складові, які розділені розділовими знаками.
const strWord = str.split(/[.,!?;:]/g)
console.log(strWord);

// Задача 9. Дано рядок тексту. Перевірити, чи містить він дату у форматі dd.mm.yyyy (dd- день, mm-
// місяць, yyyy- рік).
let str2 = 'Задача 9. Дано рядок тексту. Перевірити, чи містить він дату у форматі 10.12.2023.'
const reg3 = /\d{2}\.\d{2}\.\d{4}\./gi
console.log(reg3.test(str2)) 
// Задача 10. Дано рядок тексту. Підрахувати кількість двоцифрових чисел у рядку.
let str4 = ' Задача 10. Дано 456 рядок 12 тексту. Підрахувати 4589 кількість  52 двоцифрових чисел у 78945 рядку.'
const twoDigitNumbers = str4.match(/\b\d{2}\b/g)
console.log(twoDigitNumbers);
console.log(twoDigitNumbers.length);

// Задача 11. Визначити чи може бути рядок тексту номером банківської картки (приклад: «4142-3433-
// 2323-3434»). Знайти усі такі номери.
let str5 = 'Визначити чи може бути рядок тексту номером банківської картки приклад: «4144-3433-2323-3134». Знайти усі такі номери.\
Визначити чи може бути рядок тексту номером банківської картки приклад: «4142-3453-2323-3434». Знайти усі такі номери.\
Визначити чи може бути рядок тексту номером банківської картки приклад: «4142-3438-2323-3439». Знайти усі такі номери.'
const cardNumbers = str5.match(/\b\d{4}-\d{4}-\d{4}-\d{4}\b/g)
console.log(cardNumbers);


// Задача 12. Дано адресу сайту. Визначити, чи є він урядовим (містить домен “gov”)
let url = 'https://diia.gov.ua/'
if(url.trim().toLowerCase().includes('gov')) console.log('ok')
else console.log('danger');
// Задача 13. Вибрати усі роки після 2021 року з отриманого повідомлення
const str6 = ' Вибрати 2018 усі 2022 роки після 2021 року з 2023  отриманого 2015 повідомлення'
const reg5 = /\b202[2-3]\b/g
const selYears = str6.match(reg5)
console.log(selYears);

// Задача 14. Дано номер телефону. Перевірити, чи є цей телефон телефоном з України (починаєтсья на
// «+38»)
let tel = '+380688936558'
if(tel.startsWith('+38')) console.log('Цей номер з України')
else console.log('Це інший номер')


// Задача 15. Користувач вводить прізвище та ім’я в одному рядку через пробіл. Замінити пробіл на
// дефіс.
let userName = 'John Smyth'
let newName = userName.replace(' ','-')
console.log(newName);

// Задача 16. Користувач вводить дату у форматі «день.місяць.рік». Отримати рядкове представлення
// дати у форматі «день/місяць/рік»
let userData = '21.08.2023'
let userStrData = userData.replaceAll('.', '\/')
console.log(userStrData);


// Задача 17. Користувач вводить день (номер дня (0-6) або «sun,mon,tue,wed,thu,fri,sat»). Визначити, чи
// є це день вихідним
// const userDay = prompt'Введіть свій день тижня в форматі 0-6 або sun-set '
const userDay = '  fri'
// const userDay = '5 '
let formUserDay = userDay.trim().toLowerCase()

// Convert formUserDay to a number if it's a string of digits
if(/^\d+$/.test(formUserDay)) {
  formUserDay = Number(formUserDay)
}

if(typeof formUserDay === 'string') {
 
switch (formUserDay) {
	case 'mon':
	case 'tue':
	case 'wed':
	case 'thu':
	case 'fri': 
		console.log('Це робочий день');
		break;
		case 'sat': 
		case 'sun': 
		console.log('Це вихідний день');
		break;
	default: console.log('Невірний формат!')
	break;
}
}
 else  if(/[0-4]/.test(formUserDay)) console.log('Це робочий день')
else if(/[5-6]/.test(formUserDay))console.log('Це вихідний день')
else console.log('Error');  


 
