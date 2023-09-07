// Задача 11. Сформувати масив з 1000 елементів від 1 до 800. Порівняти час сортування бульбашкою і
// вставкою.
function getRandomNumber(min = 1, max = 800) { 
	return min + Math.floor(Math.random()* (max - min + 1))
 }
function getArrOfRandomNum(numbers = 1000) { 
	let arr = [];
for (let i = 0; i < numbers; i++) {
	const randomNum = getRandomNumber()
	arr.push(randomNum)
}
return arr 
 }
function getSortOfBubble(arr) {
	let changed
	do{
		changed = false
		for (let i = 0; i < arr.length; i++) {
			if(arr[i-1] >arr[i]){
				temp = arr[i-1]
				arr[i-1] = arr[i]
				arr[i] = temp
				changed = true
			}
		}
	}
	while(changed)

	return arr
}
 function getSortOfInsert(arr) {

	let i;
	for (let k = 1; k < arr.length; k++) {
		let currentElement = arr[k]
		i = k - 1;
		while(i >= 0 && arr[i] >  currentElement){
			arr[i + 1] = arr[i]
			i = i - 1
		}
		arr[i + 1] = currentElement;
	}


	return arr
 }
 const arr = getArrOfRandomNum()
 const arr2 = [...arr]
 let startSortOfBubble = new Date()
 getSortOfBubble(arr);
 let endSortOfBubble = new Date()
 const timeOfSortOfBubble = endSortOfBubble - startSortOfBubble
console.log(`Сортування бульбашкою : ${timeOfSortOfBubble}ms`);
let startSortOfInsert = new Date()
getSortOfInsert(arr2)   
let endSortOfInsert = new Date()
const timeOfSortOfInsert = endSortOfInsert - startSortOfInsert
console.log(`Сортування вставкою : ${timeOfSortOfInsert}ms`);  




