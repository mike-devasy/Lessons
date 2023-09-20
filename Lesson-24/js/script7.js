// Задача 7. 		Зберігати у пам’яті список справ, які користувачу треба виконати (зберігати у localStorage).<br>
		//  Періодично випадковим чином вибирати якусь з справ і виводити користувачу (з використанням confirm). <br>
		//  Якщо користувач натискає на «Ок», то видаляти цю задачу.
let todoArr = ['Зверстати новий лендос', 'Передивитись урок по ООП', 'Випити чашечку лунго', 
'Зробити запас сірників та свічок', 'Зробити план на тиждень', 'Запатронити Жеке на його "Фрілансер по життю"']
if(!localStorage.getItem('todoList')){
localStorage.setItem('todoList',JSON.stringify(todoArr))}
function getRandIndex(length) {
	return Math.floor(Math.random()*length)
  } 
	const randIndex = getRandIndex(length)
function getRandomTask(todoArr,randIndex) {
	  let randTask = todoArr[randIndex] 
		return randTask
}
	let intervalId = setInterval(()=>{
		if(todoArr.length === 0){
			clearInterval(intervalId)
	}else {
		let randIndex = getRandIndex(todoArr.length)
		let randTask = getRandomTask(todoArr,randIndex)
		if(confirm(randTask)){
			todoArr.splice(randIndex, 1)
			localStorage.setItem('todoList', JSON.stringify(todoArr))
		}
	}
	}, 2000)
  