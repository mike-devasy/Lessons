// Задача 1. Нехай x_0=1, x_i=x_i-1+2i , де i=1,2,...  Визначити x_10 . 
// Розв’язати з використанням рекурсивних і нерекурсивних алгоритмів
 
function getRecursResult(i) {
 if( i === 0) return 1;
 else return getRecursResult(i - 1) + 2 * i;
}
console.log(`Результат з рекурсивним алгоритмом : ${getRecursResult(10)}`)
function getResultWithLoop (someNum){
	let x = 1;
	for (let i = 0; i <= someNum; i++) {
		x += 2 * i;
	}
	return x
}
console.log(`Результат з циклом : ${getResultWithLoop (10)}`)