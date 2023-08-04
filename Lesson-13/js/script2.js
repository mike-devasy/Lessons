// Задача 2. Реалізувати бінарний пошук (розглядали на попередніх уроках) з використанням рекурсивного алгоритму.
const someArr = [12, 41, 3, 8, 4, 78, 55, 11, 79, 99]
const sortArr = someArr.sort((a,b) => a - b)
console.log(sortArr);
function getRecursBinarySearch(arr, searchElement, startIndex = 0, endIndex = arr.length - 1) { 
	if(startIndex > endIndex) return -1;
	const	 middleIndex = Math.floor((startIndex + endIndex) / 2)
		if(arr[middleIndex] ===  searchElement) return middleIndex;
		else if(arr[middleIndex] < searchElement ) return getRecursBinarySearch(arr, searchElement, middleIndex +1, endIndex);
		else return getRecursBinarySearch(arr, searchElement, startIndex, middleIndex -1);
 }
 console.log(`бінарний пошук з використанням рекурсивного алгоритму , знайден єлемент під номером ${getRecursBinarySearch(sortArr, 4)}`);