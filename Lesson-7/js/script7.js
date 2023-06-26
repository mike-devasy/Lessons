// Задача 7. Створити функцію, яка випадковим чином виводить на екран одне із 4 зображень (шляхи до зображень передаються у функцію)
function getImageRundom() { 
	let ImageNum = 1 + Math.floor(Math.random()* 4)
	document.write(`<img src='../img/photo${ImageNum}.png'></img>`)
	return
 }
 getImageRundom()