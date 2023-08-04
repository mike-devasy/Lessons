// Задача 0. Реалізувати рекурсивну функцію знаходження степеня числа а
function getDegreeOf(a, n) {
	if(n === 1) return a;
	else if(n >1) return  getDegreeOf(a, n - 1) * a ;
  }
	const degreeOf = getDegreeOf(2, 4)
	console.log(degreeOf);