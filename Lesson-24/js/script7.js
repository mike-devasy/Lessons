// Задача 7. 		Зберігати у пам’яті список справ, які користувачу треба виконати (зберігати у localStorage).<br>
		//  Періодично випадковим чином вибирати якусь з справ і виводити користувачу (з використанням confirm). <br>
		//  Якщо користувач натискає на «Ок», то видаляти цю задачу.
let todoArr = ['Зверстати новий лендос', 'Передивитись урок по ООП', 'Випити чашечку лунго', 
'Зробити запас сірників та свічок', 'Зробити план на тиждень', 'Запатронити Жеке на його "Фрілансер по життю"']
let todoList = 'todoList'
if(!localStorage.getItem(todoList)){
localStorage.setItem(todoList, JSON.stringify(todoArr))}
function getRandIndex(length) {
	return Math.floor(Math.random()*length)
  } 
function getRandomTask() {
	todoArr = JSON.parse(localStorage.getItem(todoList))
	// перевірка на порожність масиву todoArr:
	if(	todoArr.length === 0){
		return null
	}
	const randIndex = getRandIndex(todoArr.length)
	console.log(todoArr);
	
	  let randTask = todoArr[randIndex] 
		return {task:randTask, index:randIndex}
}
	let intervalId = setInterval(()=>{
		let randomTask = getRandomTask()
		if(randomTask === null){
			clearInterval(intervalId)
	}else {
		let {task, index} = randomTask
		
		if(confirm(task)){
	    todoArr.splice(index, 1)
			localStorage.setItem(todoList, JSON.stringify(todoArr))
		}
	}
	}, 2000)
