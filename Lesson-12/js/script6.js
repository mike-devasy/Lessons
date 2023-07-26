// Задача 6. Дано масив імен. Застосовуючи відповідне сортування та бінарний пошук 
// визначити, чи є у масиві ім’я довжиною 5 символів і під яким індексом.
let namesArr = ['Sergio', 'Nikola', 'Stas',  'Olga', 'Petros', 'Ganna','Dmitro']
let modifyNamesArr = namesArr.sort((a, b) => a.length - b.length)
document.write(`Отсортований по довжині масив: ${modifyNamesArr}<br>`)
function getIndexOfNameMore5(arr, symbolLimit) { 
	let startIndex = 0;
	let endIndex = arr.length - 1
	while (startIndex <= endIndex) {
			const middleIndex = Math.floor((endIndex + startIndex) / 2);
			if (arr[middleIndex].length === symbolLimit) return middleIndex;
			if (arr[middleIndex].length < symbolLimit) startIndex = middleIndex + 1
			if (arr[middleIndex].length > symbolLimit) endIndex = middleIndex - 1
	}
	return -1;
 }
 const nameIndMore5 = getIndexOfNameMore5(modifyNamesArr, 5)
 const nameMore5 = modifyNamesArr[nameIndMore5]
 if ( nameIndMore5 !== -1) document.write(`В масиві є ім'я, довжиною 5 символів ${nameMore5} під номером ${nameIndMore5}`)
else document.write('В масиві нема такого імені')