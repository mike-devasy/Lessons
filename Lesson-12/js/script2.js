// Задача 2. 	Дано масив 30 випадкових цілих чисел. Підрахувати скільки було обмінів під час сортування змішуванням.
function getRandomNum(minNum = 1, maxNum = 1000) {
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
	const arrRandom = getArrRandom();
	function swap(arr, i, j) {
		let temp = arr[i];
		arr[i] = arr[j];
		arr[j] = temp;
	  }
	function getQuantitySortShake(arrRandom) { 
		let leftIndex = 0;
		let rightIndex = arrRandom.length - 1;
		let counter = 0;
		while(leftIndex < rightIndex){
			for (let ind = leftIndex; ind < rightIndex; ind++) {
				if(arrRandom[ind] > arrRandom[ind + 1] ){
				swap(arrRandom, ind, ind + 1)
				counter++
				}
			}
			rightIndex--
			for (let ind = rightIndex; ind > leftIndex; ind--) {
				if(arrRandom[ind] < arrRandom[ind - 1]){
					swap(arrRandom, ind, ind - 1)
					counter++
				}
			}
			leftIndex++

		}
		return counter
	 }
	 console.log(`${getQuantitySortShake(arrRandom)}`);
	 console.log(arrRandom);