// Задача 8. Створити функцію, яка виводить банер (у функцію передаються: зображення, заголовок та посилання, куди переходимо при кліку на зображення (тег img повине знаходитись у середині тега a: <a> <img src=”шлях”> </a>
function getBunner(sourse, title, link) {
	document.write(`<h1>${title}</h1>`)
	document.write(`<a href= ${link}><img src='../img/${sourse}.png' <style: max-width = 100%  mmax-hight = 100% >  ></img></a>`);
return
}
let userSouce = prompt('Введіть назву фото', 'photo1,photo2 і т.і.')
let userTitle = prompt('Введіть свій заголовок', 'свій заголовок')
let userLink = prompt('Введіть своє посилання', 'photo1,photo2 і т.і.')
getBunner(userSouce, userTitle, userLink)