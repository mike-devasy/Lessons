// Задача 3.Дано масив 30 випадкових цілих чисел. Підрахувати скільки було обмінів під час сортування включеннями.
function getRandomNum(minNum = 1, maxNum = 100) {
	return minNum + Math.floor(Math.random()*(maxNum - minNum + 1))
  }
	function getArrRandom(arrNumbers = 30){
		let arrRandom = []
		for (let i = 0; i < arrNumbers; i++) {
		const randNum = getRandomNum()
			arrRandom.push(randNum);
		}
		return arrRandom
	}
	console.log(`${getArrRandom()}`);