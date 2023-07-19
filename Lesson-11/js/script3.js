// Морський бій. Випадковим чином на двовимірному полі 
// розміром 6*6 розташовується 5 кораблів. Користувач стріляє 
// вказуючи координати. Гра продовжується поки не потоплено усі кораблі або у користувача не закінчаться снаряди.
const rowsNumber = parseInt(prompt('Введіть кількість рядків іграшкового полю','1'))
const colsNumber = parseInt(prompt('Введіть кількість колонок іграшкового полю','1'))
const shipsNumber = parseInt(prompt('Введіть кількість кораблів','1'))
function generateGameField (rowsNumber, colsNumber, shipsNumber) {
	// Створюємо масив,заповнений нулями:
let arr = []
for (let row = 0; row < rowsNumber; row++) {
	let newRow = new Array(colsNumber).fill(0)
	arr.push(newRow)
}
  
	// ============================================
	//---- Розміщуємо кораблі:
	for (let shipNum = 0; shipNum < shipsNumber; ) {
		const randRowIndex = Math.floor(Math.random() * rowsNumber)
		const randColIndex = Math.floor(Math.random() * colsNumber)
		if(arr[randRowIndex][randColIndex] !== 1 ) {
			arr[randRowIndex][randColIndex] = 1
			shipNum ++
		}
	}
	return arr
}
let arr = generateGameField (rowsNumber, colsNumber, shipsNumber)
const shotsNumber = parseInt(prompt('Введіть кількість пострілів','5'))

function playGame(arr, shotsNumber, shipsNumber) {
	do{
const userRowIndex = parseInt(prompt('Введіть номер рядка для постріла','1'))
const userColIndex = parseInt(prompt('Введіть номер колонки для постріла','1'))
	if(arr[userRowIndex - 1][userColIndex - 1] === 1){
		arr[userRowIndex - 1][userColIndex - 1] = 0
		alert('Попав!')
		shipsNumber--
	}else alert('Не попав...')
	shotsNumber--;
	}
	while(shotsNumber > 0 && shipsNumber > 0) ;
	if(shotsNumber === 0) alert('Шкода...Ваші постріли закінчились');
	if(shipsNumber === 0) alert('Вітаємо с перемогою!')

  }
	playGame(arr, shotsNumber, shipsNumber);