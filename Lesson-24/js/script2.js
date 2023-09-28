// Задача 2.Дано інформацію про відвідувачів деякого сайту (для кожного відвідувача зберігається логін).
// Підрахувати для кожного клієнта кількість відвідувань.
// window.onload = function(){
	
// 	let userName = localStorage.getItem('login')
// 	if(userName) {
// 	userName = prompt('Як вас звати?')
// 	localStorage.setItem('login', userName)
// }
// 	let visitNumber = parseInt(localStorage.getItem(userName +'_visitNumber') ?? 0) + 1
// 	localStorage.setItem(userName +'_visitNumber', visitNumber)
// }
// for (let i = 0; i < localStorage.length; i++) {
// 	let key = localStorage.key(i)
// 	if(key.endsWith('_visitNumber')){
// 		 userName = key.replace('_visitNumber','');
// 		 visitNumber = localStorage.getItem(key)
// 	document.write(`Name: ${userName}, Visit number : ${visitNumber}<br>`)
// 	}
	
// }
// ==============================================================================================

let userArr = ['111','222','333','444', '555']
window.onload = function(){
	let userName = prompt('Ваш логін?')
	if(userArr.includes(userName)) {
		let visitNumber = localStorage.getItem(userName)
		if(visitNumber === null){
		visitNumber = 0	
		}
		localStorage.setItem(userName, visitNumber)
		visitNumber++	
	
} else{

	for (let i = 0; i < localStorage.length; i++) {
   let key = localStorage.key(i)
		visitNumber = localStorage.getItem(key)
 document.write(`Name: ${key}, Visit number : ${visitNumber}<br>`)
 }
}
}

	

