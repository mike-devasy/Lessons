// Задача 1.Створити об’єкт «Тир». У масиві зберігаються 1, якщо у цьому квадраті є заєць і 0 в іншому випадку.
//  створюэмо объект Тир,в якому створюємо масив c порожніми клітинами(заповнюємо його 0 )
const cellsNumber = parseInt(prompt('Введіть кількість клітин ігрового поля:', '0'))
let  rubbitNumber = parseInt(prompt('Введіть кількість зайців на ігровому полі :', '0'))
const shootNumber =  parseInt(prompt('Введіть бажану кількість пострілів :', '0'))
const gameField = new Array(cellsNumber).fill(0);
//  Створюємо функцію заповнення поля зайцями(1) :
 
let playTir = {
	playGameField : gameField,
	getRandomCell : function(cellsNumber) { 
		return Math.floor(Math.random() * cellsNumber)
		 },
	getGameFieldWithRubbits : function(gameField, rubbitNumber){
		for (let i = 0; i < rubbitNumber; i++) {
			const randomIndex = this.getRandomCell(cellsNumber)
				if (gameField[randomIndex] === 0) gameField[randomIndex] = 1
			 }
			 return gameField;
	},
	// Починаемо полювати на зайців:
	getGamePlay: function(shootNumber){
  const gameFieldWithRubbits = this.getGameFieldWithRubbits(gameField, rubbitNumber);
		let counter = 0
while(shootNumber > 0 && rubbitNumber > 0) {
	const userIndex  = parseInt(prompt('Введіть номер клітини для пострілу :', '1'))
if (gameFieldWithRubbits[userIndex - 1] === 1)	{
	alert('Попав!!!');
	gameFieldWithRubbits[userIndex - 1] = 0;
	rubbitNumber--;
	counter++;
	shootNumber--;
} else {
	alert('Не попав !!!')
	shootNumber--;
}
// Виводимо игрове поле після кожного пострілу:
console.log(gameFieldWithRubbits);
	}
return [gameFieldWithRubbits, counter]
	}
}

let [gameFieldWithRubbits, counter] = playTir.getGamePlay(shootNumber);
 
console.log(` ${gameFieldWithRubbits} <br> Полювання закінчено! Ваша добича- ${counter}зайця`);