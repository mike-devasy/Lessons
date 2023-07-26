// Задача 1. Дано масив 30 випадкових цілих чисел. Підрахувати скільки було обмінів під час сортування бульбашкою
function getRandNum(minNum = 1, maxNum = 100) {
	return  minNum + Math.floor(Math.random()*(maxNum - minNum + 1))
  }
	function getRandArr(arrNumbers = 20) { 
		let randArr = []
		for (let i = 0; i < arrNumbers; i++) {
	  const randNum = getRandNum()
			randArr.push(randNum)
		}
		return randArr
	 }
	 console.log(`${ getRandArr()}`);
	 const randArr =  getRandArr();
	 function getQuantityChanged (randArr) {
		let counter = 0;
		let changed ;
		// let prevLastIndex = randArr.length - 2
	 do {
		changed = false ;
	 
		for (let i = 1; i < randArr.length; i++) {
		if(randArr[i - 1] > randArr[i]) {
			let temp = randArr[i - 1];
			randArr[i - 1] = randArr[i]
			randArr[i] = temp;
			changed = true;
			counter++
		}
		}
	}
	while(changed)
		console.log(randArr);
		return counter
	   } 
	 console.log(`${getQuantityChanged(randArr)}`);
 
