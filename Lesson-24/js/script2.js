// Задача 2.Дано інформацію про відвідувачів деякого сайту (для кожного відвідувача зберігається логін).
// Підрахувати для кожного клієнта кількість відвідувань.
 
window.onload = function(){
	
	let userName = localStorage.getItem('login')
	if(userName) {
	userName = prompt('Як вас звати?')
	localStorage.setItem('login', userName)
}
	let visitNumber = parseInt(localStorage.getItem(userName +'_visitNumber') ?? 0) + 1
	localStorage.setItem(userName +'_visitNumber', visitNumber)
}
for (let i = 0; i < localStorage.length; i++) {
	let key = localStorage.key(i)
	if(key.endsWith('_visitNumber')){
		 userName = key.replace('_visitNumber','');
		 visitNumber = localStorage.getItem(key)
	document.write(`Name: ${userName}, Visit number : ${visitNumber}<br>`)
	}
	
}
