// Задача 9. Морський бій. Користувач вводить кількість клітинок одновимірного масиву 
// та кількість одиночних кораблів. Комп’ютер довільно розміщує ці одиночні кораблі у масиві по один 
// у клітинці (якщо у клітинці 0, то клітинка пуста, якщо 1 – то це означає, що там є корабель. 
	// Користувач вводить номер клітинки, куди стріляє. Гра продовжується до тих пір, поки не будуть потоплені усі кораблі.
 let shipNumber = parseInt(prompt('Введіть кількість кораблів'))
 let cellNumber = parseInt(prompt('Введіть кількість клітинок'))
 function getGameTable(shipNumber, cellNumber) {  
//  Заповнюємо ігрове поле нулями:
let gameTable = new Array(cellNumber).fill(0);
// Виставляемо на цьому полі кораблі :
for (let ship = 0; ship < shipNumber; ) {
	let randIndex = Math.floor(Math.random()* cellNumber)
	if(gameTable[randIndex] === 0){
		gameTable[randIndex] = 1
		ship++
	}
	
}
console.log(gameTable);
return gameTable
 }
 function playGame(shipNumber, gameTable) {
	do{
		let userIndex = parseInt(prompt('Введіть індекс клітинки куди бажаєте вибухнути'))
		if(gameTable[userIndex] === 1){
			alert('Попав');
			gameTable[userIndex] = 0
		} else alert('Промазав')
	}
	while (shipNumber > 0);
   }
	 let gameTable = getGameTable(shipNumber, cellNumber)
	 console.log(gameTable);
	 playGame(shipNumber, gameTable)