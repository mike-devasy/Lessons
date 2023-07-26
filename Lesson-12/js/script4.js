// Задача 4.Для розглянутих методів сортування спробувати вивести етапи сортування шляхом виведення відповідних таблиць за зразком.
// 		Тобто кожного разу після обміну елементів вивести поточний стан масиву на екран.
document.write('Сортування бульбашкой :'+'<br>');
let a = [8, 2, 6, 4, 15, 11]
let changed
do{
	changed = false;
	for (let i = 1; i < a.length; i++) {
		if(a[i - 1] > a[i]){
			let temp = a[i - 1]
			a[i -1] = a[i]
			a[i] = temp
	    changed = true
			document.write(`Перестановка :${a}`+'<br>');
		}
	}
}
while(changed);
document.write('Змішане сортування:'+'<br>')
let arr = [10, 14, 56, 36, 15, 21, 11,]
let leftIndex = 0;
let rightIndex = arr.length - 1
function swap(arr, i, j) { 
	let temp = arr[i];
	arr[i] = arr[j];
	arr[j] = temp
 }
while(leftIndex < rightIndex){
for (let ind = leftIndex; ind < rightIndex; ind++) {
if(arr[ind] > arr[ind + 1])	{swap(arr, ind, ind + 1)}
document.write(`Прямий рух :${arr} <br>`);

}
rightIndex--
for (let ind = rightIndex; ind > leftIndex; ind--) {
	if(arr[ind] < arr[ind - 1])	{swap(arr, ind, ind - 1)}
	document.write(`Зворотній рух ${arr} <br>`);
	}
	leftIndex++
}

document.write('Сортування включенням :'+'<br>');
let userArr = [14, 2, 51, 77, 21, 4, 36, 11]
function getIncludeSortArr(array) {
	let i;
	for (let k = 1; k < array.length; k++) {
		let currentElement = array[k]
		i = k - 1;
		while(i >= 0 && array[i] >  currentElement){
			array[i + 1] = array[i]
			i = i - 1
		}
		array[i + 1] = currentElement;
		document.write(`Вставка ${array} <br>`);
	}
	return array
  }
document.write(`${getIncludeSortArr(userArr)}<br>`)
document.write('Сортування вибором :'+'<br>');
let arrSelect = [-9, 21, 10, -2, 35]
let prevLastIndex2 = arrSelect.length - 2;
for (let i = 0; i <= prevLastIndex2; i++) {
for (let j = i +1; j < arrSelect.length; j++) {
	if(arrSelect[i] > arrSelect[j]){
		let temp = arrSelect[i]
		arrSelect[i] = arrSelect[j]
		arrSelect[j] = temp
	}
	document.write(`Перестановка ${arrSelect} <br>`);
}	
}
document.write('Сортування вибором c находженням минимального:'+'<br>');
let arrSelect2 = [7, 12, -11, 55, -9, 21, 10, -2, 35]
let prevLastIndex3 = arrSelect2.length - 2;
for (let i = 0; i <= prevLastIndex3; i++) {
	let minIndex = i
for (let j = i +1; j < arrSelect2.length; j++) {
	if(arrSelect2[j] < arrSelect2[minIndex]){
	 minIndex = j
	}
}
	if (i !== minIndex){
		let temp = arrSelect2[i]
		arrSelect2[i] = arrSelect2[minIndex]
		arrSelect2[minIndex] = temp
	document.write(`Перестановка * ${arrSelect2} <br>`);
}	
}
document.write('Швидке сортування :'+'<br>');
let speedArr = [45, -23, 12, 78, -4, 77, 36, 98, -78, 24, 7, 39]
function swap2(arr, i, j) {
	let temp = arr[i]
	arr[i] = arr[j]
	arr[j]= temp
  }
function partition(arr, p, q) { 
	let pivot = arr[q]
	let i = p - 1
	for (let j = p; j < q; j++) {
		if(arr[j] <= pivot){
			i = i +1 ;
			swap2(arr, i, j)
			document.write(`Перестановка зліва від pivot:${arr}`+'<br>');
		}
	}
	swap2(arr, i + 1, q)
	document.write(`Перестановка  pivot:${arr}`+'<br>');
	return i + 1
 }
 function quickSort(arr, p, q) {
	if(p >= q) return
	let i = partition(arr, p, q)
	quickSort(arr, p, i - 1)
	quickSort(arr, i + 1, q)
   }
	 quickSort(speedArr, 0, speedArr.length - 1)
	 document.write(speedArr)
